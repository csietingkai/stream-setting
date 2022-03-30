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
	nick: '',
	subDate: new Date('2021-10-03').getTime()
}, {
	name: '糕糕',
	nick: '',
	subDate: new Date('2021-10-04').getTime()
}, {
	name: '宜臻',
	nick: '',
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
	nick: '',
	subDate: new Date('2022-03-24').getTime()
}, {
	name: '糖心',
	nick: '',
	subDate: new Date('2022-03-24').getTime()
}, {
	name: '季雲',
	nick: '',
	subDate: new Date('2022-03-26').getTime()
}];

const subJson = JSON.stringify(subsInfo);

const getMessage = (language = 'tw') => {
	const pattern = {
		en: `$(eval is=$(urlfetch json https://bit.ly/3Dnpujc);i=is.find(x=>x.name=='$(user)');n=i?.nick||'$(user)';d=((Date.now()-i?.subDate)/(86400000));i?n+" has sub "+d.toFixed(0)+" days!":"$(user) no sub (☍﹏⁰)")`,
		tw: `$(eval is=$(urlfetch json https://bit.ly/3Dnpujc);i=is.find(x=>x.name=='$(user)');n=i?.nick||'$(user)';d=((Date.now()-i?.subDate)/(86400000));i?n+"已訂閱"+d.toFixed(0)+"天！":"$(user)沒訂閱(☍﹏⁰)")`
	}
	return pattern[language];
}

getMessage('tw');
