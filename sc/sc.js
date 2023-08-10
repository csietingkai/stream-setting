const scImgs = [
    '1135957085633396737',
    '1135957048220209172',
    '1135957078964449482',
    '1135957074908561580',
    '1135957070798135427',
    '1135957066356379708',
    '1135957055665098922',
    '1135957081971752960',
    '1135957052276093008',
    '1135957060249452564'
];

const init = async () => {
    const scs = await fetchScs();
    showCards(scs);

    setInterval(async () => {
        const scs = await fetchScs();
        showCards(scs);
    }, 5000);
}

const showCards = (scs) => {
    $('#cards').empty();

    for (const sc of scs) {
        const t = $('#template').clone();
        t.attr('id', sc.time);
        t.removeClass('hide');

        t.find('.author-name').text(sc.nick);
        t.find('.purchase-amount').text(numberComma(sc.price));
        t.find('.message').text(sc.message);

        const scColor = color(sc.price);
        if (scColor) {
            t.addClass(scColor);
        }

        t.find('.img').attr('src', `https://cdn.discordapp.com/emojis/${scImgs[sc.time % scImgs.length]}.webp?size=40&quality=lossless`);

        $('#cards').append(t);
    }
}

const fetchScs = async () => {
    const url = `https://api.cloudflare.com/client/v4/accounts/${env.ACCOUNT_ID}/storage/kv/namespaces/${env.NAMESPACE_ID}/values/${env.BB_KEY}`;
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url,
            dataType: 'json',
            beforeSend: (xhr) => {
                xhr.setRequestHeader('Authorization', `Bearer ${env.KV_READ}`);
            },
            success: (res) => {
                resolve(res);
            },
            fail: (xhr, ajaxOptions, thrownError) => {
                reject(false);
            },
        })
    });
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
