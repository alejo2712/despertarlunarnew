var counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal);
    console.log(counterVal);
}

function decrementClick() {
    if (!counterVal == 0) {
        updateDisplay(--counterVal);
        console.log(counterVal);
    }
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

function updateDisplay(val) {
    document.getElementById("number1").value = val;
}