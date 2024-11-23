const numero = document.getElementById('numero');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

calcular.addEventListener('click', () => {
  const numeroValor = parseFloat(numero.value);
  if (isNaN(numeroValor) || numeroValor < 0) {
    resultado.textContent = 'Por favor, ingrese un número positivo';
  } else {
    let factorial = 1;
    for (let i = 1; i <= numeroValor; i++) {
      factorial *= i;
    }
    resultado.textContent = `El factorial de ${numeroValor} es: ${factorial}`;
  }
});