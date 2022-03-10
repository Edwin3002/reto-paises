export const showData = async(list,element) => {
    const products = await list;
    element.innerHTML = '';
    products.forEach(prod => {
        // const {name, alpha3code, capital, region, population, flags} = prod;
        const {name, flags, cca3, population, capital, region} = prod;
        element.innerHTML += `
      <div class="card bg-dark text-light" style="width: 18rem;">
        <img src="${flags.png}" class="card-img-top" alt="...">
        <div class ="l">
          <p class = "pais">${name.common}</p>
          <div class = "informacion">
          <p><strong>Population: </strong>${population}</p>
          <p><strong>Region: </strong>${region}</p>
          <p><strong>Capital: </strong>${capital}</p>
          <p><strong>Codigo: </strong>${cca3}</p>
          </div>
        </div>
      </div>
      `
    })
}
