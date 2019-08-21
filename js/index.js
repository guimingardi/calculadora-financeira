let numeros = Array.from(document.querySelectorAll('.nb'))
numeros.map(tecla_num => tecla_num.addEventListener('click', mostrar))
let lcd = document.querySelector('.lcd_numbers')

function mostrar(){
    lcd.innerText += event.target.innerText
}

let enter = document.querySelector('.enter').addEventListener('click', entra)

let operators = Array.from(document.querySelectorAll('.basic_ops'))
operators.map(ops => ops.addEventListener('click', basic_operators))

let value_one
let value_two
let result

function entra(){
    value_one = Number(lcd.innerText)
    lcd.innerText = ''
}

function basic_operators(){
    basic = event.target.innerText
    value_two = Number(lcd.innerText)
    lcd.innerText = ''
    if(basic == 'X'){
        result = value_one * value_two   
    }
    else if(basic == '/'){
        result = value_one / value_two
    }
    else if(basic == '-'){
        result = value_one - value_two
    }
    else if (basic == '+'){
        result = value_one + value_two
    }
    value_one = result
    lcd.innerText = result
}