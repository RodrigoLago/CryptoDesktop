import { CoinList, CoinListByCurrency, Currency } from "../services/cryptoServices.js"
import { Navbar } from "../components/navbar.js";
import { Card } from "../components/card.js"
import { Footer } from "../components/footer.js";


const RenderNavbar = () =>{
    let _navbarDiv = document.getElementById("navigator");
    _navbarDiv.innerHTML+= Navbar();
}



const RenderCard = (json) =>{
    let _root = document.getElementById("rootCards");
    json.forEach(pelicula => {
        _root.innerHTML += Card(pelicula.poster,pelicula.titulo,pelicula.sinopsis,pelicula.peliculaId)
    })
}

const RenderFooter = () =>{
    let _footerDiv = document.getElementById("footer");
    _footerDiv.innerHTML+= Footer();
}
const Prueba=(json)=>{
    let _root = document.getElementById("rootCards");
    json.forEach(cripto=>{
        _root.innerHTML += Card(cripto.image.small,cripto.name,cripto.market_data.current_price.ars,'ars'.toUpperCase())
    })
}

export const IndexRender = () => {
    RenderNavbar();
    RenderFooter();
    /*Crypto(Prueba)*/
    CoinList(Prueba)
    CoinListByCurrency('ars')
}