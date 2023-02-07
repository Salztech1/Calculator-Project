//global holders of data
let firstOperant = ''
let secondOperant = ''
let operator = ''


//fetch the elements of the page 
const displayEl = document.querySelector('.val')

const acOp = document.querySelector('.sign1')
const plusOp = document.querySelector('.sign')
const percentOp = document.querySelector('.sign2')
const divideOp = document.querySelector('.divide')
const multiplyOp = document.querySelector('.multiply')
const subtractOp = document.querySelector('.subtract')
const addOp = document.querySelector('.add')
const equalToOp = document.querySelector('.equal')

const number0 = document.querySelector('.number0')
const number00 = document.querySelector('.number00')
const number1 = document.querySelector('.number1')
const number2 = document.querySelector('.number2')
const number3 = document.querySelector('.number3')
const number4 = document.querySelector('.number4')
const number5 = document.querySelector('.number5')
const number6 = document.querySelector('.number6')
const number7 = document.querySelector('.number7')
const number8 = document.querySelector('.number8')
const number9 = document.querySelector('.number9')
const decimal = document.querySelector('.decimal')

// create a function that reads the value
const readValue = (e) => {
    let val = e.target.textContent
    console.log(val)
    displayEl.innerHTML = val

    if (operator === '') {
        firstOperant = val
    } else {
        secondOperant = val
    }
}



number0.addEventListener('click', readValue);
number1.addEventListener('click', readValue);
number2.addEventListener('click', readValue);
number3.addEventListener('click', readValue);
number4.addEventListener('click', readValue);
number5.addEventListener('click', readValue);
number6.addEventListener('click', readValue);
number7.addEventListener('click', readValue);
number8.addEventListener('click', readValue);
number9.addEventListener('click', readValue);
decimal.addEventListener('click', readValue);

//set handler to listen to the operator and numbers

acOp.onclick = function () {
    displayEl.textContent = '0';
    firstOperant = '' ;
    secondOperant = '';
    operator = ''
    
}
const readOperator = (e) => {
    operator = e.target.textContent

}

plusOp.addEventListener('click', readOperator)
addOp.addEventListener('click', readOperator);
subtractOp.addEventListener('click', readOperator);
divideOp.addEventListener('click', readOperator);
multiplyOp.addEventListener('click', readOperator);
divideOp.addEventListener('click', readOperator);
percentOp.addEventListener('click', readOperator);


//now to do the operation
//
equalToOp.onclick = function (e) {
    let result = ''

    switch (operator) {
        case '+': 
            result = parseFloat(firstOperant) + parseFloat(secondOperant)
            break
        case '-':
            result = parseFloat(firstOperant) - parseFloat(secondOperant)
            break
        case '*':
            result = parseFloat(firstOperant) * parseFloat(secondOperant)
            break
        case '/':
            result = parseFloat(firstOperant) / parseFloat(secondOperant)
            break
        case '%':
            result = parseFloat(firstOperant) / 100
            break
        case '+-':
            result = -parseFloat(displayEl.textContent)
            break
    }
    displayEl.innerHTML = result
}



