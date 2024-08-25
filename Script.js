const textAria = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".copiar");

function btnEncriptar(){
    if(textAria.value == ""){
        alert("No hay ningún mensaje que encriptar");
    }else{
        const textoEncriptado = encriptar(textAria.value);
        mensaje.value = textoEncriptado;
        textAria.value = "";
        mensaje.style.backgroundImage = "none";
    }
}

function btndesencriptar(){
    if(textAria.value == ""){
        alert("No hay ningún mensaje que desencriptar");
    }else{
        const textoEncriptado = desencriptar(textAria.value);
        mensaje.value = textoEncriptado;
        textAria.value = "";
        mensaje.style.backgroundImage = "none";
    }
}

btnCopiar.addEventListener('click', e =>{
    if(mensaje.value == ""){
        alert("No hay ningún mensaje que copiar");
    }else{
        textAria.value = mensaje.value;
        mensaje.value = "";
        mensaje.style.backgroundImage = "url('./Imagenes/Muñeco.png')";
    }

    })


function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "entrer"],["i", "imes"],["a", "ia"],["o", "ober"], ["u", "ufact"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "entrer"], ["i", "imes"], ["a", "ia"], ["o", "ober"], ["u", "ufact"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}
