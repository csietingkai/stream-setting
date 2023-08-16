let key = '';

const init = async () => {
    key = getUrlParams(window.location.search).key;
    if (key) {
        const channel = await fetchChannel(key);
        $('#dnTarget').attr('href', channel);
        $('#dnTarget').text(channel);
    }
}

const fetchChannel = (key) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: `${env.WORKER_URL}?key=${key}-channel`,
            dataType: 'text',
            success: (res) => {
                resolve(res);
            },
            fail: (xhr, ajaxOptions, thrownError) => {
                reject(false);
            },
        })
    });
}

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
        postScs(item);
        localStorage.setItem('sc', JSON.stringify(item));
        window.location.pathname = 'sc/payed.html';
    }
}

const postScs = async (item) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'POST',
            url: `${env.WORKER_URL}?key=${key}`,
            dataType: 'json',
            data: JSON.stringify(item),
            success: (res) => {
                resolve(res);
            },
            fail: (xhr, ajaxOptions, thrownError) => {
                reject(false);
            },
        })
    });
}
