"use strict";
console.clear();

const message = document.querySelector(".display-1");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

// let seconds = 10;
// const timer = setInterval(function () {
//   if (seconds > 1) {
//     message.innerHTML = --seconds;
//   } else {
//     message.innerHTML = "Buon Anno !!!!";
//     confetti({ particleCount: 1000, spread: 360 });
//     clearInterval(timer);
//   }
// }, 1000);

// console.log(message);

let timer;

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
stopBtn.disabled = true;

function start() {
  let seconds = 0;
  stopBtn.disabled = false;
  startBtn.disabled = true;
  timer = setInterval(function () {
    message.innerHTML = ++seconds;
  }, 1000);
}

function stop() {
  clearInterval(timer);
  stopBtn.disabled = true;
  startBtn.disabled = false;
}
