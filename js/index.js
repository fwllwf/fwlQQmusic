FastClick.attach(document.body);
(async function () {
  const box = document.querySelector('#app'),


    outer = document.querySelector('.outer'),

    act = document.querySelector('.act'),
    audioBox = document.querySelector('#audiobox'),
    word = document.querySelector('.word'),
    loadingBox = document.querySelector('.loading-box')

  let timer = null
  let wordList = []
  let matchNum = 0




  //绑定数据
  const bindLyric = function bindLyric(lyric) {
    //处理歌词部分特殊符号
    let arr = []
    lyric.replace(/\[(\d+):(\d+).(?:\d+)\](.+)\n/g, (_, $1, $2, $3) => {
      arr.push({
        minutes: $1,
        seconds: $2,
        text: $3.trim()
      })
    })
    let str = ``
    arr.forEach(({ minutes, seconds, text }) => {
      str += `<h2 minutes="${minutes}" seconds="${seconds}">
    ${text}
    </h2>`
    })
    word.innerHTML = str
    //获取所有的h2标签
    wordList = Array.from(word.querySelectorAll('h2'))


  }



  const binding = function banding(data) {
    let { title, author, audio, lyric } = data
    word.innerHTML += `<h1 class='title'>${title}-${author}</h1>`

    audioBox.src = audio

    console.log(audioBox.src);

    //绑定歌词信息
    bindLyric(lyric)

    loadingBox.style.display = 'none'
  }
  const format = function format(time) {
    let minutes = Math.floor(time / 60),
      seconds = Math.round(time - minutes * 60)
    minutes = minutes < 10 ? '0' + minutes : '' + minutes
    seconds = seconds < 10 ? '0' + seconds : '' + seconds
    return {
      minutes,
      seconds
    }
  }
  const playEnd = function playEnd() {
    //播放完毕做什么
    act.style.display = 'block'
    outer.classList.remove("move");
    word.style.transform = `translateY(0)`

  }

  const handle = function hnadle() {
    let HH = wordList[0].offsetHeight
    //控制进度条
    let { currentTime, duration } = audioBox
    if (isNaN(currentTime) || isNaN(duration)) return
    //播放结束
    if (currentTime >= duration) {
      playEnd()
      return
    }
    let { minutes: currentTimeminutes, seconds: currentTimeseconds } = format(currentTime),
      { minutes: durationMinutes, seconds: durationSeconds } = format(duration)
    ratio = Math.floor(currentTime / duration * 100)


    //控制歌词  查找和当前播放时间匹配的段落  
    let matchs = wordList.filter(item => {
      let minutes = item.getAttribute('minutes'),
        seconds = item.getAttribute('seconds')
      return minutes === currentTimeminutes && seconds === currentTimeseconds
    })

    if (matchs.length > 0) {
      wordList.forEach(item => item.classList = '')
      matchs.forEach(item => item.classList = 'active')
      //控制移动
      matchNum += matchs.length
      if (matchNum > 3) {
        let offect = (matchNum - 3) * HH
        word.style.transform = `translateY(${-offect}px)`
      }
    }

  }

  box.addEventListener('click', function (ev) {
    if (audioBox.paused) {
      //当前是暂停的 让其播放
      audioBox.play()
      act.style.display = 'none'
      handle()
      if (!timer) timer = setInterval(handle, 1000)

      outer.classList.add("move")

      return
    }

    //当前是播放的
    audioBox.pause()
    act.style.display = 'block'
    outer.classList.remove("move");

    clearInterval(timer)
    timer = null

  })

  /*  向服务发送请求 从服务器获取相关数据 */
  try {
    let { code, data } = await API.queryLyric()
    if (+code === 0) {
      //请求成功 网络层和业务层都成功
      binding(data)
      return
    }
  } catch (_) {
    console.log(_);
  }
  alert('网络繁忙，请刷新页面')


})()