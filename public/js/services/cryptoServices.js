const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

export async function CoinList(callback){   //Lista toda la info
  let data = await CoinGeckoClient.coins.all()
  .then((body)=>{
    if (body.message=='OK'){
    callback(body.data)
    }
    
  })
};

export async function Currency(callback){  //Listado de monedas soportadas
  let data = await CoinGeckoClient.simple.supportedVsCurrencies()
  .then((body)=>{
    if (body.message=='OK')
    callback(body.data)
  })
};

export async function CoinListByCurrency(currency){ //Info de la cripto por moneda
  let data = await CoinGeckoClient.coins.markets({
    vs_currency:`${currency}`
  })
  .then((body)=>{
    if (body.message=='OK')
    console.log(body.data)
  })
};

export const Crypto = (callback) =>{
      fetch(`${url2}`,{
          method: 'GET'
      })
      .then((httpResponse)=>{
          if(httpResponse.ok)
              return httpResponse.json()
      })
      .then(body => {
          callback(body);
      })
  }



