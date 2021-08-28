let firstValue = document.getElementById('txtFirstValue')
let secondValue = document.getElementById('txtSecondValue')
let firstOption = document.getElementById('firstOption')
let secondOption = document.getElementById('secondOption')

firstValue.addEventListener('input',() => {
    if(firstOption.value == 'USD' && secondOption.value == 'MXN')
    {
        secondValue.value = firstValue.value * 20;
    }
})








































// document.getElementById("convertir").addEventListener("click",function(){
//     const url = 'https://open.exchangerate-api.com/v6/latest';

//     let cantidad = parseInt(document.getElementById("cantidad").value);
//     let moneda = document.getElementById("opciones").value;
//     let resultado = document.getElementById("resultado");

//     fetch(url)
//     .then(response=>response.json())
//     .then(data=>{
//         if(moneda == "mxyen")
//         {
//             resultado.value = (cantidad * (data.rates.JPY/data.rates.MXN)).toFixed(2) + " Yenes";
//         }
//         else if(moneda == "yenmx")
//         {
//             resultado.value = (cantidad * (data.rates.MXN/data.rates.JPY)).toFixed(2) + " Pesos"; 
//         }
//         else if(moneda == "mxdolar")
//         {
//             resultado.value = (cantidad * (data.rates.USD/data.rates.MXN)).toFixed(2) + " Dolares"; 
//         }
//         else if(moneda == "dolarmx")
//         {
//             resultado.value = (cantidad * (data.rates.MXN/data.rates.USD)).toFixed(2) + " Pesos"; 
//         }
//         else if(moneda == "mxwon")
//         {
//             resultado.value = (cantidad * (data.rates.KRW/data.rates.MXN)).toFixed(2) + " Wones"; 
//         }
//         else if(moneda == "wonmx")
//         {
//             resultado.value = (cantidad * (data.rates.MXN/data.rates.KRW)).toFixed(2) + " Pesos"; 
//         }
//     }).catch(error=>alert(error));
// });