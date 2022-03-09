export const showData = async(list,element) => {
    const products = await list;
    products.forEach(prod => {
        // const {name, alpha3code, capital, region, population, flags} = prod;
        const {name, flags, cca3, population, capital} = prod;
        element.innerHTML += `
      <div class="card bg-dark text-light" style="width: 18rem;">
        <img src="${flags.png}" class="card-img-top" alt="...">
<<<<<<< HEAD
        <div class ="l">
          <p class = "pais">${name.common}</p>
          <div class = "informacion">
          <p><strong>Population: </strong>${population}</p>
          <p><strong>Region: </strong>${region}</p>
          <p><strong>Capital: </strong>${capital}</p>
          <p><strong>Codigo: </strong>${cca3}</p>
          </div>
=======
        <div class="card-body">
          <h3>${name.common}</h3>
          <p class="card-text">Población: ${population}</p>
          <p>Continente: ${region}</p>
          <p>Capital: ${capital}</p>
          <p>Codigo: ${cca3}</p>
>>>>>>> fa258e35801fbffdb6b19872d2925d188780249a
        </div>
      </div>
      `
    })
}
{/*  */}

{/* <div class="card" style="width: 18rem;">
        <img src="${flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3>${name.common}</h3>
          <p class="card-text">Población: ${population}</p>
          <p>Continente: ${region}</p>
          <p>Capital: ${capital}</p>
          <p>Codigo${cca3}</p>
        </div>
      </div> */}