export const Card2 = (img,price,currency) =>`
    <a href="./pelicula.html?peliId=${img}">
        <div class="card" id="cardPeli${img}" ">
            <div class="img1" style="background-image: url(${img})"></div>
            <div class="img2" style="background-image: url(${img})"></div>
            <div class="title">${price}</div>
            <div class="text">${currency}</div>
        </div>
    </a>
`
export const Card = (img,name,price,divisa) =>`
<div class="container-fluid mt-2 mb-2 pt-2 pb-2 card fade-in-repeat">
	<div class="row">
		<div class="col-md-3 align-items-center justify-content-center"> <!--Image-->
        <img src="${img}" alt="descriptive text"></img>
		</div>
		<div class="col-md-9">
			<div class="row">
				<div class="col-md-12 title">
                    ${name}
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-4 text-lg-right" style="text-align:right">
                        <p class="text-lg-right">${divisa}</p>
						</div>
						<div class="col-md-8 ">
                        ${price}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
`


