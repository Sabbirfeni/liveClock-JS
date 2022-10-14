let ele = document.createElement('div');

function liveTime() {
    let date = new Date();
    let time = date.getTime();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let formate = 'AM';

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;

    if(hours == 0) {
        hours = 12;
    }
    if(hours > 12) {
        hours = hours - 12;
        formate = 'PM';
    }

    ele.innerText = hours + ' : ' + minutes + ' : ' + seconds + ' ' + formate;
    document.body.appendChild(ele);
}

liveTime();

setInterval(liveTime, 1000)
