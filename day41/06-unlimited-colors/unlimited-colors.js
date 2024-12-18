/*
// +++++++ method 1 +++++++
let randomColor = function () {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = color;
};

let intervalId;

document.querySelector("#start").addEventListener("click", function () {
  if (!intervalId) {
    intervalId = setInterval(randomColor, 1000);
  }
});

document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
  document.body.style.backgroundColor = "#212121";
});
*/

// +++++++ method 2 +++++++
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

function changeBgColor() {
  document.body.style.backgroundColor = randomColor();
}

let intervalId;

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
  document.body.style.backgroundColor = "#212121";
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
