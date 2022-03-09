export const showData = async(list,element) => {
    const products = await list;
    products.forEach(prod => {
        // const {name, alpha3code, capital, region, population, flags} = prod;
        const {name, flags} = prod;
        element.innerHTML += `
        <div class="card" style="width: 18rem;">
        <div class="card-body" >
        <img src=${flags.png} class="card-img-top" alt="...">
          <h5 class="card-title">${name.common}</h5>
        </div>
      </div>
      `
    })
}
//    <div class="card" style="width: 18rem;">
// <div class="mosaico">

// <img src="${cover}" class="card-img-top" alt="...">
// </div>
// <div class="card-body">
// <h5 class="card-title">${name}</h5>
// <h6 class="card-title"><span class="platform">${platform} -</span> ${genre} </h6>
// <p class="card-text fw-bold fs-3">${price}$<button class="btn btn-dark float-end" type="button" id="agregar">Comprar</button></p>
// </div>
// </div>