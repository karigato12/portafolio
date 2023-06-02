const original = document.querySelector(".campo-encriptador");
const convertido = document.querySelector(".mensaje");



function chkminuscula(){
    let txtvalido = document.querySelector(".campo-encriptador").value;
    let validador = txtvalido.match(/^[a-z- ]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function btnEncriptar(){
    if(!chkminuscula()) {
        const stringcoded = codificar(original.value)
        convertido.value = stringcoded ;
        convertido.style.backgroundImage = "none"
    
    }
}

function codificar(stringcoded){

        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringcoded = original.value

        for(let i = 0; i < matrizCodigo.length; i++){
            if(stringcoded.includes(matrizCodigo[i][0])){
                stringcoded = stringcoded.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    
            }
    
        }
        return stringcoded

}

function btnDesencriptar(){
    if(!chkminuscula()) {
        const stringcoded = decodificar(original.value)
        convertido.value = stringcoded ;
        convertido.style.backgroundImage = "none"
    
    }
}

function decodificar(stringcoded){

        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringcoded = original.value

        for(let i = 0; i < matrizCodigo.length; i++){
            if(stringcoded.includes(matrizCodigo[i][1])){
                stringcoded = stringcoded.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    
            }
    
        }
        return stringcoded

}

function btnCopiar() {
    
    var content = document.getElementById("muneco");
    
    content.select();
    document.execCommand('copy');

    alert("Copied!");
}


