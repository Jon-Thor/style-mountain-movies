


function Dropdownmenu() {
    var navbarmenu = document.getElementById("navbar")
    if(window.getComputedStyle(navbarmenu).display === "none"){
        navbarmenu.style.display = "flex"
    }else{
        navbarmenu.style.display = "none"
    }
}