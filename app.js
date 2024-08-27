let currentInput = '';
let currentOperator = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('campo').value = currentInput;
}

function appendOperator(operator) {
    if (currentInput !== '' && currentOperator !== '') {
        currentInput += ` ${currentOperator} `;
    }
    currentOperator = operator;
    currentInput += ` ${operator} `;
    document.getElementById('campo').value = currentInput;
}

function calculate() {
    try {
        const result = eval(currentInput);
        document.getElementById('campo').value = result;
        currentInput = result;
        currentOperator = '';
    } catch (error) {
        document.getElementById('campo').value = 'Error';
    }
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    document.getElementById('campo').value = '';
}
