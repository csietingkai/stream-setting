// 使用方法：
// 輸入網址進入指定的播放清單
// 按下 F12, 切換到終端機(Console)分業
// 將以下全部程式碼複製貼上+Enter
// 使用函式 getMessage('tw', 3)
// 函式第一個參數為語言, 目前可支援 'tw'、'en'
// 函式第二個參數為影片個數, 隨機選擇目前播放清單最後幾隻影片
// 產出的字串直接複製貼上到 nightbot 的客製指令內即可

const highlightPlaylists = {
    dd: {
        name: { en: 'other streamer', tw: '主播臭DD' },
        url: 'https://www.youtube.com/playlist?list=PLx2rcDoLcQEnvhBbWhl6tzjpQg9vdkuls'
    },
    sarhighlight: {
        name: { en: 'SAR', tw: '小動物' },
        url: 'https://www.youtube.com/playlist?list=PLx2rcDoLcQEkWIo1_YkSDtzdh7-9V4Drd'
    }
}

const getVideos = () => {
    let target = '';
    Object.keys(highlightPlaylists).forEach(key => {
        if (location.href === highlightPlaylists[key].url) {
            target = key;
        }
    });
    if (target && location.href === highlightPlaylists[target].url) {
        const videos = $$('a#video-title');
        return videos.map((v) => {
            const {innerText, data: { watchEndpoint: { videoId } } } = v;
            return { title: innerText, url: `https://www.youtube.com/watch?v=${videoId}` };
        });
    }
    console.error('[WARN] Current site is not valid playlist.');
    return [];
}

const videos = getVideos();
console.log(videos);
console.log(JSON.stringify(videos, null, 4));
