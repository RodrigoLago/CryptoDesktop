import { CoinList, CoinListByCurrency, Currency } from "../services/cryptoServices.js"
import { Navbar,Option } from "../components/navbar.js";
import { Card } from "../components/card.js"
import { Footer } from "../components/footer.js";

const RenderNavbar = () =>{
    let _navbarDiv = document.getElementById("navigator");
    _navbarDiv.innerHTML+= Navbar();
}
const RenderCard=(json)=>{
    let _root = document.getElementById("rootCards");
    json.forEach(cripto=>{
        _root.innerHTML += Card(cripto.image.small,cripto.name,cripto.market_data.current_price.ars,'ars'.toUpperCase())
    })
}
const RenderOptions=(array)=>{
    let _selectRoot=document.getElementsByClassName("select-currency")[0];
    for (let i = 0; i < array.length; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = array[i].toUpperCase();
        _selectRoot.appendChild(opt);
        
    }
}

const RenderFooter = () =>{
    let _footerDiv = document.getElementById("footer");
    _footerDiv.innerHTML+= Footer();
}


export const IndexRender = () => {
    RenderNavbar();
    CoinList(RenderCard)
    RenderFooter();
    Currency(RenderOptions);
    CoinListByCurrency('ars');
}