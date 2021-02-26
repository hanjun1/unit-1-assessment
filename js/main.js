const display = document.getElementById('display');
const counter = document.getElementById('counter');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');

minusButton.addEventListener('click', subtractDisplay);
plusButton.addEventListener('click', addDisplay);

function subtractDisplay() {
    incrementDisplay(-1);
}

function addDisplay() {
    incrementDisplay(1);
}

function incrementDisplay(num) {
    let curr = parseInt(display.innerHTML);
    let increment = parseInt(counter.value) * num;
    let value = curr + increment;
    if (value < 0) {
        display.classList.add('negative');
    } else {
        display.classList.remove('negative');
    }
    display.innerHTML = value;
}