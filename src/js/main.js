var boxChangeColor = document.querySelector(".change-color");
function changeYellow() {
  boxChangeColor.classList.add("is-active");
}
boxChangeColor.addEventListener("click", changeYellow);

var boxToggleColor = document.querySelector(".toggle-color");
function changeColor() {
  boxToggleColor.classList.toggle("is-active");
}
boxToggleColor.addEventListener("click", changeColor);

var boxTrigger = document.querySelector(".trigger");
var boxTarget = document.querySelector(".target");
function triggerActive() {
  boxTarget.classList.toggle("is-active");
}
boxTrigger.addEventListener("click", triggerActive);

function targetActive() {
  boxTrigger.classList.toggle("is-active");
}
boxTarget.addEventListener("click", targetActive);
