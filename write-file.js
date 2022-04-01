const subsInfo = [{
	name: 'River Tsai',
	nick: '小二',
	subDate: new Date('2021-05-27').getTime()
}, {
	name: '索馬',
	nick: '小狼',
	subDate: new Date('2021-09-08').getTime()
}, {
	name: '蔡詠聿',
	nick: '波波',
	subDate: new Date('2021-10-03').getTime()
}, {
	name: '糕糕',
	nick: '',
	subDate: new Date('2021-10-04').getTime()
}, {
	name: '宜臻',
	nick: '呱呱',
	subDate: new Date('2021-10-05').getTime()
}, {
	name: 'malyu',
	nick: '',
	subDate: new Date('2021-11-17').getTime()
}, {
	name: 'Huhaya',
	nick: '',
	subDate: new Date('2021-11-26').getTime(),
}, {
	name: '睡貓',
	nick: '',
	subDate: new Date('2021-12-21').getTime()
}, {
	name: 'Jack Yang',
	nick: '點點用他老公的帳號',
	subDate: new Date('2022-03-24').getTime()
}, {
	name: '糖心',
	nick: '短腿',
	subDate: new Date('2022-03-24').getTime()
}, {
	name: '季雲',
	nick: '',
	subDate: new Date('2022-03-26').getTime()
}];

const ddHighlight = [
    {
        title: '【珈琲モカ】【直播精華】歐派！！ (́◉◞౪◟◉‵)',
        url: 'https://youtu.be/hZeZtVaz3-w'
    },
    {
        title: '【珈琲モカ】【直播精華】海咩寶寶ヾ(´︶`*)ﾉ♬',
        url: 'https://youtu.be/kFziODOmQcw'
    },
    {
        title: '【珈琲モカ】【直播精華】這在業界是種獎勵',
        url: 'https://youtu.be/8iNyIYo1pw4'
    },
    {
        title: '【珈琲モカ】【直播精華】小三好棒喔(*ﾟ∀ﾟ*)',
        url: 'https://youtu.be/NWyP9sH9TuI'
    },
    {
        title: '【聊天】轉播零零演唱會(´≖◞౪◟≖)',
        url: 'https://youtu.be/SXcYh8EYlGw'
    },
    {
        title: '【零零ゼロ】【直播精華】RIVER是男的 (ﾟ∀。)',
        url: 'https://youtu.be/tWhAX4iRkkY'
    },
    {
        title: '【珈琲モカ】【直播精華】大姊姊真棒 (^ρ^)/',
        url: 'https://youtu.be/D0fMFjToBI0'
    },
    {
        title: '【珈琲モカ】【直播精華】加薪！！！',
        url: 'https://youtu.be/BVLZieP-Jj0'
    }
];

const sarHighlight = [
    {
        title: '【Super Animal Royale】【直播精華】謝謝大哥帶我吃雞(ﾟ∀ﾟ)',
        url: 'https://youtu.be/2n3rC5drrIQ'
    },
    {
        title: '【Super Animal Royale】【直播精華】求三文魚心理陰影面積',
        url: 'https://youtu.be/TQB06Zd0Pp0'
    },
    {
        title: '【Super Animal Royale】【直播精華】終究還是玩脫了',
        url: 'https://youtu.be/ACDMrCyptf8'
    },
    {
        title: '【Super Animal Royale】【直播精華】窩是噁男',
        url: 'https://youtu.be/Hc-ficvLn6s'
    }
]

const write = (filename, values) => {
	const fs = require('fs');
	fs.writeFile(`${__dirname}/${filename}.json`, JSON.stringify(values, null, 4), (err) => {
		console.log(err);
	});
}

write('subs', subsInfo);
write('dd-highlight', ddHighlight);
write('sar-highlight', sarHighlight);
