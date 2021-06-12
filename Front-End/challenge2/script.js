/*
TO-DO:

- Modify this file only
- The calculator should be completely functional

*/
/* eslint-disable */
let accumulator = 0;
let currentVal = 0;
let current = '';
let op = 0;
let mode = true;

const btn0 = document.getElementById('zero');
const btn1 = document.getElementById('one');
const btn2 = document.getElementById('two');
const btn3 = document.getElementById('three');
const btn4 = document.getElementById('four');
const btn5 = document.getElementById('five');
const btn6 = document.getElementById('six');
const btn7 = document.getElementById('seven');
const btn8 = document.getElementById('eight');
const btn9 = document.getElementById('nine');

const btnDiv = document.getElementById('division');
const btnMul = document.getElementById('multiplication');
const btnSum = document.getElementById('add');
const btnRes = document.getElementById('subtrack');

const btnEqual = document.getElementById('equals');

const display = document.getElementById('display');

function addNumber(numb) {
	if(!mode){
		currentVal = 0;
		current = '';
		mode = true;
	}
	if (current === '' && numb === 0) {
		return;
	}
	current = current.concat(numb.toString());
	currentVal = parseInt(current);
	display.textContent = current;
	
}

function makeOperation() {
	if (op === 1) return accumulator + currentVal;
	if (op === 2) return accumulator - currentVal;
	if (op === 3) return accumulator * currentVal;
	if (op === 4) return accumulator / currentVal;
}

function setOperation(oper) {
	if (oper === 5) {
		if(op === 0){
			accumulator = 0;
			mode = false;
			return;
		}
		const value = makeOperation();
		op = 0;
		accumulator = 0;
		if(value === 0){
			current = '';
			currentVal = 0;
		}else{
			currentVal = value;
			current = currentVal.toString();
		}
		mode = false;
		display.textContent = currentVal;
	}else{
		if(op !== 0){
			if(!mode)return;
			const value = makeOperation();
			accumulator = value;
			if(value === 0){
				current = '';
				currentVal = 0;
			}else{
				currentVal = value;
				current = currentVal.toString();
			}
			mode = false;
			display.textContent = currentVal;
			op = oper;
		}else{
			accumulator = currentVal;
			op = oper;
			mode = false;
		}
	}
}

btn0.addEventListener('click', () => addNumber(0));
btn1.addEventListener('click', () => addNumber(1));
btn2.addEventListener('click', () => addNumber(2));
btn3.addEventListener('click', () => addNumber(3));
btn4.addEventListener('click', () => addNumber(4));
btn5.addEventListener('click', () => addNumber(5));
btn6.addEventListener('click', () => addNumber(6));
btn7.addEventListener('click', () => addNumber(7));
btn8.addEventListener('click', () => addNumber(8));
btn9.addEventListener('click', () => addNumber(9));

btnDiv.addEventListener('click', () => setOperation(4));
btnMul.addEventListener('click', () => setOperation(3));
btnSum.addEventListener('click', () => setOperation(1));
btnRes.addEventListener('click', () => setOperation(2));
btnEqual.addEventListener('click', () => setOperation(5));
