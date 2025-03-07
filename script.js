let numOne = "";
let operator = "";
let numTwo = "";
let displayValues = "";
let answer = "";

const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  x: (a, b) => a * b,
  "÷": (a, b) => a / b,
};

function clear() {
  numOne = "";
  operator = "";
  numTwo = "";
  displayValues = "";
  answer = "";
}

const displayParagraph = document.querySelector("#display");
function display(displayValue) {
  displayParagraph.textContent = displayValue;
}

function operate(firstVal, secondVal, sign) {
  if (secondVal === 0 && sign === "÷") {
    alert("You can't divide by 0");
    clear();
    return;
  }

  clear();
  answer = operators[sign](firstVal, secondVal);

  return answer;
}

const digitBtns = document.querySelectorAll(".digits");
digitBtns.forEach((digitBtn) => {
  digitBtn.addEventListener("click", () => {
    if (operator !== "") {
      if (digitBtn.value === "0" && numTwo === "0") {
        return;
      } else {
        numTwo += digitBtn.value;
      }
    } else {
      if (digitBtn.value === "0" && numOne === "0") {
        return;
      } else {
        numOne += digitBtn.value;
      }
    }

    displayValues = numOne + operator + numTwo;
    display(displayValues);
  });
});

const operatorBtns = document.querySelectorAll(".ops");
operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () => {
    if (operator === "" && numOne !== "") {
      operator = operatorBtn.value;
    } else if (numTwo === "" && numOne !== "") {
      operator = operatorBtn.value;
    } else if (answer !== "") {
      numOne = answer;
      answer = "";
      operator = operatorBtn.value;
    } else if (numOne !== "" && numTwo !== "" && operator !== "") {
      display(operate(Number(numOne), Number(numTwo), operator));
      numOne = answer;
      answer = "";

      if (numOne !== "") {
        operator = operatorBtn.value;
      }
    }

    displayValues = numOne + operator + numTwo;
    display(displayValues);
  });
});

const equalBtn = document.querySelector(".equal-btn");
equalBtn.addEventListener("click", () => {
  if (numOne === "" || numTwo === "" || operator === "") {
    return;
  }

  display(operate(Number(numOne), Number(numTwo), operator));
});
