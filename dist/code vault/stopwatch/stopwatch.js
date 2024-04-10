let ID_INTERVAL 
let TENTHS = 0
let SECONDS = 0
let MINUTES = 0

const buttonStart = document.getElementById("start")
const buttonStop = document.getElementById("stop")
const buttonReset = document.getElementById("reset")

function runTime() {
if( TENTHS == 10 ){
    TENTHS = 0
    SECONDS ++
}

if ( SECONDS == 60) {
    SECONDS = 0
    MINUTES ++
}

const minutes = MINUTES<10 ? "0" + MINUTES : MINUTES
const seconds = SECONDS<10 ? "0" + SECONDS : SECONDS

const pStopwatch = document.getElementById("stopwatch")
pStopwatch.innerHTML = minutes + ":" + seconds + "." + TENTHS
TENTHS++
}

function startStopwatch() {
    ID_INTERVAL = setInterval(runTime,100)
}

function  stopStopwatch() {
    clearInterval(ID_INTERVAL)
}

function resetStopwatch() {
    TENTHS=0
    SECONDS=0
    MINUTES=0
const pStopwatch= document.getElementById("stopwatch")
    pStopwatch.innerHTML= "00:00:0"
}

buttonStart.onclick = startStopwatch
buttonStop.onclick = stopStopwatch
buttonReset.onclick = resetStopwatch
