const urlBaseTickets = "https://localhost:44355/api/ticket"


export const postTickets=(funcionId,user,cantidad,callback)=>{
    let jsonBody={
        "funcionId": funcionId,
        "usuario": user,
        "cantidad": cantidad
    }
    fetch(`${urlBaseTickets}`,{
        method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(jsonBody)
    })
    .then((httpResponse)=>{
        if(httpResponse.ok)
            return httpResponse.json()
    })
    .then(body => {
        callback(body);
    })
}
