var ms = 00;
var sec = 00;
var hr = 00;
var hour = document.getElementById("hr");
var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var miliseconds = document.getElementById("ms")
var startBtn = document.getElementById("btn-start");
var stopBtn = document.getElementById("btn-stop");
var resetBtn = document.getElementById("btn-reset");
var interval;

function stopWatch() {
    ms++;
    if(ms < 9){
        miliseconds.innerHTML = "0" + ms;
    }
    if (ms > 9){
        miliseconds.innerHTML = ms;
    }
    if (ms > 99){
        sec++;
        seconds.innerHTML = "0" + sec;
        ms = 0;
        miliseconds.innerHTML = "0" + 0;
    }
    if (sec > 9){
        seconds.innerHTML = sec;
    }

    startBtn.onclick = function() {
        interval = setInterval(stopWatch);
    }
}