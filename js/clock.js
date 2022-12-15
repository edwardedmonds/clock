function displayPresentTime() {
  let time = new Date();
  let hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
  let minutes = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();
  let seconds = (time.getSeconds() < 10 ? '0' : '') + time.getSeconds();
  let presentTime = `${hours}:${minutes}:${seconds}`;

  let clock = document.querySelector('.clock');
  clock.textContent = presentTime;
}

setInterval(displayPresentTime, 1000);