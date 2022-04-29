let boss = 1000
let me = 350
let div = window.document.querySelector('div.apague')
function clicar() {
    let p = window.document.querySelector('p')
    let div = window.document.querySelector('div.apague')
    p.innerHTML += `<br> Você seguiu para o Leste.`
    div.innerHTML = ``
    p.innerHTML += `<br> Você cai em um buraco e morre de forma rápida e dolorosa, que jeito bem merda de morrer, meus parabéns...GAME OVER! <br> KKKKKKK tu é muito ruim!`
}
function clicarb() {
    let pp = window.document.querySelector('p.hp')
    let p = window.document.querySelector('p')
    let div = window.document.querySelector('div.apague')
    let mov = window.document.querySelector('div.mov')
    div.innerHTML = ``
    p.innerHTML += `<br> Você seguiu para o Oeste. <br> Você se depara com um montro de 7 cabeças, 7 caudas, 7 olhos, 7 pernas e 7 braços e 7...deixa pra lá vai, não sou pago pra isso! <br> Escolha um movimento:`
    pp.innerHTML = ` <br> Boss HP: ${boss} <br> Sua HP: ${me}`
    mov.style.opacity = 1
}
function clicar1() {
    let lista = window.document.querySelector('input#lista')
    let pp = window.document.querySelector('p.hp')
    let pa= window.document.querySelector('p.ataque')
    let mov = window.document.querySelector('div.mov')
    boss = boss - 50
    let dano = Math.floor(Math.random() * 50)
    me = me - dano
    pp.innerHTML = ` <br> Boss HP: ${boss} <br> Sua HP: ${me}`
    pa.innerHTML = `<br> Você tirou ${50} de vida do boss, porém tomou ${dano} de dano!`
    lista.style.opacity = 1
    if (boss <= 0 && me <= 0) {
        let fim = window.document.querySelector('p.fim')
        mov.innerHTML = ``
        pp.innerHTML = ` <br> Boss HP: 0 <br> Sua HP: 0`
        fim.innerHTML += 'Vocês dois morreram juntos, que fofos <3 <br> Por que vocês não se beijam da próxima vez? Seu doente!'
    }
    else if (boss <= 0) {
        let fim = window.document.querySelector('p.fim')
        mov.innerHTML = ``
        pp.innerHTML = ` <br> Boss HP: 0 <br> Sua HP: ${me}`
        fim.innerHTML += 'Parabéns! Você matou o monstro, agora você pode vazar, não aguento mais olhar para sua cara!'
    } else if (me <= 0) {
        let fim = window.document.querySelector('p.fim')
        mov.innerHTML = ``
        pp.innerHTML = ` <br> Boss HP: ${boss} <br> Sua HP: 0`
        fim.innerHTML += 'Tu é um merda mesmo hein? Tu morreu, meus parabéns! <br> GAME OVER!'
    }
}
function clicar2() {
    let lista = window.document.querySelector('input#lista')
    let pp = window.document.querySelector('p.hp')
    let pa= window.document.querySelector('p.ataque')
    let mov = window.document.querySelector('div.mov')
    boss = boss - 75
    let dano = Math.floor(Math.random() * 60)
    me = me - dano
    pp.innerHTML = ` <br> Boss HP: ${boss} <br> Sua HP: ${me}`
    pa.innerHTML = `<br> Você tirou 75 de vida do boss, porém tomou ${dano} de dano!`
    lista.style.opacity = 1
    if (boss <= 0 && me <= 0) {
        let fim = window.document.querySelector('p.fim')
        mov.innerHTML = ``
        pp.innerHTML = ` <br> Boss HP: 0 <br> Sua HP: 0`
        fim.innerHTML += 'Vocês dois morreram juntos, que fofos <3 <br> Por que vocês não se beijam da próxima vez? Seu merda!'
    }
    else if (boss <= 0) {
        let fim = window.document.querySelector('p.fim')
        mov.innerHTML = ``
        pp.innerHTML = ` <br> Boss HP: 0 <br> Sua HP: ${me}`
        fim.innerHTML += 'Parabéns! Você matou o monstro, agora você pode vazar, não aguento mais olhar para sua cara!'
    } else if (me <= 0) {
        let fim = window.document.querySelector('p.fim')
        mov.innerHTML = ``
        pp.innerHTML = ` <br> Boss HP: ${boss} <br> Sua HP: 0`
        fim.innerHTML += 'Tu é um merda mesmo hein? Tu morreu, meus parabéns! <br> GAME OVER!'
    }
}
function clicar3() {
    let lista = window.document.querySelector('input#lista')
    let num1 = Math.floor(Math.random() * 4)
    let num = 0
    num += num1
    let pp = window.document.querySelector('p.hp')
    let pa= window.document.querySelector('p.ataque')
    let mov = window.document.querySelector('div.mov')
    pp.innerHTML = ` <br> Boss HP: ${boss} <br> Sua HP: ${me}`
    lista.style.opacity = 0
    if (boss <= 0 && me <= 0) {
        let fim = window.document.querySelector('p.fim')
        mov.innerHTML = ``
        pp.innerHTML = ` <br> Boss HP: 0 <br> Sua HP: 0`
        fim.innerHTML += 'Vocês dois morreram juntos, que fofos <3 <br> Por que vocês não se beijam da próxima vez? Seu merda!'
    }
    else if (boss <= 0) {
        let fim = window.document.querySelector('p.fim')
        mov.innerHTML = ``
        pp.innerHTML = ` <br> Boss HP: 0 <br> Sua HP: ${me}`
        fim.innerHTML += 'Parabéns! Você matou o monstro, agora você pode vazar, não aguento mais olhar para sua cara!'
    } else if (me <= 0) {
        let fim = window.document.querySelector('p.fim')
        mov.innerHTML = ``
        pp.innerHTML = ` <br> Boss HP: ${boss} <br> Sua HP: 0`
        fim.innerHTML += 'Tu é um merda mesmo hein? Tu morreu, meus parabéns! <br> GAME OVER!'
    }   
    if (num = 1) {
        me = me + 50
        pa.innerHTML = `Você encontrou uma poção de vida! Que sorte!`
        pp.innerHTML = ` <br> Boss HP: ${boss} <br> Sua HP: ${me}`
    } else if (num = 2) {
        me = me - 50 
        pa.innerHTML = `Você encontrou Veneno! Azarado KKKKK!`
        pp.innerHTML = ` <br> Boss HP: ${boss} <br> Sua HP: ${me}`
    } else if (num = 3) {
        pa.innerHTML = `Você encontrou a coisa mais legal e divertida que eu já vi em toda a minha vida! Nada <br> Seu otário!`
        pp.innerHTML = ` <br> Boss HP: ${boss} <br> Sua HP: ${me}`
    }
}
