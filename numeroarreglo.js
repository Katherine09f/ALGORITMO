const arreglo = document.getElementById('arreglo').value.split(',');
const maximo = Math.max(...arreglo.map(Number));

const resultado = document.getElementById('resultado');
resultado.textContent = `El número máximo en el arreglo es: ${maximo}`;