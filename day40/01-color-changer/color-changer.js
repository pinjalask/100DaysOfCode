const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

/*
buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.target);
    if (event.target.id === "grey") {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === "pink") {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === "blue") {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === "yellow") {
      body.style.backgroundColor = event.target.id;
    }
  });
});
*/

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    switch (event.target.id) {
      case "grey":
        body.style.backgroundColor = event.target.id;
        break;
      case "pink":
        body.style.backgroundColor = event.target.id;
        break;
      case "blue":
        body.style.backgroundColor = event.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = event.target.id;
        break;
    }
  });
});
