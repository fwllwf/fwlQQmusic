
console.log('1111');

const obj = {
    code: 0,
    message: 'ok',
    data: {
        title: '小桥',
        author: '暗杠',
        pic: 'images\\UQ.jpg',
        audio: "gq\\123322.mp3",
        lyric: "[00:00.00] 作词 : 小陈\n[00:00.87] 作曲 : 暗杠\n[00:01.74]\n[00:22.74]小桥 她站在小溪上\n[00:27.86]小溪 她缠在小村旁\n[00:33.32]小村 她是个美脸蛋的姑娘\n[00:38.19]哦 姑娘她的小手儿撑在小桥上\n[00:43.86]小桥 她站在小溪上\n[00:49.19]小溪 她缠在小村旁\n[00:54.62]小村 她是个美脸蛋的姑娘\n[00:59.72]哦 姑娘她的小手儿撑在小桥上\n[01:07.08]然后她说\n[01:09.40]枯藤老树伴昏鸦\n[01:13.09]小桥流水无人家\n[01:17.70]荒草埋过小石板路\n[01:23.77]春园逃出一支桃花\n[01:28.31]谁在树下睡着咯\n[01:34.00]轻风偷走了他的酒\n[01:39.04]小桥还是呆呆的\n[01:45.45]听着小溪哗啦啦\n[02:12.18]小桥 她站在小溪上\n[02:17.30]小溪 她缠在小村旁\n[02:22.52]小村 她是个美脸蛋的姑娘\n[02:27.63]哦 姑娘她的小手儿撑在小桥上\n[02:32.67]然后她说\n[02:34.63]枯藤老树伴昏鸦\n[02:38.19]小桥流水无人家\n[02:43.06]荒草埋过小石板路\n[02:48.98]春园逃出一支桃花\n[02:53.84]谁在树下睡着咯\n[02:59.10]轻风偷走了他的酒\n[03:04.49]小桥还是呆呆的\n[03:10.44]听着小溪哗啦啦\n[03:17.89]然后她说\n[03:19.88]枯藤老树伴昏鸦\n[03:23.30]小桥流水无人家\n[03:28.39]荒草埋过小石板路\n[03:34.60]春园逃出一支桃花\n[03:38.96]谁在树下睡着咯\n[03:44.59]轻风偷走了他的酒\n[03:49.69]小桥还是呆呆的\n[03:56.01]听着小溪哗啦啦\n[04:00.43]小桥还是呆呆的\n[04:06.76]听着小溪哗啦啦\n[04:13.56]\n[04:14.56]制作人：暗杠\n[04:15.16]编曲：小猛/费华为\n[04:15.26]录音：喻岱/郭晓瑞\n[04:15.36]混音、母带：白志森\n[04:15.46]和声编配、和声：暗杠\n[04:15.56]封面书法：龙渊\n[04:15.56]封面原画：鸟叔叔\n"
    }
}

const API = {

    queryLyric() {
        console.log('33', API);
        return new Promise(resolve => {
            setTimeout(
                () => {
                    resolve(obj)
                },
                Math.round(Math.random() * (2000 - 500) + 500)
            )
        })
    }
}
console.log('2', API);