let menuVisible = false;
//Función oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //El menú se oculta una vez selecciono una opción
    document.getElementById("nav").classList="";
    menuVisible = false;
}

//Funcion que aplica animaciones a skills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("django");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajoenequipo");
        habilidades[6].classList.add("dedicacion");
        habilidades[7].classList.add("ingles");
    }
}

window.onscroll = function(){
    efectoHabilidades();
}