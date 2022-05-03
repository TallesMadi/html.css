function lista() {
    var lista = window.document.querySelector('div#lista')
       
       if (lista.style.overflow == "inherit") {
           lista.style.height = "0"
           lista.style.opacity = "0"
           lista.style.overflow = "hidden"
           
       } else {
            lista.style.height = "fit-content"
            lista.style.opacity = "1"
            lista.style.overflow = "inherit"
       }
   }

function sair() {
    var lista = window.document.querySelector('div#lista')
    lista.style.height = "0"
    lista.style.opacity = "0"
    lista.style.overflow = "hidden"
}