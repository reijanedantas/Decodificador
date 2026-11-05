const entrada = document.querySelector("#entrada");
const saida = document.querySelector("#saida");
const aviso = document.querySelector("#aviso");

const trocas = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "obter"],
  ["u", "ufat"],
];

function textoValido(texto) {
  return /^[a-z\s]*$/.test(texto);
}

function criptografar(texto) {
  return trocas.reduce((resultado, [letra, codigo]) => resultado.replaceAll(letra, codigo), texto);
}

function descriptografar(texto) {
  const ordem = [...trocas].reverse();
  return ordem.reduce((resultado, [letra, codigo]) => resultado.replaceAll(codigo, letra), texto);
}

function processar(transformar) {
  const texto = entrada.value;
  if (!textoValido(texto)) {
    aviso.textContent = "Use apenas letras minúsculas, sem acento, e espaços.";
    saida.value = "";
    return;
  }
  if (!texto.trim()) {
    aviso.textContent = "Digite um texto antes de continuar.";
    saida.value = "";
    return;
  }
  aviso.textContent = "";
  saida.value = transformar(texto);
}

document.querySelector("#criptografar").addEventListener("click", () => processar(criptografar));
document.querySelector("#descriptografar").addEventListener("click", () => processar(descriptografar));

document.querySelector("#copiar").addEventListener("click", async () => {
  if (!saida.value) {
    aviso.textContent = "Não há resultado para copiar.";
    return;
  }
  try {
    await navigator.clipboard.writeText(saida.value);
    aviso.textContent = "Resultado copiado.";
  } catch (erro) {
    saida.select();
    aviso.textContent = "Selecione o resultado e copie manualmente.";
  }
});
