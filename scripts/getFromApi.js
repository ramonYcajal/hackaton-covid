import { Country } from './Country.js';
var url = 'https://api.covid19api.com/summary';

var listaPaises = [];

/**
 * VARIABLE listaPrueba PARA HACER PRUEBAS
 * VARIABLE listaPaises PARA MOSTRAR DATOS REALES CONSUMIDOS DEL API.
 * API USADA:https://api.covid19api.com/summary
 var listaPrueba = [];
let p = new Country("UNITED KINGDOM", "GB", 595, 48436);
let p1 = new Country("PORTUGAL", "PT", 70, 11278);
let p2 = new Country("FRANCE", "FR", 2925, 93773);
let p3 = new Country("MOROCCO", "MA", 8, 1021);
let p4 = new Country("SPAIN", "ES", 800, 131646);
listaPrueba.push(p);
p.setPercent()
listaPrueba.push(p1);
p1.setPercent();
listaPrueba.push(p2);
p2.setPercent();
listaPrueba.push(p3);
p3.setPercent();
listaPrueba.push(p4);
p4.setPercent();
 */


fetch(url)
    .then(response => {

        return response.json();
    })
    .then(data => {
       
        var count = 0, i = 0;
        while (count < 5) {
            
            if (data.Countries[i].CountryCode == "PT" || data.Countries[i].CountryCode == "GB" || data.Countries[i].CountryCode == "FR" || data.Countries[i].CountryCode == "MA" || data.Countries[i].CountryCode == "ES") {
                let p = new Country(data.Countries[i].Country, data.Countries[i].CountryCode, data.Countries[i].NewConfirmed, data.Countries[i].TotalConfirmed, data.Countries[i].NewDeaths, data.Countries[i].NewRecovered, data.Countries[i].TotalDeaths, data.Countries[i].TotalRecovered)
                p.setPercent();
                listaPaises.push(p);
                count++;
            }
            i++;
        }//while
       

        //Mostrar los datos en las cajas correspondientes
        for (let i = 0; i < listaPaises.length; i++) {
            //creo los componentes a inyectar en el html
            var col = document.querySelector('#' + listaPaises[i].code)
            var extendedInformation=document.querySelector('#' + listaPaises[i].code+">.popup")
            var tittle = document.createElement('h1');
            //iconos
            var iconNewConfirmed = document.createElement('i');
            var iconPercent = document.createElement('i');
            var iconNewDeaths=document.createElement('i');
            var iconTotalDeaths=document.createElement('i');
            var iconNewRecovered=document.createElement('i');
            var iconTotalRecovered=document.createElement('i');
            var iconPlusTotalDeaths=document.createElement('i');
            var iconPlusTotalRecovered=document.createElement('i');

            var newConfirmed = document.createElement('p');
            var percent = document.createElement('p');
            var list=document.createElement('ul');
            var newDeaths=document.createElement('li');
            var totalDeaths=document.createElement('li');
            var newRecovered=document.createElement('li');
            var totalRecovered=document.createElement('li');
            list.appendChild(newDeaths);
            list.appendChild(totalDeaths);
            list.appendChild(newRecovered);
            list.appendChild(totalRecovered);
            //iconos de flecha y llama tomados de fontawesome
            iconNewConfirmed.classList.add("far", "fa-arrow-alt-circle-up");
            iconNewDeaths.classList.add("far","fa-sad-tear");
            iconTotalDeaths.classList.add("far","fa-sad-tear");
            iconTotalRecovered.classList.add("far", "fa-smile-beam");
            iconNewRecovered.classList.add("far", "fa-smile-beam");
            iconPlusTotalDeaths.classList.add("fas","fa-plus-circle")
            iconPlusTotalRecovered.classList.add("fas","fa-plus-circle")
            newRecovered.appendChild(iconNewConfirmed);
            iconPercent.classList.add("fas", "fa-burn");
            
            //paso los datos que me interesan del array de objetos a las etiquetas html
            tittle.innerHTML = listaPaises[i].name;
            newConfirmed.innerHTML = listaPaises[i].newConfirmed;
            percent.innerHTML = listaPaises[i].percent + "%";
            newDeaths.innerHTML=listaPaises[i].newDeaths;
            newDeaths.appendChild(iconNewDeaths);
            totalDeaths.innerHTML=listaPaises[i].totalDeaths;
            totalDeaths.appendChild(iconTotalDeaths);
            totalDeaths.appendChild(iconPlusTotalDeaths);
            newRecovered.innerHTML=listaPaises[i].newRecovered;
            newRecovered.appendChild(iconNewRecovered);
            totalRecovered.innerHTML=listaPaises[i].totalRecovered;
            totalRecovered.appendChild(iconTotalRecovered)
            totalRecovered.appendChild(iconPlusTotalRecovered);
            //agrego los componentes
            col.appendChild(tittle);
            newConfirmed.appendChild(iconNewConfirmed);
            
            percent.appendChild(iconPercent);
            col.appendChild(newConfirmed);
            col.appendChild(percent);
            extendedInformation.appendChild(list);
            
          
        }

        //comprobar los datos y cambiar colores
        var flag = false;

        var spain = document.querySelector('#ES');

        for (let i = 0; i < listaPaises.length; i++) {

            var col = document.querySelector('#' + listaPaises[i].code)
            if (listaPaises[i].percent < 6) {
                col.classList.add("right");

            } else if (listaPaises[i].percent > 6 && listaPaises[i].percent < 8) {
                flag = true;
                col.classList.add("warning");

            } else if (listaPaises[i].percent > 8) {
                flag = true;
                col.classList.add("danger");

            }

        }//for
        if (flag == true) {
            spain.classList.remove("right")
            spain.classList.add("warning");
        }


    })
    .catch(err => {

    })

