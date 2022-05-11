const inputTexto= document.querySelector(".input-text");
const mensaje = document.querySelector(".textosalida");

function sinAcento(cadena){
    var matrixAcentos={
        "á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u",
        "à":"a", "è":"e", "ì":"i", "ò":"o", "ù":"u", "ñ":"n",
        "Á":"A", "É":"E", "Í":"I", "Ó":"O", "Ú":"U",
        "À":"A", "È":"E", "Ì":"I", "Ò":"O", "Ù":"U", "Ñ":"N"}
    var expr=/[áàéèíìóòúùñ]/ig;
    var cadenaSinAcento=cadena.replace(expr,function(e){return matrixAcentos[e]});
    return cadenaSinAcento;
}

function btnEncritar() {
    const textEncriptado1 = sinAcento(inputTexto.value);
	const textEncriptado = encriptar(textEncriptado1);
	mensaje.value= textEncriptado;
    document.getElementById("munheco").style.display="none";
    document.getElementById("mensaje1").style.display = "none";
    document.getElementById("mensaje2").style.display = "none";
    document.getElementById("botoncopiar").style.display = "inline";
}

function encriptar(StringParaEncriptar) {
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
	StringParaEncriptar=StringParaEncriptar.toLowerCase();
	for (let i = 0; i <matrizCodigo.length; i++) {
		if (StringParaEncriptar.includes(matrizCodigo[i][0])) {
			StringParaEncriptar=StringParaEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
		}
	}
	return StringParaEncriptar;
}

function btnDesencriptar() {
    const textoDesencriptado=desencriptar(inputTexto.value);
    mensaje.value= textoDesencriptado;
    
}

function desencriptar(StringParaDesencriptar) {
    let matrizCodigo = [["enter","e"], ["imes","i" ], ["ai","a" ], ["ober","o"],  ["ufat","u" ]]
    StringParaDesencriptar=StringParaDesencriptar.toLowerCase();
    for (let i=0; i<matrizCodigo.length; i++){
        if (StringParaDesencriptar.includes(matrizCodigo[i][0])) {
            StringParaDesencriptar=StringParaDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return StringParaDesencriptar;
}

function copiartext(){

    var textcopia = document.querySelector(".textosalida");
    textcopia.select();
    document.execCommand('Copy');
    alert("Texto copiado");
 }