let numeros = Array.from(document.querySelectorAll('.nb'))
numeros.map(tecla_num => tecla_num.addEventListener('click', mostrar))
let lcd = document.querySelector('.lcd_numbers')
document.querySelector('.clear').addEventListener('click', remove)
let ponto = document.querySelector('.dot').addEventListener('click', dot)
let enter = document.querySelector('.enter').addEventListener('click', entra)
let operators = Array.from(document.querySelectorAll('.basic_ops'))
operators.map(ops => ops.addEventListener('click', basic_operators))

document.addEventListener('keydown', digitado)

let result
let contador = 0
let qtd_pilha = 0

function mostrar() {
    lcd.innerText += event.target.innerText
}

function entra() {
    pega_numero.push(Number(lcd.innerText))
    contador = 0
    lcd.innerText = ''
    qtd_pilha++
    // console.log(qtd_pilha)
}

class calculo {
    constructor() {
        this.pilha = []
    }
    push(numero) {
        this.pilha.push(numero)
    }
    pop() {
        return this.pilha.pop()
    }

    isEmpty() {
        this.pilha.length === 0
    }
}

let pega_numero = new calculo()


function remove() {
    lcd.innerText = '';
    contador = 0
    qtd_pilha = 0
}

function dot() {
    contador++
    if (contador > 1) {
        return
    }
    else {
        if (lcd.innerText == '') {
            lcd.innerText = '0.'
        }
    }

}

let tecla
let tecla_operador

function basic_operators() {
    let value_one = pega_numero.pop()
    qtd_pilha--
    basic = event.target.innerText
    value_two = Number(lcd.innerText)
    lcd.innerText = ''
    if (basic == 'X' || tecla_operador == '*') {
        result = value_one * value_two
    }
    else if (basic == '/' || tecla_operador == '/') {
        result = value_one / value_two

    }
    else if (basic == '-' || tecla_operador == '-') {
        result = value_one - value_two
    }
    else if (basic == '+' || tecla_operador == '+') {
        result = value_one + value_two
    }
    debugger
    if(isNaN && qtd_pilha < 0 ){
        return
        //nao consegui fixar o nuemero
    }
    value_one = result
    lcd.innerText = result
}



function digitado() {
    tecla = event.key

    if (tecla == 'Backspace') {
        lcd.innerText = lcd.innerText.slice(0, -1)
    }

    else if (tecla == 'Escape') {
        remove()
    }

    else if (tecla >= 0 || tecla <= 9) {
        lcd.innerText += tecla
    }

    else if (tecla == '.') {
        dot()
    }

    funcao_operacao(event)

}

function funcao_operacao(event) {
    tecla_operador = event.key
    if (tecla_operador == 'Enter') {
        entra()
    }

    if(tecla_operador == '*' || tecla_operador == '-' || tecla_operador == '+' || tecla_operador == '/'){
        basic_operators()
    }

}