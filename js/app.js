// global access to all important ID
const amount = document.getElementById('amount');
const tip = document.getElementById('tip');
const numberOfOrderDiv = document.getElementById('numberOfOrder');
const dollarDiv = document.getElementById('dollar');

// order section
let numberOfOrder = Number(numberOfOrderDiv.innerHTML)

const calculateOrder = () => {
    const bill = Number(amount.value)
    const tipPercentage = Number(tip.value) / 100
    const tipAmount = bill * tipPercentage
    const total = tipAmount + bill
    const dollar = total / numberOfOrder
    dollarDiv.innerText = `$${dollar.toFixed(2)}`
};

const increaseOrder = () => {
    numberOfOrder += 1
    numberOfOrderDiv.innerText = numberOfOrder
    calculateOrder()
};

const decreaseOrder = () => {
    if (numberOfOrder <= 1) {
        return
    }
    numberOfOrder -= 1
    numberOfOrderDiv.innerText = numberOfOrder
    calculateOrder()
};