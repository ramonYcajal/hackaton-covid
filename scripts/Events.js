document.addEventListener("DOMContentLoaded", function (event) {
    let countries = document.querySelectorAll(".columna");
    console.log(countries);
    for (let i = 0; i < countries.length; i++) {
        countries[i].addEventListener("mouseenter", function  (event) {
            countries[i].querySelector(".popup").classList.add("popup-hover");
            
         });
        countries[i].addEventListener("mouseleave", function  (event) {
            countries[i].querySelector(".popup").classList.remove("popup-hover");
         })

    }
})
