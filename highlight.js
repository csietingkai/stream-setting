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
        name: { en: 'other streamer', tw: '主播臭DD'},
        url: 'https://www.youtube.com/playlist?list=PLx2rcDoLcQEnvhBbWhl6tzjpQg9vdkuls'
    },
    sarhighlight: {
        name: { en: 'SAR', tw: '小動物'},
        url: 'https://www.youtube.com/playlist?list=PLx2rcDoLcQEkWIo1_YkSDtzdh7-9V4Drd'
    }
}

const getVideoUrls = (target = '', length = 0) => {
     if (target && location.href === highlightPlaylists[target].url) {
        console.log(`[INFO] Handling ${target} playlist.`);

        let videos = $$('a#video-title');
        if (length > 0 && videos.length > length) {
            videos = videos.slice(videos.length - length);
        }
        return videos.map((v) => {
            search = v.search.substring(1);
            param = JSON.parse(
                '{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}',
                (key, value) => { return key === '' ? value : decodeURIComponent(value)
            });
            targetUrl = `https://youtu.be/${param.v}`
            return targetUrl;
        });
    }
    console.error('[WARN] Current site is not valid playlist.');
    return [];
}

const getMessage = (language = 'tw', videoCounts = 3) => {
    let playlistsTarget = '';
    Object.keys(highlightPlaylists).forEach(key => {
        if (location.href === highlightPlaylists[key].url) {
            playlistsTarget = key;
        }
    });
    const highlightUrls = getVideoUrls(playlistsTarget, videoCounts);
    if (highlightUrls && highlightUrls.length > 0) {
        const randomMax = highlightUrls.length - 1;
        const randomMin = 0;
        const highlightUrlsText = `['${highlightUrls.join('\'\,\'')}']`;
        const pattern = {
            en: `Come and see ${highlightPlaylists[playlistsTarget].name[language]}'s highlight: $(eval ${highlightUrlsText}[Math.floor(Math.random()*${randomMax-randomMin+1}+${randomMin})])`,
            tw: `快來看看${highlightPlaylists[playlistsTarget].name[language]}的精華影片:$(eval ${highlightUrlsText}[Math.floor(Math.random()*${randomMax-randomMin+1}+${randomMin})])`
        }
        return pattern[language];
    }
    console.error('[WARN] highlightUrls get no video urls.');
    const pattern = {
        en: `There is no ${playlistsTarget + playlistsTarget ? '\'s ' : '' }highlight videos. (☍﹏⁰)`,
        tw: `現在沒有${playlistsTarget + playlistsTarget ? '的' : '' }精華影片捏 (☍﹏⁰)`,
    };
    return pattern[language];
}
