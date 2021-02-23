function espalindromo(cadena) {
  const textoNormalizado = cadena.toLowerCase()
    .replace(/[.,:;()_?¿!¡-\s]/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (textoNormalizado.normalize() === invertirTexto(textoNormalizado).normalize()) {
    return true;
  }
  return false;
}

const invertirTexto = (texto) => texto.split("").reverse().join("");

console.log(espalindromo("Ababa"));
console.log(espalindromo("Patata"));
console.log(espalindromo("Reconocer"));
console.log(espalindromo("Avioneta"));
console.log(espalindromo("Sometemos"));
