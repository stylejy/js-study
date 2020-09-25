// console.log("main.js loaded");

function calculateTip() {
  const billAmt = document.getElementById("billAmt").value;
//   console.log(billAmt);
  let res = billAmt * 0.1;
  document.getElementById("tipRes").innerHTML = res;
//   console.log("tip: $" + res);
}

document.getElementById("calculateBtn").onclick = function () {
  calculateTip();
};