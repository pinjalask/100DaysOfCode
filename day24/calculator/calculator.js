let calculation = localStorage.getItem("calculation") || "";

displayCalculation();

function updateCalculation(value) {
  calculation += value;

  // remember to save the calculation here
  localStorage.setItem("calculation", calculation);

  displayCalculation();
}

function displayCalculation() {
  document.querySelector(".js-calculator").innerHTML = calculation;
}
