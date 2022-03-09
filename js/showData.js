export const showData = async(list,element) => {
    const products = await list;
    products.forEach(prod => {
        // const {name, alpha3code, capital, region, population, flags} = prod;
        const {name, flags, region, cca3, population, capital} = prod;
        element.innerHTML += `
      <div class="card" style="width: 18rem;">
        <img src="${flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3>${name.common}</h3>
          <p class="card-text">${population}</p>
          <p>${region}</p>
          <p>${capital}</p>
          <p>${cca3}</p>
        </div>
      </div>
      `
    })
}
{/*  */}