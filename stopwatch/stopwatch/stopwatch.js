let minutesField = document.querySelector('#minutes')
let secondsField = document.querySelector('#seconds')
let centisecField = document.querySelector('#centisec')
const startBtn =  document.querySelector('#start')
const stopBtn =  document.querySelector('#stop')
const pauseBtn =  document.querySelector('#pause')
let minutesStorage = 0
let secondsStorage = 0
let centisecStorage = 0
let  time = 60500 - (parseInt(secondsStorage) + parseInt(centisecStorage) * 0.01 * 1000)
let startIsOn = false


function myTimer() { if(!startIsOn) {
let sec = parseInt(secondsStorage)
let min = parseInt(minutesStorage)
let centisec = parseInt(centisecStorage)
function pad(val) {return val > 9 ? val : "0" + val;}
minutes = setInterval( function(){
  minutesField.innerText = pad(++min) + ":"
}, time);

seconds = setInterval( function(){
  secondsField.innerText = pad(++sec%60) + ":"
}, 1000);


centiseconds = setInterval( function(){
  centisecField.innerText = pad(++centisec%100)
}, 10);}
startIsOn = true
}
startBtn.addEventListener("click", myTimer)

function PauseTimer() {
  startIsOn = false
  clearInterval(minutes)
  clearInterval(seconds)
  clearInterval(centiseconds)
  minutesStorage = minutesField.innerText
  secondsStorage = secondsField.innerText
  centisecStorage = centisecField.innerText
  time = 60500 - ((parseInt(secondsStorage) + parseInt(centisecStorage) * 0.01) * 1000)
}
pauseBtn.addEventListener("click", PauseTimer)

function StopTimer() {
startIsOn = false
clearInterval(minutes)
clearInterval(seconds)
clearInterval(centiseconds)
minutesStorage = 0
secondsStorage = 0
centisecStorage = 0
minutesField.innerText = "00:"
secondsField.innerText = "00:"
centisecField.innerText = "00"}
stopBtn.addEventListener("click", StopTimer)