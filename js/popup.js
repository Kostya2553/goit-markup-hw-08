$(function () {
    let btn = document.getElementById('header-btn');
    let popup = document.getElementById('popup');
    let popup_close = document.getElementById('popup-close');

    btn.addEventListener('click', function () {
        popup.classList.add('visible');
    });

    popup_close.addEventListener('click', function () {
        popup.classList.remove('visible');
    });
});

$(function () {
    let btn2 = document.getElementById('header-btn2');
    let popup2 = document.getElementById('popup2');
    let popup_close2 = document.getElementById('popup-close2');

    btn2.addEventListener('click', function () {
        popup2.classList.add('visible');
    });

    popup_close2.addEventListener('click', function () {
        popup2.classList.remove('visible');
    });
});