var captar="";
function codificador() {
  captar = document.getElementById("teste").value;
  var rep1 = captar.replace(/a/gi, "ai");
  var rep2 = rep1.replace(/e/gi, "enter");
  var rep3 = rep2.replace(/i/gi, "imes");
  var rep4 = rep3.replace(/o/gi, "ober");
  var rep5 = rep3.replace(/u/gi, "ufat");

  document.getElementById("mensagem").innerHTML = rep5;
}

function decodificador() {
captar = document.getElementById("teste").value;
  var rep1 = captar.replace(/ai/gi, "a");
  var rep2 = rep1.replace(/enter/gi, "e");
  var rep3 = rep2.replace(/imes/gi, "i");
  var rep4 = rep3.replace(/ober/gi, "o");
  var rep5 = rep4.replace(/ufat/gi, "u");

  document.getElementById("mensagem").innerHTML = rep5;
}

function copy(){
  var resultado = captar

}