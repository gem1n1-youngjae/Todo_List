const clockContainer = document.querySelector(".jsClock"),
  clockHour = clockContainer.querySelector(".timeHour"),
  clockMinute = clockContainer.querySelector(".timeMinute"),
  clockSecond = clockContainer.querySelector(".timeSecond"),
  clockPeriod = clockContainer.querySelector(".timePeriod");
  


function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockHour.innerText = `${(hours > 12 ? `${hours-12}` : hours) < 10 ? `0${hours}` : hours}`;
  clockMinute.innerText = `${minutes < 10 ? `0${minutes}` : minutes}`
  clockSecond.innerText = `${seconds < 10 ? `0${seconds}` : seconds}`
  clockPeriod.innerText = `${hours > 12 ? `pm` : `am`}`
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
