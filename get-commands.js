const subage = (language = 'tw') => {
	const pattern = {
		en: `$(eval is=$(urlfetch json https://bit.ly/3Dnpujc);i=is.find(x=>x.name=='$(user)');n=i?.nick||'$(user)';d=((Date.now()-i?.subDate)/(86400000));i?n+" has sub "+d.toFixed(0)+" days!":"$(user) no sub (☍﹏⁰)")`,
		tw: `$(eval is=$(urlfetch json https://bit.ly/3Dnpujc);i=is.find(x=>x.name=='$(user)');n=i?.nick||'$(user)';d=((Date.now()-i?.subDate)/(86400000));i?n+"已訂閱"+d.toFixed(0)+"天！":"$(user)沒訂閱(☍﹏⁰)")`
	}
	return pattern[language];
}

// console.log('sar-highlight', sarhighlight('tw'));
console.log('subage', subage('tw'));
