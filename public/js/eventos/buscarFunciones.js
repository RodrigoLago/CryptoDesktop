import {RenderizarFunciones} from "../container/funciones.js"

document.getElementById("boton-buscar-funciones").addEventListener("click", buscarFunciones);
function buscarFunciones() {
    let peliculaTitulo=document.getElementById("movie-select")
    let titulo=peliculaTitulo.value
    let fecha=document.getElementById("date-picker").value
    if (peliculaTitulo.value=="Película") {
        titulo=""
    }
    RenderizarFunciones(fecha,titulo)
}