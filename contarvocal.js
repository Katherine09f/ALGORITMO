const frase = document.getElementById('frase');
const contar = document.getElementById('contar');
const resultados = document.getElementById('resultados');

contar.addEventListener('click', () => {
  const texto = frase.value.toUpperCase();
  let vocales = 0;
  for (let i = 0; i < texto.length; i++) {
    if ('AEIOU'.includes(texto[i])) {
      vocales++;
    }
  }
  resultados.textContent = `El número de vocales en la frase es: ${vocales}`;
});