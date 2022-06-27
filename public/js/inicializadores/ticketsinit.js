import { TicketsRender } from "../container/tickets.js";
const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var peliculaId = urlParams.get('peliculaId');
var funcionId = urlParams.get('funcionId');
window.onload = () =>{
    if (urlParams.has('funcionId') && urlParams.has('peliculaId')){
        TicketsRender(peliculaId,funcionId);
    }
    else{
        alert('No han pasado un id de una funciono una pelicula');
        window.location.href = "../";
    }
}