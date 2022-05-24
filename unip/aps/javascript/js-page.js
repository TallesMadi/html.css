let tam1 = document.getElementsByClassName('big')[0]
let tam2 = document.getElementsByClassName('big')[1]
let tam3 = document.getElementsByClassName('big')[2]
let tam4 = document.getElementsByClassName('big')[3]
let tam5 = document.getElementsByClassName('big')[4]
let tam6 = document.getElementsByClassName('big')[5]
let tam7 = document.getElementsByClassName('big')[6]
let tam8 = document.getElementsByClassName('big')[7]
let tam9 = document.getElementsByClassName('big')[8]
let tam10 = document.getElementsByClassName('big')[9]
let tam11 = document.getElementsByClassName('big')[10]
let tam12 = document.getElementsByClassName('big')[11]
let tam13 = document.getElementsByClassName('big')[12]
let tam14 = document.getElementsByClassName('big')[13]
let tam15 = document.getElementsByClassName('big')[14]
let tam16 = document.getElementsByClassName('big')[15]

function clique1() {
    if (tam1.style.fontSize != `20px`) {
        tam1.style.fontSize = `20px`
        tam2.style.fontSize = `20px`
        tam3.style.fontSize = `20px`
        tam4.style.fontSize = `20px`
        tam5.style.fontSize = `20px`
        tam6.style.fontSize = `20px`
        tam7.style.fontSize = `20px`
        tam8.style.fontSize = `20px`
        tam9.style.fontSize = `20px`
        tam10.style.fontSize = `20px`
        tam11.style.fontSize = `20px`
        tam12.style.fontSize = `20px`
        tam13.style.fontSize = `20px`
        tam14.style.fontSize = `20px`
        tam15.style.fontSize = `20px`
        tam16.style.fontSize = `20px`
    }
    else {
        window.alert('A graduação da fonte já foi alterada.')
    }
}

function clique2() {
    if (tam1.style.fontSize != `24px`) {
        tam1.style.fontSize = `24px`
        tam2.style.fontSize = `24px`
        tam3.style.fontSize = `24px`
        tam4.style.fontSize = `24px`
        tam5.style.fontSize = `24px`
        tam6.style.fontSize = `24px`
        tam7.style.fontSize = `24px`
        tam8.style.fontSize = `24px`
        tam9.style.fontSize = `24px`
        tam10.style.fontSize = `24px`
        tam11.style.fontSize = `24px`
        tam12.style.fontSize = `24px`
        tam13.style.fontSize = `24px`
        tam14.style.fontSize = `24px`
        tam15.style.fontSize = `24px`
        tam16.style.fontSize = `24px`
    }
    else {
        window.alert(`A graduação da fonte já está no máximo.`)
    }
}

function clique3() {
    
    if (tam1.style.fontSize != `16px`) {
        tam1.style.fontSize = `16px`
        tam2.style.fontSize = `16px`
        tam3.style.fontSize = `16px`
        tam4.style.fontSize = `16px`
        tam5.style.fontSize = `16px`
        tam6.style.fontSize = `16px`
        tam7.style.fontSize = `16px`
        tam8.style.fontSize = `16px`
        tam9.style.fontSize = `16px`
        tam10.style.fontSize = `16px`
        tam11.style.fontSize = `16px`
        tam12.style.fontSize = `16px`
        tam13.style.fontSize = `16px`
        tam14.style.fontSize = `16px`
        tam15.style.fontSize = `16px`
        tam16.style.fontSize = `16px`
    } 
    else {
        window.alert('A graduação da fonte já esta no mínimo.')
    }
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