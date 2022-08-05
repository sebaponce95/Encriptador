const textoDesenciptar = document.querySelector("#caja-texto-encriptar");
const resultadoDesencriptado = document.querySelector("#resultado");

botonDesencriptar = document.querySelector("#desencriptar");

function mostrarDesencriptado(){
    const textoDesencriptado = desencriptar(textoDesenciptar.value);
    resultadoDesencriptado.value = textoDesencriptado;
    frente.style.display="none";
    atras.style.display="block";
}

function desencriptar(textoDesencriptar){
    textoDesencriptar = textoDesencriptar.toLowerCase();
    textoDesencriptar = textoDesencriptar.replaceAll("enter", "e");
    textoDesencriptar = textoDesencriptar.replaceAll("imes", "i");
    textoDesencriptar = textoDesencriptar.replaceAll("ai", "a");
    textoDesencriptar = textoDesencriptar.replaceAll("ober", "o");
    textoDesencriptar = textoDesencriptar.replaceAll("ufat", "u");
    return textoDesencriptar;  
}




botonDesencriptar.addEventListener("click",mostrarDesencriptado);

