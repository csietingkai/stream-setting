const init = () => {
    let sc = localStorage.getItem('sc');
    if (sc) {
        sc = JSON.parse(localStorage.getItem('sc'));
        $('#orderNum').text(sc.time);
        $('#price').text(numberComma(sc.price));
        $('#total').text(numberComma(sc.price));
    }
}
