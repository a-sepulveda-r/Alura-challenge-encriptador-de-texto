const ingresoTexto = document.querySelector(".inputText");
const mensajeSaliente = document.querySelector(".inputTextArea");
let cambios = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
let mensajesNoEncontrados = document.querySelector("#mensajesNoEncontrados");

function btnencriptar(){
    const textoEncriptado = encriptar(ingresoTexto.value);
    mensajeSaliente.value = textoEncriptado;
    document.getElementById("areaDesencriptada").style.backgroundImage = "none";
    document.getElementById("areaDesencriptada").style.back

}

function encriptar(textoParaEncriptar){
    for (let i = 0; i < cambios.length; i++) {
        if (textoParaEncriptar.includes(cambios[i][0])) {
            textoParaEncriptar = textoParaEncriptar.replaceAll(cambios[i][0], cambios[i][1])            
        }          
    }
    return textoParaEncriptar;

}

function btndecencriptar() {
    const textoDecencriptado = decencriptar(ingresoTexto.value);
    mensajeSaliente.value = textoDecencriptado;
  }

function decencriptar(textoParaDecencriptar){
    for (let i = 0; i < cambios.length; i++) {
        if (textoParaDecencriptar.includes(cambios[i][1])) {
            textoParaDecencriptar = textoParaDecencriptar.replaceAll(cambios[i][1], cambios[i][0])            
        }  
        
    }
    return textoParaDecencriptar;

}

function copiarTexto() {
    let copiar = mensajeSaliente.value;
    navigator.clipboard.writeText(copiar);
}

