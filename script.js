//Camptura en constates el texto que dijite el usuario y 
//el texto que se encriptará
const textArea= document.querySelector(".text-area");
const mensaje= document.querySelector(".mensaje");

// LLAVES DE ENCRIPTACIÓN
//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`

// llamado de la función encriptar
function btnEncriptar() {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value= textoEncriptado
        textArea.value="";
        mensaje.style.backgroundImage= "none"
    }

// función de encriptación del texto
function encriptar(stringEncriptada){
    // Declaración de la matriz de encriptación
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada= stringEncriptada.toLowerCase()

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
             stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
     return stringEncriptada    
}

//llamado a la funcion desencriptar
function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value= textoEncriptado
    textArea.value="";
}

// función de desencriptar texto
function desencriptar(stringDesencriptada)
{
    // Declaración de la matriz de encriptación
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada= stringDesencriptada.toLowerCase()

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
     return stringDesencriptada
}

//llamado a la funcion desencriptar
function btncopiado() {
    const textoEncriptado = copiado(mensaje.value)
    textArea.value= textoEncriptado
    mensaje.value="";
}


// función de desencriptar texto
function copiado(stringCopiado)
{
    // Declaración de la matriz de encriptación
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringCopiado= stringCopiado.toLowerCase()

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringCopiado.includes(matrizCodigo[i][1])){
            stringCopiado = stringCopiado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
     return stringCopiado
}
