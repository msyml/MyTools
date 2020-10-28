let visibleDate = true;

function realTime() {
    let now = new Date();
    let months = now.getMonth() + 1 >= 10 ? `${now.getMonth() + 1}月` : `0${now.getMonth() + 1}月`;
    let Dates = `${now.getDate()>=10?now.getDate():'0'+now.getDate()}日`;

    let hours = now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`;
    let min = now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`;
    let second = now.getSeconds() >= 10 ? now.getSeconds() : `0${now.getSeconds()}`;

    let mHours = document.querySelector('.hours');
    let mMins = document.querySelector('.mins');
    let mSecondes = document.querySelector('.secondes');

    let DateInfos = document.querySelector('.date');

    DateInfos.innerHTML = `${months}${Dates}`;
    mHours.innerHTML = hours;
    mMins.innerHTML = min;
    mSecondes.innerHTML = second;


    visibleDate = !visibleDate;
    let myTime = setTimeout("realTime()", 1000);
};

realTime();