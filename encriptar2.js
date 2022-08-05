const texto = document.querySelector("#caja-texto-encriptar");
const resultado = document.querySelector("#resultado");

var frente = document.querySelector(".frente");
var atras = document.querySelector(".atras");

botonEncriptar = document.querySelector("#encriptar");

function mostrarResultado(){
    const textoEncriptado = encriptar(texto.value);
    resultado.value = textoEncriptado;
    frente.style.display="none";
    atras.style.display="block";
}

function encriptar(textoEncriptar){
    textoEncriptar = textoEncriptar.toLowerCase();
    textoEncriptar = textoEncriptar.replaceAll("e", "enter");
    textoEncriptar = textoEncriptar.replaceAll("i", "imes");
    textoEncriptar = textoEncriptar.replaceAll("a", "ai");
    textoEncriptar = textoEncriptar.replaceAll("o", "ober");
    textoEncriptar = textoEncriptar.replaceAll("u", "ufat");
    return textoEncriptar;
}



botonEncriptar.addEventListener("click",mostrarResultado);

