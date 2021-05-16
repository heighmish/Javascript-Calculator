let displayText = "0";
const displayTextElementId = document.getElementById("displayTextId");

window.addEventListener("load", () => {
    updateDisplayNumber(displayText);
})

const numberButtons = document.querySelectorAll(".numberButtonStyle");

numberButtons.forEach(item => {
    item.addEventListener("click", () => {
        let num = (item.id.toString()).slice(-1);
        updateDisplayNumber(num);
    })
})

const updateDisplayNumber = (number) => {
    if (displayText.length === 12) {
        //pass
    }
    else if (displayText == "0") {
        displayText = number;
    } else {
        displayText += number;
    }
    updateDisplay(displayText);
}

const updateDisplay = (number) => {
    displayTextElementId.innerHTML = number;
}

const clearButton  = document.getElementById("clearButton");
clearButton.addEventListener("click", () => {
    displayText = "0";
    updateDisplay(displayText);
})


let prevNum = null;
let operation = null;
const operationButtons = document.querySelectorAll(".operationButtonStyle");
operationButtons.forEach(item => {
    item.addEventListener("click", () => {
        operation = (item.id.toString())[0];
        
    })
})




const operate = (operation, num1, num2) => {
    let finalNumber;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch (operation) {
        case "+":
            finalNumber = num1 + num2;
            break;
        case "-":
            finalNumber = num1 - num2;
            break;
        case "*":
            finalNumber = num1 * num2;
            break;
        case "/":
            finalNumber = num1/num2;
            break;
        case "=":
            finalNumber = num2;
    }
    
    console.log(finalNumber);
    updateDisplay(String(finalNumber));
}