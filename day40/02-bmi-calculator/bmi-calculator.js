const form = document.querySelector("form");

// this use-case will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const result = document.querySelector("#result");
  const bodyWeight = document.querySelector("#body-weight");

  if (height === "" || height < 0 || isNaN(height)) {
    result.textContent = `Please provide a valid height`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.textContent = `Please provide a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.textContent = bmi;

    if (bmi < 18.6) {
      bodyWeight.textContent = `You are Under-weight`;
    }
    if (bmi >= 18.6 && bmi <= 24.9) {
      bodyWeight.textContent = `You are Normal-weight`;
    }
    if (bmi > 24.9) {
      bodyWeight.textContent = `You are Over-weight`;
    }
  }
});
