// global access to all important ID
const input = document.getElementById('input');
const inputTwo = document.getElementById('inputTwo');
const numberOfOrderDiv = document.getElementById('numberOfOrder');
const dollarDiv = document.getElementById('dollar');

// order section
let numberOfOrder = Number(numberOfOrderDiv.innerHTML)

const calculateOrder = () => {
    const amount = Number(input.value)
    const discountPercentage = Number(inputTwo.value) / 100
    const tipAmount = amount * discountPercentage
    const total = tipAmount + amount
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