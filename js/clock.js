const clockContainer = document.querySelector(".jsClock"),
  clockHour = clockContainer.querySelector(".timeHour"),
  clockMinute = clockContainer.querySelector(".timeMinute"),
  clockSecond = clockContainer.querySelector(".timeSecond"),
  clockPeriod = clockContainer.querySelector(".timePeriod");



function getTime() {
  let date = new Date();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let seconds = date.getSeconds();
  if (hours < 12) {
    hours = hours + 12
  }
  clockHour.innerText = `${(hours > 12 ? `${hours-12}` : hours) < 10 ? `0${hours-12}` : hours}`;
  clockMinute.innerText = `${minutes < 10 ? `0${minutes}` : minutes}`
  clockSecond.innerText = `${seconds < 10 ? `0${seconds}` : seconds}`
  clockPeriod.innerText = `${hours > 12 ? `pm` : `am`}`
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();