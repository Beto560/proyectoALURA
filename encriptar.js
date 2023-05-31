
function encriptar(){
    var mensaje= document.querySelector("#mensaje") .value;
    var titulomensaje = document.querySelector("#titulomensaje");
    var salida= document.querySelector("#salida");
    var muñeco= document.querySelector("#muñeco");

    var mensajecifrado = mensaje
         
    .replace(/e/gi, "enter")
    .replace(/i/gi, "ines")
    .replace(/o/gi, "ober")    
    .replace(/a/gi, "ai")
    .replace(/u/gi, "ufat")             
    
 //return mensajecifrado;
//}   
if (mensaje.match(/[^A-Z0-9áéíóúÁÉÍÓÚ\s]/g) && mensaje.length !=0) {
document.getElementById("salida").value=mensajecifrado;   
titulomensaje.textContent ="Titulo encriptado con exito";
muñeco.src ="./imagenes/people.png";
//muñeco.style.display="none"//

}
else{
    alert("Debes ingresar algun texto permitido");
    titulomensaje.textContent ="Ningun mensaje fue encontrado";
}
}

function desencriptar(){
    var mensaje= document.querySelector("#mensaje") .value;
    var mensajecifrado = mensaje
    .replace(/enter/gi, "e")
    .replace(/ines/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")
    .replace(/ai/gi, "a");

//return mensajecifrado;
//}
if (mensaje.length !=0 ) {
        document.getElementById("salida").value=mensajecifrado;
        titulomensaje.textContent ="Titulo desencriptado con exito";

}
else{
    alert("Debes ingresar algun texto");
    titulomensaje.textContent ="Ningun mensaje fue encontrado";
}
}
/*function verificar(){
    let mensaje=document.querySelector("#mensaje").value;
    let mensajecifrado=mensaje.match(/[^A-Z0-9\s]/g);
    if(mensajecifrado){
    return true;}
return false;
}
function ejecutar (){
    if (verificar==0 ) {
        document.getElementById("salida").value=mensajecifrado;   
        titulomensaje.textContent ="Titulo encriptado con exito";
        muñeco.src ="./imagenes/people.png";
    }
    else{
        alert("Debes ingresar algun texto");
        titulomensaje.textContent ="Ningun mensaje fue encontrado";
}
}*/
