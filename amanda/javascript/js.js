function clicar() {
    let div = document.querySelector('div.menu')
    if (div.style.opacity == 1) {
        div.style.opacity = '0'
        div.style.height = '0'
        div.style.overflow = 'hidden'
        div.style.visibility = 'hidden'
        div.style.width = '0'
    } 
    else {
        div.style.height = "fit-content"
        div.style.opacity = "1"
        div.style.overflow = "inherit"
        div.style.visibility = 'visible'
        div.style.width = "fit-content"
    }
}

function sair() {
    let div = document.querySelector('div.menu')
    div.style.opacity = '0'
    div.style.height = '0'
    div.style.overflow = 'hidden'
    div.style.width = '0'
}

function mais() {
    let nav = document.querySelector('nav.more')
    if (nav.style.opacity == 1) {
        nav.style.opacity = '0'
        nav.style.visibility = 'hidden'
        nav.style.width = '0'
    } 
    else {
        nav.style.opacity = "1"
        nav.style.visibility = 'visible'
        nav.style.width = '300px'
    }
}