function displayTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  let seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
  let time = `${hours}:${minutes}:${seconds}`;
  let clock = document.querySelector('.clock');
  clock.textContent = time;
}

setInterval(displayTime, 1000);