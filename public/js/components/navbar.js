export const Navbar = () => `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bgcolor" id="navegador">
        <div class="container-fluid">
            <div class="row collapse navbar-collapse" id="navbarSupportedContent">
                <div class="col-md-1">
                </div>
                <div class="col-md-10">
                </div>
                <div class="col-md-1">
                    <section id="header-container">
                        <div class="demo">
                            <div class="dropdown-container">
                                <select class="select-currency" id="select-currency">
                                </select>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
          </div>
    </nav>`;
    
export const Option = (id,currency) =>`
    <select>
        <option value="${id}">${currency}</option>
    </select>
`