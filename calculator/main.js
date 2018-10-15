const calculatorButtons = document.querySelector(".calculator-buttons")
const screenValue = document.querySelector(".screen")
let combinedOperation = ""

const clearScreenAndOperation = () => {
  screenValue.innerText = "0"
  combinedOperation = ""
}

const clearScreen = () => {
  screenValue.innerText = "0"
}

const addNumberToScreen = (number) => {
  if(screenValue.innerText === "0"){
    screenValue.innerText = number
    return;
  }
  screenValue.innerText += number
}

const deleteOneNumber = () => {
  if (screenValue.innerText.length === 1) {
    screenValue.innerText = "0"
    return;
  }
  screenValue.innerText = screenValue.innerText.slice(0,-1)
}

const addOperatorToCombinedOperation = (operator) => {
  if(screenValue.innerText !== "0"){
    combinedOperation += screenValue.innerText + operator
    console.log(combinedOperation)
    clearScreen()
  }
}

const printOperationSolution = () => {
  if(screenValue.innerText !== "0") {
    screenValue.innerText = eval(combinedOperation + screenValue.innerText)
  }
}

calculatorButtons.addEventListener("click", (event) => {
  const clickedButtonValue = event.target.innerText

  switch(clickedButtonValue) {
    case "C":
      clearScreenAndOperation();
      break;
    case "←":
      deleteOneNumber();
      break;
    case "/": 
    case "*":
    case "+":
    case "-":
      addOperatorToCombinedOperation(clickedButtonValue);
      break;
    case "=":
      printOperationSolution();
      break;
    default:
      addNumberToScreen(clickedButtonValue)
  }

  event.stopPropagation();
})
