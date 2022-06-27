export const Error = (type,description) =>`
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 d-flex align-items-center justify-content-center mt-5 ">
                <p class="fw-bold h2 text-danger ">${type} </p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 d-flex align-items-center justify-content-center">
                <p class="fw-bold h1 text-danger">${description} </p>
            </div>
        </div>
    </div>
`

export const ErrorTickets = (status,message) =>`
    <div class="row">
        <div class="col-md-12 d-flex justify-content-center mt-5">
                <p class="fw-bold h1 text-danger ">${status}</p>
        </div>
        <div class="col-md-12 d-flex justify-content-center mt-2">
                <p class="fw-bold h1 text-danger ">${message}</p>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 d-flex justify-content-center mt-5" onclick="window.location.reload(true);">
            <a id="boton-recargar" href="../view/funciones.html">
                <img id="img-flecha" src="../img/flecha-volver.png"  width="130" height="130">
            </a>
        </div>
    </div>
`