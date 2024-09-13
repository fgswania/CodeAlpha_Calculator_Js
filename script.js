let displayValue = '';

function appendNumber(number) {
  displayValue += number;
  document.getElementById('display').textContent = displayValue;
}

function appendOperator(operator) {
  displayValue += ` ${operator} `;
  document.getElementById('display').textContent = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue.replace('×', '*').replace('÷', '/'));
    document.getElementById('display').textContent = displayValue;
  } catch (e) {
    document.getElementById('display').textContent = 'Error';
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').textContent = displayValue;
}
