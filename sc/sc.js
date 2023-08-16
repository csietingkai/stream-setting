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

const showCards = (scs) => {
    $('#cards').empty();

    const now = new Date().getTime();
    scs = scs.filter(sc => now - sc.time < 86400000);
    const length = scs.length <= env.MAX_SC_SIZE ? scs.length : env.MAX_SC_SIZE;
    for (let idx = 0; idx < length; idx++) {
        const sc = scs[idx];
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

        t.find('.author-img').attr('src', `https://cdn.discordapp.com/emojis/${scImgs[sc.time % scImgs.length]}.webp?size=40&quality=lossless`);

        $('#cards').append(t);
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

const showdn = (sc) => {
    wavyText('dn-nick', `${sc.nick}`);
    wavyText('dn-price', `${sc.price}`);
    $('#dn-message').text(sc.message);
    $('#donate-alert').removeClass('hide');
    // const message = `${sc.nick}花了${sc.price}摳只為了說：${sc.message}`;
    // new Audio(`https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=zh-TW&q=${message}`).play();
    setTimeout(() => $('#donate-alert').addClass('hide'), 8640);
}

const wavyText = (elementId, text) => {
    const delay = 200;

    const e = document.getElementById(elementId);
    e.innerHTML = text.split('').map(letter => `<span>${letter}</span>`).join('');
    Array.from(e.children).forEach((span, index) => {
        setTimeout(() => {
            span.classList.add('wavy');
        }, index * 60 + delay);
    });

}
