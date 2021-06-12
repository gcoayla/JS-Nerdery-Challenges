// Modify this file only

let counter = 0;

const box = document.getElementById('counter');
const btIncrease = document.getElementById('increase');
const btDecrease = document.getElementById('decrease');

btIncrease.addEventListener('click', () => {
	counter += 1;
	box.textContent = counter;
});
btDecrease.addEventListener('click', () => {
	counter -= 1;
	box.textContent = counter;
});
