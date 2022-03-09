export const showData = async(list,element) => {
    const products = await list;
    products.forEach(prod => {
        // const {name, alpha3code, capital, region, population, flags} = prod;
        const {name, flags, region, cca3, population, capital} = prod;
        element.innerHTML += `
      <div class="card" style="width: 18rem;">
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
{/*  */}