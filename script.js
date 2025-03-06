let numOne;
let numTwo;
let operator;

const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

function operate(numOne, numTwo, operator) {
  if (operator in operators) {
    return operators[operator](numOne, numTwo);
  } else {
    console.log("operator unavailable");
  }
}

let displayValue = "";
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    displayValue += button.value;
    display.textContent = displayValue;
  });
});
