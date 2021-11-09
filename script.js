"use strick";
let newRgb = () => Math.floor(Math.random() * 10 ** 5) % 256;
let a = 0,
  b = 0,
  c = 0,
  t;
let theCircul = document.querySelector(".circul"),
  body = document.querySelector("body");

function newValues() {
  a = newRgb();
  b = newRgb();
  c = newRgb();
}

theCircul.onclick = function () {
  newValues();
  theCircul.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
};
body.onclick = function (e) {
  t = e.target;
  if (t.textContent) {
    newValues();
    body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
  }
};
