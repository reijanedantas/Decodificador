
function btnCriptografar() {}

function criptografar(string) {
  const resultado = string
  .replaceAll("e", "enter")
  .replaceAll("i", "imes")
  .replaceAll("a", "ai")
  .replaceAll("o", "obter")
  .replaceAll("u", "ufat");

  return resultado;

}

let test = "Você conseguiu concluir o desafio";

console.log(criptografar (test));
