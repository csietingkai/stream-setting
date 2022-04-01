const sarhighlight = (language = 'tw') => {
    const pattern = {
        en: `$(eval vs=$(urlfetch json https://bit.ly/3Ds3R1j);l=vs.length;l?"Come and see SAR's highlight: "+vs[Math.floor(Math.random()*(l+1))].url:"There is no SAR's highlight videos. (☍﹏⁰)")`,
        tw: `$(eval vs=$(urlfetch json https://bit.ly/3Ds3R1j);l=vs.length;l?"快來看看小動物的精華影片："+vs[Math.floor(Math.random()*(l+1))].url:"現在沒有小動物的精華影片捏 (☍﹏⁰)")`
    }
    return pattern[language];
}

const ddhighlight = (language = 'tw') => {
    const pattern = {
        en: `$(eval vs=$(urlfetch json https://bit.ly/3iS7cgH);l=vs.length;l?"Come and see Other Streamers' highlight: "+vs[Math.floor(Math.random()*(l+1))].url:"There is no Other Streamers' highlight videos. (☍﹏⁰)")`,
        tw: `$(eval vs=$(urlfetch json https://bit.ly/3iS7cgH);l=vs.length;l?"快來看看主播臭DD的精華影片："+vs[Math.floor(Math.random()*(l+1))].url:"現在沒有主播臭DD的精華影片捏 (☍﹏⁰)")`
    }
    return pattern[language];
}

const subage = (language = 'tw') => {
	const pattern = {
		en: `$(eval is=$(urlfetch json https://bit.ly/3Dnpujc);i=is.find(x=>x.name=='$(user)');n=i?.nick||'$(user)';d=((Date.now()-i?.subDate)/(86400000));i?n+" has sub "+d.toFixed(0)+" days!":"$(user) no sub (☍﹏⁰)")`,
		tw: `$(eval is=$(urlfetch json https://bit.ly/3Dnpujc);i=is.find(x=>x.name=='$(user)');n=i?.nick||'$(user)';d=((Date.now()-i?.subDate)/(86400000));i?n+"已訂閱"+d.toFixed(0)+"天！":"$(user)沒訂閱(☍﹏⁰)")`
	}
	return pattern[language];
}

console.log('sar-highlight', sarhighlight('tw'));
console.log('dd-highlight', sarhighlight('tw'));
console.log('subage', subage('tw'));
