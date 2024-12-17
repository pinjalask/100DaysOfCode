const clock = document.getElementById("clock");

document.getElementById("clock").addEventListener("click", function () {
  setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
  }, 0);
});
