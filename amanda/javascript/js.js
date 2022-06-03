function clicar() {
    let div = document.querySelector('div.menu')
    if (div.style.opacity == 1) {
        div.style.opacity = '0'
        div.style.height = '0'
        div.style.overflow = 'hidden'
        div.style.width = '0'
    } 
    else {
        div.style.height = "fit-content"
        div.style.opacity = "1"
        div.style.overflow = "inherit"
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