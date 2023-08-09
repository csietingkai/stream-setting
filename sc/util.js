const numberComma = (num) => {
    if (!num || isNaN(num)) {
        num = 0;
    }
    const strNum = num.toString();
    return strNum.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;
