// console.log("main.js loaded");
let stopper = false;
let checker = 0;

function setter() {
  const hour = document.getElementById("hour").value;
  const minute = document.getElementById("minute").value;
  const second = document.getElementById("second").value;
  if (isNaN(hour) || isNaN(minute) || isNaN(second)) {
    alert("insert a valid number");
    return;
  }
  let time = hour * 3600 + minute * 60 + second * 1;

  document.getElementById("leftHour").innerHTML = parseInt(time/3600) + "시간";
  document.getElementById("leftMinute").innerHTML = parseInt((time%3600)/60) + "분";
  document.getElementById("leftSecond").innerHTML = time%60 + "초";
  const tick = setInterval(function () {
    time--; 
    // console.log(checker);
    if (time < 0) {
      alert("timeout");
      clearInterval(tick);
      return;
    }
    if (stopper === true || checker > 1) {
      clearInterval(tick);
      checker = 1;
      return;
    }
    document.getElementById("leftHour").innerHTML = parseInt(time/3600) + "시간";
    document.getElementById("leftMinute").innerHTML = parseInt((time%3600)/60) + "분";
    document.getElementById("leftSecond").innerHTML = time%60 + "초";
  }, 1000);
}

document.getElementById("timerStarter").onclick = function () {
  checker += 1;
  stopper = false;
  setter();
};

document.getElementById("timerStopper").onclick = function () {
  stopper = true;
  // console.log("timerstop");
};
