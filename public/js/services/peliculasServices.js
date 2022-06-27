const urlBasePeli ="https://localhost:44355/api/pelicula"

export const getPeliculaById = (id,callback) =>{
    fetch(`${urlBasePeli}/${id}`,{
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

export const getPeliculas = (callback)=>{
    fetch(`${urlBasePeli}`,{
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

export const getPeliculasDeHoy = (callback)=>{
    fetch(`${urlBasePeli}/hoy`,{
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