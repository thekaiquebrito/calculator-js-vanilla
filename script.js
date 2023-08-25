let display = document.querySelector('#display')
let calculatorContainer = document.querySelector('#calculator-container')
let buttons = document.querySelectorAll('button');
let error = document.querySelector('#error')

function calcular() {
    let value = display.value

    let res = eval(value)

    display.classList.add('result')
    display.value = res
}
function limpar() {
    display.classList.remove('result')
    display.value = '';
}
function apagar() {
    display.classList.remove('result')
    let value = display.value.split('')
    value.pop()
    value = value.join('')
    display.value = value
}


calculatorContainer.addEventListener('click', (event) => {
    event.preventDefault()

    let targetElement = event.target

    // NUMEROS
    if (targetElement.classList.contains('number') || targetElement.classList.contains('operator')) {
        display.value += targetElement.innerHTML;

        if (display.classList.contains('result')) {
            display.classList.remove('result');
            display.value = targetElement.innerHTML;
        }
    }

    // LIMPAR / APAGAR
    if (targetElement.classList.contains('util')) {
        if (targetElement.innerHTML === "AC") {
            limpar()
        } else if (targetElement.innerHTML === "LP") {
            apagar()
        }
    }

    // OPERADORES
    if (targetElement.classList.contains('equal')) {
        calcular()
    }
})

//* Mapeamento do teclado
window.addEventListener('keyup', (e) => {
    for (i in buttons) {
        if (e.key == buttons[i].innerHTML) {

            if (display.classList.contains('result')) {
                display.classList.remove('result')
                display.value = '';
            }

            display.value += buttons[i].innerHTML
        }
    }

    if (e.key === 'Enter') {
        if (!display.value) {
            return
        } else {
            calcular();
        }
    }

    if (e.key === 'Delete') {
        limpar()
    }

    if (e.key === 'Backspace') {
        apagar()
    }
    

})


