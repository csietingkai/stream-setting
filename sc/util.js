const numberComma = (num) => {
    if (!num || isNaN(num)) {
        num = 0;
    }
    const strNum = num.toString();
    return strNum.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;

const env = {
    WORKER_URL: 'wss://backend.tkpay.workers.dev/',
    FETCH_TIME: 5000,
    MAX_SC_SIZE: 3
};

const ACTION = {
    GET_CHANNEL: 'GET_CHANNEL',
    GET_SCS: 'GET_SCS',
    DONATE: 'DONATE'
}

const getUrlParams = (queryString = window.location.search) => {
    const urlParams = new URLSearchParams(queryString);
    const map = {};
    for (const param of urlParams) {
        map[param[0]] = param[1];
    }
    return map;
}

const websocket = new WebSocket(env.WORKER_URL);
let key = '';

const init = () => {
    key = getUrlParams(window.location.search).key;
    if (key) {
        websocket.send(JSON.stringify({ action: ACTION.GET_CHANNEL, payload: `${key}-channel` }));
        websocket.send(JSON.stringify({ action: ACTION.GET_SCS, payload: key }));

        setInterval(() => {
            websocket.send(JSON.stringify({ action: ACTION.GET_SCS, payload: key }));
        }, env.FETCH_TIME);
    }
}

websocket.addEventListener('open', init);

const handleResp = (event) => {
    const response = JSON.parse(event.data);
    if (response.action === ACTION.GET_CHANNEL) {
        const { data: channel } = response;
        $('#dnTarget').attr('href', channel);
        $('#dnTarget').text(channel);
    } else if (response.action === ACTION.GET_SCS) {
        const scs = response.data;
        const latest = localStorage.getItem('latest');
        if (scs.length > 0 && scs[0].time != latest) {
            localStorage.setItem('latest', scs[0].time);
            showdn(scs[0]);
        }
        showCards(scs);
    }
}

websocket.addEventListener('message', handleResp);


websocket.onclose = () => console.log('close connection');
