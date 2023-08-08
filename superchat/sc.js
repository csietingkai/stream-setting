const init = () => {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get('product')
    console.log(product);
}

const numberComma = (num) => {
    if (!num || isNaN(num)) {
        num = 0;
    }
    const strNum = num.toString();
    return strNum.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};
