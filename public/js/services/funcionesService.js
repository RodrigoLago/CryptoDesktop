const urlFuncion ="https://localhost:44355/api/funcion"
const urlPelicula ="https://localhost:44355/api/pelicula"

export const getFunciones = (fecha,titulo,callback)=>{
    let urlBusqueda=`${urlFuncion}?fecha=${fecha}&titulo=${titulo}`
    fetch(urlBusqueda,{
        method: 'GET'
    })
    .then((httpResponse)=>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        callback(body)
    })
    .catch((error) => reject({
        networkError: error.message,
      }));
}

export const getFuncionesConPelicula = (funciones, callback) =>{
    let urlBusqueda=`${urlPelicula}`
    fetch(urlBusqueda,{
        method: 'GET'
    })
    .then((httpResponse)=>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        funciones.forEach(funcion => {
            let peliculaquebusco = funcion.peliculaId
            for (let i = 0; i < Object.keys(body).length; i++) {
                if(body[i].peliculaId==peliculaquebusco){
                    funcion.titulo=body[i].titulo
                }
            }
        })
        callback(funciones)
    })
}

export const getFuncionById = (id,callback)=>{
    let urlBusqueda=`${urlFuncion}/${id}`
    fetch(urlBusqueda,{
        method: 'GET'
    })
    .then((httpResponse)=>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        callback(body)
    })
}
