const init = () => {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const price = params.get('price');

    $('#author-name').text(params.get('name'));
    $('#purchase-amount').text(numberComma(price));
    $('#message').text(params.get('message'));

    const scColor = color(price);
    if (scColor) {
        $('#card').addClass(color(price));
    }
}

const color = (price) => {
    if (!price || isNaN(price)) {
        return '';
    }
    if (price < 75) {
        return 'blue';
    } else if (price >= 75 && price < 150) {
        return 'green';
    } else if (price >= 150 && price < 300) {
        return 'yellow';
    } else if (price >= 300 && price < 1500) {
        return 'orange';
    } else if (price >= 1500) {
        return 'red';
    }
}

const numberComma = (num) => {
    if (!num || isNaN(num)) {
        num = 0;
    }
    const strNum = num.toString();
    return strNum.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};
