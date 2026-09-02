var [milliseconds,seconds,minutes,hours] = [0,0,0,0];
var displayTimer = document.querySelector('.timerDisplay');
var interval = null;

document.getElementById('startBtn').addEventListener('click', () => {

    if ( interval !== null ) {

        clearInterval(interval);
    }
    interval = setInterval(stopWatchDisplay,10);
});

function stopWatchDisplay(){
    milliseconds += 10;
    if( milliseconds == 1000 ){
        milliseconds = 0;
        seconds++;
        if( seconds == 60 ){
            seconds = 0;
            minutes++;
            if( minutes == 60 ){
                minutes = 0;
                hours++;
            }
        }
    }

    let hr = hours < 10 ? "0" + hours : hours;
    let min = minutes < 10 ? "0" + minutes : minutes;
    let sec = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    displayTimer.innerHTML = ` ${hr}:${min}:${sec}:${ms}`;
}
document.getElementById('pauseBtn').addEventListener('click', ()=>{
    clearInterval(interval);
});

document.getElementById('resetBtn').addEventListener('click', ()=>{
    clearInterval(interval);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    displayTimer.innerHTML = '00:00:00:000 ';
});