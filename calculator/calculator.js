class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return; // 조건 만족시 리턴 반환, 함수 즉시 종료
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computaion;
    const prev = parseFloat(this.previousOperand);
    const curr = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(curr)) return; // 숫자가 아닐경우 true()
    switch (this.operation) {
      case "+":
        computaion = prev + curr;
        break;
      case "-":
        computaion = prev - curr;
        break;
      case "*":
        computaion = prev * curr;
        break;
      case "/":
        computaion = prev / curr;
        break;
      default:
        return; // 어떤 계산도 하지 않음
    }
    this.currentOperand = computaion;
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    // 소수점 이전과 이후 숫자를 화면에 표시
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = "";
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const resultButton = document.querySelector("[data-result]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) =>
  button.addEventListener("click", () => {
    calculator.appendNumber(button.value);
    calculator.updateDisplay();
  })
);

// console.log(numberButtons[0].value);

operationButtons.forEach((button) =>
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.value);
    calculator.updateDisplay();
  })
);

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

resultButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
