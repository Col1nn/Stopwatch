// http://websamuraj.pl/examples/js/projekt11/
const btnStart = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const divTime = document.querySelector('p + div');

let number = 0;
let time = 10;
let secs = 0;
let millis = 0;
let minutes = 0;
const start = () => {
    millis++;
    if (millis === 100) {
        millis = 0;
        secs++;
    }
    if (secs === 60) {
        secs = 0;
        minutes++;
    }
    divTime.textContent = `${minutes}.${secs}.${millis}`;

}
let stopwatch = start;

function startStopTime() {
    if (btnStart.textContent === "Start") {
        stopwatch = setInterval(start, time);
        btnStart.textContent = "Pauza";
    } else if (btnStart.textContent === "Pauza") {
        clearInterval(stopwatch);
        btnStart.textContent = "Start";
    }
}

function resetTime() {
    clearInterval(stopwatch);
    divTime.textContent = "---";
    btnStart.textContent = "Start";
    millis = 0;
    secs = 0;
    minutes = 0;
}

btnStart.addEventListener('click', startStopTime);
btnReset.addEventListener('click', resetTime);