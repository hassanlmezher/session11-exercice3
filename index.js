let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEL = document.getElementById('sum-el');
function add() {
    sumEL.textContent = "Sum: ";
    sumEL.textContent += num1 + num2;
}
function subtract() {
    sumEL.textContent = "Sum: ";
    sumEL.textContent += num1 - num2;
}
function devide() {
    sumEL.textContent = "Sum: ";
    sumEL.textContent += num1 / num2;
}
function multiply() {
    sumEL.textContent = "Sum: ";
    sumEL.textContent += num1 * num2;
}