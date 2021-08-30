const firstValue = document.getElementById('txtFirstValue')
const secondValue = document.getElementById('txtSecondValue')
const firstOption = document.getElementById('firstOption')
const secondOption = document.getElementById('secondOption')
const url = 'https://open.exchangerate-api.com/v6/latest';

firstValue.addEventListener('input',(e) => {
    let result = 0

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const currencies = data.rates

        if(firstOption.value == secondOption.value)
        {
            result = e.target.value
        }
        //Dollars to others currencies
        else if(firstOption.value == 'USD')
        {
            if(secondOption.value == 'MXN')
            {
                result = (e.target.value * currencies.MXN).toFixed(2)
            }
            else if(secondOption.value == 'JPY')
            {
                result = (e.target.value * currencies.JPY).toFixed(2)
            }
            else if(secondOption.value == 'EUR')
            {
                result = (e.target.value * currencies.EUR).toFixed(2)
            }
            else if(secondOption.value == 'KRW')
            {
                result = (e.target.value * currencies.KRW).toFixed(2)
            }
        }
        //Mexican Pesos to others currencies
        else if(firstOption.value == 'MXN')
        {
            if(secondOption.value == 'USD')
            {
                result = (e.target.value / currencies.MXN).toFixed(2)
            }
            else if(secondOption.value == 'JPY')
            {
                result = (e.target.value * (currencies.JPY/currencies.MXN)).toFixed(2)
            }
            else if(secondOption.value == 'EUR')
            {
                result = (e.target.value * (currencies.EUR/currencies.MXN)).toFixed(2)
            }
            else if(secondOption.value == 'KRW')
            {
                result = (e.target.value * (currencies.KRW/currencies.MXN)).toFixed(2)
            }
        }
        //Yen to others currencies
        else if(firstOption.value == 'JPY')
        {
            if(secondOption.value == 'USD')
            {
                result = (e.target.value / currencies.JPY).toFixed(2)
            }
            else if(secondOption.value == 'MXN')
            {
                result = (e.target.value * (currencies.MXN/currencies.JPY)).toFixed(2)
            }
            else if(secondOption.value == 'EUR')
            {
                result = (e.target.value * (currencies.EUR/currencies.JPY)).toFixed(2)
            }
            else if(secondOption.value == 'KRW')
            {
                result = (e.target.value * (currencies.KRW/currencies.JPY)).toFixed(2)
            }
        }
        //Euro to others currencies
        else if(firstOption.value == 'EUR')
        {
            if(secondOption.value == 'USD')
            {
                result = (e.target.value / currencies.EUR).toFixed(2)
            }
            else if(secondOption.value == 'MXN')
            {
                result = (e.target.value * (currencies.MXN/currencies.EUR)).toFixed(2)
            }
            else if(secondOption.value == 'JPY')
            {
                result = (e.target.value * (currencies.JPY/currencies.EUR)).toFixed(2)
            }
            else if(secondOption.value == 'KRW')
            {
                result = (e.target.value * (currencies.KRW/currencies.EUR)).toFixed(2)
            }
        }
        //Korean Won to others currencies
        else if(firstOption.value == 'KRW')
        {
            if(secondOption.value == 'USD')
            {
                result = (e.target.value / currencies.KRW).toFixed(2)
            }
            else if(secondOption.value == 'MXN')
            {
                result = (e.target.value * (currencies.MXN/currencies.KRW)).toFixed(2)
            }
            else if(secondOption.value == 'JPY')
            {
                result = (e.target.value * (currencies.JPY/currencies.KRW)).toFixed(2)
            }
            else if(secondOption.value == 'EUR')
            {
                result = (e.target.value * (currencies.EUR/currencies.KRW)).toFixed(2)
            }
        }


        secondValue.value = result;
    })
    
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