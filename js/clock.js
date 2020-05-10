const clockContainer = document.querySelector(".jsClock"),
  clockHour = clockContainer.querySelector(".timeHour"),
  clockminute = clockContainer.querySelector(".timeMinute");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockHour.innerText = `${hours < 10 ? `0${hours}` : hours}`;
  clockminute.innerText = `${minutes < 10 ? `0${minutes}` : minutes}`
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
