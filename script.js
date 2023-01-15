let myPage = document.querySelector("body");
let welcome = document.querySelector("h1");
let nameCtrl = document.querySelector("#nameCtrl");

function fInF(id, color) {
  document.querySelector(id).onclick = function() {
    myPage.setAttribute("class", color);
  }
}

fInF("#gray", "gray");
fInF("#white", "white");

function reName() {
  let myName = prompt("what is your name");
  if (!myName || myName === null) {
    reName();
  }
  localStorage.setItem("name", myName);
  welcome.textContent = "welcome " + myName;
}


if (!localStorage.getItem("name")) {
  reName();
}
else {
  let myName = localStorage.getItem("name")
  welcome.textContent = "welcome " + myName;
}

nameCtrl.onclick = function() {
  reName();
}