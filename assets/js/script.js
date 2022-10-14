// Clock container div
let ele = document.createElement('div');

function liveTime() {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let formate = 'AM';

    // Adding '0' when the digit is single
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

    // Inserting the time into the div and appending the div into the main body
    ele.innerText = hours + ' : ' + minutes + ' : ' + seconds + ' ' + formate;
    document.body.appendChild(ele);
}

// Calling the function 
liveTime();
setInterval(liveTime, 1000)
