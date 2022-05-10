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