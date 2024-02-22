
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

function descriptografar(string) {
  const resultado = string
  .replaceAll("enter", "e")
  .replaceAll("imes", "i")
  .replaceAll("ai", "a")
  .replaceAll("obter", "o")
  .replaceAll("ufat","u");

  return resultado;

}

