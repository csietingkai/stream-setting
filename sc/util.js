const numberComma = (num) => {
    if (!num || isNaN(num)) {
        num = 0;
    }
    const strNum = num.toString();
    return strNum.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;

const env = {
    WORKER_URL: 'https://backend.tkpay.workers.dev',
    FETCH_TIME: 5000
};

const getUrlParams = (queryString = window.location.search) => {
    const urlParams = new URLSearchParams(queryString);
    const map = {};
    for (const param of urlParams) {
        map[param[0]] = param[1];
    }
    return map;
}
