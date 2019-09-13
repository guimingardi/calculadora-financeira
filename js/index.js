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
let contador_entra = 0

function mostrar() {
    
    if (contador_entra == 1) {
        lcd.innerText = ''
        contador_entra = 0
    }
    lcd.innerText += event.target.innerText
}

function entra() {
    contador_entra++
    contador = 0
    pega_numero.push(Number(lcd.innerText))
    if (lcd.innerText.indexOf('.') >= 0) {
        return
    } else {
        lcd.innerText = lcd.innerText + '.00'
    }
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
        return this.pilha.length === 0
    }
}

let pega_numero = new calculo()

function remove() {
    lcd.innerText = '';
    contador = 0
}

function dot() {
    debugger
    contador++
    if (contador > 1) {
        return
    }
    else {
        if (lcd.innerText == '') {
            lcd.innerText = '0.'
        }
        else {
            lcd.innerText = lcd.innerText + '.'
        }
    }
}

let tecla
let tecla_operador

function basic_operators() {
    // if (isEmpty()) {
    //     return lcd.innerText = result
    // }

    let value_one = pega_numero.pop()
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
    else if (basic == 'Y^x' || tecla_operador == '^^') {
        result = value_one ** value_two
    }
    else if (basic == '%' || tecla_operador == '%') {
        result = (value_one * value_two) / 100
    }
    else if(basic == '1/x'){
        result = 1 / value_one
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
        if (contador_entra > 0) {
            lcd.innerText = ''
            contador_entra = 0
        }
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
    if (tecla_operador == '*' || tecla_operador == '-' || tecla_operador == '+' || tecla_operador == '/' 
        || tecla_operador == '^^' || tecla_operador == '%') {
        basic_operators()
    }

}