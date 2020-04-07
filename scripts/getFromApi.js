import { Country } from './Country.js';
var url = 'https://api.covid19api.com/summary';
var listaPrueba = [];
var listaPaises = [];
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
fetch(url)
    .then(response => {

        return response.json();
    })
    .then(data => {
        var count = 0, i = 0;
        while (count < 5) {
            if (data.Countries[i].CountryCode == "PT" || data.Countries[i].CountryCode == "GB" || data.Countries[i].CountryCode == "FR" || data.Countries[i].CountryCode == "MA" || data.Countries[i].CountryCode == "ES") {
                let p = new Country(data.Countries[i].Country, data.Countries[i].CountryCode, data.Countries[i].NewConfirmed, data.Countries[i].TotalConfirmed)
                p.setPercent();
                listaPaises.push(p);
                count++;
            }
            i++;
        }
        console.log(listaPaises);
        //Mostrar los datos en las cajas correspondientes
        for (let i = 0; i < listaPaises.length; i++) {
            //creo los componentes a inyectar en el html
            var col = document.querySelector('#' + listaPaises[i].code)
            var tittle = document.createElement('h1');
            var iconNewConfirmed = document.createElement('i');
            var iconPercent = document.createElement('i');
            var newConfirmed = document.createElement('p');
            var percent = document.createElement('p');
            //iconos de flecha y llama tomados de fontawesome
            iconNewConfirmed.classList.add("far", "fa-arrow-alt-circle-up");
            newConfirmed.appendChild(iconNewConfirmed);
            iconPercent.classList.add("fas", "fa-burn");
            
            //paso los datos que me interesan del array de objetos a las etiquetas html
            tittle.innerHTML = listaPaises[i].name;
            newConfirmed.innerHTML = listaPaises[i].newConfirmed;
            percent.innerHTML = listaPaises[i].percent + "%";
            
            //agrego los componentes
            col.appendChild(tittle);
            newConfirmed.appendChild(iconNewConfirmed);
            percent.appendChild(iconPercent);
            col.appendChild(newConfirmed);
            col.appendChild(percent);
            
        }

        //comprobar los datos y cambiar colores
        var flag = false;
        let spainIndex = listaPaises.findIndex(pais => pais.code === "ES")
        console.log(spainIndex);
        var spain = document.querySelector('#ES');
        var colum = document.querySelectorAll('.col')
        console.log(colum);
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
        if (flag==true) {
            spain.classList.remove("right")
            spain.classList.add("warning");
        }


    })
    .catch(err => {

    })

