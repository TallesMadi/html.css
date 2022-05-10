let tam1 = document.getElementsByClassName('big')[0]
let tam2 = document.getElementsByClassName('big')[1]
let tam3 = document.getElementsByClassName('big')[2]
let tam4 = document.getElementsByClassName('big')[3]
let tam5 = document.getElementsByClassName('big')[4]
let tam6 = document.getElementsByClassName('big')[5]
function clique1() {
    tam1.style.fontSize = `18px`
    tam2.style.fontSize = `18px`
    tam3.style.fontSize = `18px`
    tam4.style.fontSize = `18px`
    tam5.style.fontSize = `18px`
    tam6.style.fontSize = `18px`
}

function clique2() {
    tam1.style.fontSize = `20px`
    tam2.style.fontSize = `20px`
    tam3.style.fontSize = `20px`
    tam4.style.fontSize = `20px`
    tam5.style.fontSize = `20px`
    tam6.style.fontSize = `20px`
}

function clique3() {
    tam1.style.fontSize = `16px`
    tam2.style.fontSize = `16px`
    tam3.style.fontSize = `16px`
    tam4.style.fontSize = `16px`
    tam5.style.fontSize = `16px`
    tam6.style.fontSize = `16px`
}

function lista() {
var lista = window.document.querySelector('div#lista')

if (lista.style.opacity == 0) {
    lista.style.height = "fit-content"
    lista.style.opacity = "1"
    lista.style.overflow = "inherit"
    lista.style.maxWidth = "40%"
    lista.style.minWidth = "38%"
   
} else {
    lista.style.height = "0"
    lista.style.opacity = "0"
    lista.style.overflow = "hidden"
    lista.style.maxWidth = "0"
    lista.style.minWidth = "0"
}
}

function sair() {
var lista = window.document.querySelector('div#lista')
lista.style.height = "0"
lista.style.opacity = "0"
lista.style.overflow = "hidden"    
lista.style.maxWidth = "0"
lista.style.minWidth = "0"
}