const daysEl = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYear = "1 Jan 2022";

countDown = () => {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalseconds = (newYearDate - currentDate) / 1000;
  const days = Math.floor(totalseconds / 3600 / 24);
  const hours = Math.floor(totalseconds / 3600) % 24;
  const mins = Math.floor(totalseconds / 60) % 60;
  const seconds = Math.floor(totalseconds % 60);

  daysEl.innerHTML = formatTime(days);
  hoursEL.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
};

formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

countDown();
setInterval(countDown, 1000);
