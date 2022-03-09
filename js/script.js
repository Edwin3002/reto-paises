import {getData, getRegion} from "./getData.js";
import {showData} from './showData.js'

const urlPaises = 'https://restcountries.com/v3.1/all';
// https://restcountries.com/v3.1/region/europe
const element = document.querySelector('#cartas');

document.addEventListener('DOMContentLoaded', async() => {
    
    const data = await getData(urlPaises);
    
    console.log(data)
    showData(data,element);
    color();

})

element.addEventListener('click', async(e) => {

    const btnDetail = e.target.classList.contains('btn-outline-dark');
    const id = e.target.id;

    if(btnDetail){
         const lista = await getData(urlPaises);
         const objeto = lista.find(list => list.id === Number(id))
         localStorage.setItem("Detail",JSON.stringify(objeto));
         window.location.href = "detail.html"
    }
})


// const region = document.querySelector('#region');

const getRegion = async() => {
    const array = await getRegion();
}
//esta declarando dos veces get region
function color(){
    navColor = document.getElementById('navColor');
    alert('hola cambie de color')
}//me escucha?