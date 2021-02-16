const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const gretting = document.querySelector(".js-grettings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault(); //enter 했을때 새로고침되는걸 막아줌
  const currentValue = input.value;
  paintGratting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGratting(text) {
  form.classList.remove(SHOWING_CN);
  gretting.classList.add(SHOWING_CN);
  gretting.innerText = `Hello ${text} 💜`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //no
    askForName();
  } else {
    //yes
    paintGratting(currentUser);
  }
}

function init() {
  loadName();
}

init();
