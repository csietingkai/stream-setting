const onFormChange = (event) => {
    $(event.target).removeClass('red-border');
}

const setCount = (event) => {
    onFormChange(event);
    $('#message').bind('input', function () {
        $('#char').text(this.value.length);
    });
}

const onPayClick = () => {
    let error = false;

    const nick = $('#nick').val();
    const price = $('#price').val();
    const message = $('#message').val();

    if (!nick) {
        $('#nick').addClass('red-border');
        error = true;
    }
    if (!price || isNaN(price) || price <= 0) {
        $('#price').addClass('red-border');
        error = true;
    }
    if (!message) {
        $('#message').addClass('red-border');
        error = true;
    }

    const now = new Date().getTime();
    const item = { time: now, nick, price, message };
    if (!error) {
        websocket.send(JSON.stringify({ action: ACTION.DONATE, payload: { key, data: item } }));
        $('#orderNum').text(item.time);
        $('#payed-price').text(numberComma(item.price));
        $('#total').text(numberComma(item.price));
        $('#donate-page').addClass('hide')
        $('#payed-page').removeClass('hide')
    }
}
