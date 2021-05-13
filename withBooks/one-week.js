const countdown = document.querySelector(".new-countdown");

function countdownNewChallenge() {
  const now = new Date();
  const startDate = new Date("05/14/2021 06:00 AM");

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;

  var restOfDate = Math.floor(startDate - now);

  var days = Math.floor(restOfDate / _day);
  var hours = Math.floor((restOfDate % _day) / _hour);
  var minutes = Math.floor((restOfDate % _hour) / _minute);
  var seconds = Math.floor((restOfDate % _minute) / _second);

  countdown.innerText = `${days}일 ${hours}시 ${minutes}분 ${seconds}초`;
}

function init() {
  setInterval(countdownNewChallenge, 1000);
}

init();
