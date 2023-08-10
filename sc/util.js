const numberComma = (num) => {
    if (!num || isNaN(num)) {
        num = 0;
    }
    const strNum = num.toString();
    return strNum.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;

const env = {
    ACCOUNT_ID: '7e0f9357b1d59ce72c2185f631c23a4e',
    NAMESPACE_ID: 'e94ebc6423db42eea401329e7d8b92f1',
    BB_KEY: 'yBB0822',
    KV_WRITE: 'TpKZsijLCHtKQpjzoPnF-p6eHDZ5D6u302Ed7xYP',
    KV_READ: 'NSkuMHn0myQi0AvHIW6S1nUjq_avQtDiZGsIncYc'
}
