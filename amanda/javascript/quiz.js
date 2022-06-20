let res = document.getElementsByName('alt')
let res2 = document.getElementsByName('alt2')
let res3 = document.getElementsByName('alt3')
let res4 = document.getElementsByName('alt4')
let res5 = document.getElementsByName('alt5')
let res6 = document.getElementsByName('alt6')
let res7 = document.getElementsByName('alt7')
let res8 = document.getElementsByName('alt8')
let res9 = document.getElementsByName('alt9')
let res10 = document.getElementsByName('alt10')
let botao = document.querySelector('input.botao')
let div = document.querySelector('div.res')
let soma = 0
let final = 0

function resultado() {
    botao.style.visibility = 'hidden'
    div.style.opacity = '1'

    if (res[0].checked) {
        soma++
    } 
    if (res2[2].checked) {
        soma++
    }
    if (res3[1].checked) {
        soma++
    }
    if (res4[3].checked) {
        soma++
    }
    if (res5[0].checked) {
        soma++
    }
    if (res6[3].checked) {
        soma++
    }
    if (res7[1].checked) {
        soma++
    }
    if (res8[1].checked) {
        soma++
    }
    if (res9[2].checked) {
        soma++
    }
    if (res10[3].checked) {
        soma++
    }
    final = soma


    if (final <= 1) {
        div.innerHTML += `<h2>${final}/10</h2> <p>Você conseguiu errar tudo isso...agora eu me pergunto: Como? Você só pode estar de brincadeira comigo, né? Se for verdade eu fico triste demais.</p>`            
    }
    else if (final >= 2 && final <= 3) {
        div.innerHTML += `<h2>${final}/10</h2>`
    }
    else if (final >= 5 && final <= 4) {
        div.innerHTML += `<h2>${final}/10</h2>`
    }
    else if (final >= 7 && final <= 6) {
        div.innerHTML += `<h2>${final}/10</h2>`
    }
    else if (final >= 8 && final <= 9) {
        div.innerHTML += `<h2>${final}/10</h2>`
    }
    else if (final = 10) {
        div.innerHTML += `<h2>10/10</h2> <p><br> PARABÉNS! Você mostrou que realmente se conhece, isso é muito bom. Mesmo assim eu não esperava outra resposta sem ser essa :) </p>`
    }            
}