var botonSubirArriba = document.getElementById("boton-subir-arriba");
var logoArriba = document.getElementById("img-nav");
var menuArribaIMG = document.getElementsByClassName("img-nav");
var menuArribaMovil = document.getElementById("menu-arriba-pantalla-pequeña");
var opcionesMenuMovil = document.getElementsByClassName("opcion-menu-movil");
var menuArribaMovilAbierto = false;

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
    if(window.pageYOffset < 50 && screen.width > 500) {
        logoArriba.style.width = "6em";
        for (let i = 0; i < 6; i++) {
            menuArribaIMG[i].style.width = "2em";
        }
    }
    if(window.pageYOffset >= 50 && screen.width > 500){
        logoArriba.style.width = "3em";
        for (let i = 0; i < 6; i++) {
            menuArribaIMG[i].style.width = "1em";
        }
    }
    if(screen.width < 500){
        for (let i = 0; i < 6; i++) {
            menuArribaIMG[i].style.width = "3em";
        }
    }
};
const AbrirCerrarMenuArriba = () =>{
    if (!menuArribaMovilAbierto) {
        menuArribaMovil.style.height = "14em";
        for (let i = 0; i < 6; i++) {
            opcionesMenuMovil[i].style.transform = "scaleX(1)";
        }
        menuArribaMovilAbierto = true;
    }else{
        menuArribaMovil.style.height = "3.5em";
        for (let i = 0; i < 6; i++) {
            opcionesMenuMovil[i].style.transform = "scaleX(0)";
        }
        menuArribaMovilAbierto = false;
    }
}