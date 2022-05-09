function lista() {
    var lista = window.document.querySelector('div#lista')
       
       if (lista.style.opacity == 0) {
            lista.style.height = "fit-content"
            lista.style.opacity = "1"
            lista.style.overflow = "inherit"
           
       } else {
            lista.style.height = "0"
            lista.style.opacity = "0"
            lista.style.overflow = "hidden"
       }
   }

function sair() {
    var lista = window.document.querySelector('div#lista')
    lista.style.height = "0"
    lista.style.opacity = "0"
    lista.style.overflow = "hidden"
}