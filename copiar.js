botonCopiar = document.querySelector("#copiar");


function copiar(){
    var contenido = document.querySelector("#resultado");

    contenido.select();
    document.execCommand('copy');
}

botonCopiar.addEventListener("click",copiar);
