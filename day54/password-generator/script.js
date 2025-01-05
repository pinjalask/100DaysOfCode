// Datasets
const charSets = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numberCase: "0123456789",
  symbolCase: "!@#$%^&*()_+-=",
};

// Selectors
const passwordBox = document.getElementById("display-pw");
const lengthInput = document.getElementById("length");
const upperCheckbox = document.getElementById("uppercase");
const lowerCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const generatePassword = () => {
  let password = "";
  const availableCharSets = [];

  if (upperCheckbox.checked) availableCharSets.push(charSets.upperCase);
  if (lowerCheckbox.checked) availableCharSets.push(charSets.lowerCase);
  if (numbersCheckbox.checked) availableCharSets.push(charSets.numberCase);
  if (symbolsCheckbox.checked) availableCharSets.push(charSets.symbolCase);

  if (availableCharSets.length === 0) {
    passwordBox.value = "Select password length & at least one character type";
    return;
  }

  // Generate password
  const passwordLength = parseInt(lengthInput.value);
  for (let i = 1; i <= passwordLength; i++) {
    const randomSet = getRandomData(availableCharSets);
    password += getRandomData(randomSet);
  }

  passwordBox.value = password;
};

document.querySelector(".generate").addEventListener("click", generatePassword);

// Copy password
document.getElementById("copy").addEventListener("click", () => {
  passwordBox.select();
  document.execCommand("copy");
});
