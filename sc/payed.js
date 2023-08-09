const init = () => {
    const key = localStorage.getItem('key');
    const scs = JSON.parse(localStorage.getItem('scs')) || [];
    const sc = scs.find(x => x.time == key);
    if (sc) {
        $('#orderNum').text(key);
        $('#price').text(numberComma(sc.price));
        $('#total').text(numberComma(sc.price));
    }
}
