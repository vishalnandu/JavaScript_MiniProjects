function getUserInput() {
  return document.querySelector("#userInput").innerHTML;
}

function printUserInput(value) {
  document.querySelector("#userInput").innerHTML = value;
}
function getResult() {
  return document.querySelector("#result").innerHTML;
}

function printResult(value) {
  if (value == "") {
    document.querySelector("#result").innerHTML = value;
  } else {
    if (document.querySelector("#result").innerHTML == 0) {
      document.querySelector("#result").innerHTML = value;
    } else {
      document.querySelector("#result").innerHTML =
        document.querySelector("#result").innerHTML + value;
    }
  }
}
let main;
let operatorarr = ["%", "*", "+", "-", "/"];
//operator section
let operator = document.querySelectorAll(".operator");
for (let opt of operator) {
  opt.addEventListener("click", function() {
    let temp = getResult();
    if (this.id === "clear") {
      printUserInput(0);
      printResult(0);
    } else if (this.id === "backspace") {
      let userInput = getResult();
      if (userInput == main) {
      } else {
        if (userInput.length == 1) {
          printResult(0);
        } else {
          let newUserInput = userInput.substr(0, userInput.length - 1);
          printResult("");
          printResult(newUserInput);
        }
      }
    } else {
      if (this.id == "=") {
        console.log(eval(getUserInput() + getResult()));
        main = eval(getUserInput() + getResult());
        printUserInput("");
        printResult(0);
        printResult(main);
      } else {
        if (
          operatorarr.includes(getUserInput().substr(getUserInput().length - 1))
        ) {
          alert("invalid operation");
        } else {
          printUserInput(getResult() + this.id);
          printResult(0);
        }
      }
    }
  });
}
//number section
let numbers = document.querySelectorAll(".numbers");
for (let nos of numbers) {
  nos.addEventListener("click", function() {
    if (getResult() == main) {
      printUserInput("");
      printResult(0);
      printResult(this.id);
    } else {
      printResult(this.id);
    }
  });
}
