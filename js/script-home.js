var botonSubirArriba = document.getElementById("boton-subir-arriba");
var logoArriba = document.getElementById("img-nav");
var menuArriba = document.getElementsByClassName("img-nav");
console.log(menuArriba);

window.onscroll = function aparecerBotonArriba() {
    // FLECHA ARRIBA
    if(window.pageYOffset < 100){
        botonSubirArriba.style.opacity = 0;
        botonSubirArriba.style.transform = "scaleY(0)";
    }
    if(window.pageYOffset >= 100){
        botonSubirArriba.style.opacity = 1;
        botonSubirArriba.style.transform = "scaleY(1)";
    }
    // MENÚ ARRIBA
    if(window.pageYOffset < 50){
        logoArriba.style.width = "6em";
        for (let i = 0; i < 4; i++) {
            menuArriba[i].style.width = "2em";
        }
        // menuArriba.style.width = "6em";
    }
    if(window.pageYOffset >= 50){
        logoArriba.style.width = "3em";
        for (let i = 0; i < 4; i++) {
            menuArriba[i].style.width = "1em";
        }
        // menuArriba.style.width = "3em";
    }
};