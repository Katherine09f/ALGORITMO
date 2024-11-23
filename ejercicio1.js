const opciones = document.querySelectorAll('.boton');
const respuesta = document.querySelector('.respuesta');

let correcta = 'd';
let respuestaCorrecta = 'La opción d es correcta';

opciones.forEach((opcion, indice) => {
  opcion.addEventListener('click', () => {
    const seleccionada = indice + 1;
    if (seleccionada === 1) {
      respuesta.textContent = 'La opción a es incorrecta';
    } else if (seleccionada === 2) {
      respuesta.textContent = 'La opción b es incorrecta';
    } else if (seleccionada === 3) {
      respuesta.textContent = 'La opción c es incorrecta';
    } else if (seleccionada === 4) {
      respuesta.textContent = respuestaCorrecta;
    }
  });
});