window.onload = function () {
  var tens = 00;
  var sec = 00;
  var Tens = document.getElementById("tens");
  var Sec = document.getElementById("seconds");
  var start = document.getElementById("button-start");
  var stop = document.getElementById("button-stop");
  var reset = document.getElementById("button-reset");
  var interval;
  start.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  }
  stop.onclick = function () {
    clearInterval(interval);
  }
  reset.onclick = function () {
    clearInterval(interval);
    tens = "00";
    sec = "00";
    Tens.innerHTML = tens;
    Sec.innerHTML = sec;
  }
  function startTimer() {
    tens++;
    if (tens < 9) {
      Tens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
      Tens.innerHTML = tens;
    }
    if (tens > 99) {
      console.log("sec");
      sec++;
      Sec.innerHTML = "0" + sec;
      tens = 0;
      Tens.innerHTML = 0;
    }
    if (sec > 9) Sec.innerHTML = sec;
  }
}
