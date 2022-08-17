const allBTN = document.querySelectorAll(".vote");
const btnResets = document.querySelectorAll(".reset");
// than you need a forEach
const allSpan = document.querySelectorAll("span");
const myInput = document.querySelector("input");

allBTN.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    allSpan[index].innerText = Number(allSpan[index].innerText) + 1;
  });
});

btnResets.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    allSpan[index].innerText = 0;
  });
});
