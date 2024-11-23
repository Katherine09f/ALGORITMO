function verificarRespuestas() {
    // Pregunta 1
    const respuesta1 = document.querySelector('input[name="respuesta1"]:checked');
    const mensaje1 = document.getElementById('mensaje1');
    if (respuesta1) {
      if (respuesta1.value === '8') {
        mensaje1.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
      } else {
        mensaje1.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es A.</p>';
      }
    } else {
      mensaje1.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
    }

    // Pregunta 2
    const respuesta2 = document.querySelector('input[name="respuesta2"]:checked');
    const mensaje2 = document.getElementById('mensaje2');
    if (respuesta2) {
      if (respuesta2.value === 'c') {
        mensaje2.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
      } else {
        mensaje2.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es c.</p>';
      }
    } else {
      mensaje2.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
    }

    // Pregunta 3
    const respuesta3 = document.querySelector('input[name="respuesta3"]:checked');
    const mensaje3 = document.getElementById('mensaje3');
    if (respuesta3) {
      if (respuesta3.value === 'c') {
        mensaje3.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
      } else {
        mensaje3.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es c.</p>';
      }
    } else {
      mensaje3.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
    }


    // Pregunta 4
const respuesta4 = document.querySelector('input[name="respuesta4"]:checked');
const mensaje4 = document.getElementById('mensaje4');
if (respuesta4) {
if (respuesta4.value === 'a') {
  mensaje4.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje4.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el a.</p>';
}
} else {
mensaje4.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 5
const respuesta5 = document.querySelector('input[name="respuesta5"]:checked');
const mensaje5 = document.getElementById('mensaje5');
if (respuesta5) {
if (respuesta5.value === 'c') {
  mensaje5.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje5.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el c.</p>';
}
} else {
mensaje5.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 6
const respuesta6 = document.querySelector('input[name="respuesta6"]:checked');
const mensaje6 = document.getElementById('mensaje6');
if (respuesta6) {
if (respuesta6.value === 'c') {
  mensaje6.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje6.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el c.</p>';
}
} else {
mensaje6.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 7
const respuesta7 = document.querySelector('input[name="respuesta7"]:checked');
const mensaje7 = document.getElementById('mensaje7');
if (respuesta7) {
if (respuesta7.value === 'a') {
  mensaje7.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje7.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el a.</p>';
}
} else {
mensaje7.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 8
const respuesta8 = document.querySelector('input[name="respuesta8"]:checked');
const mensaje8 = document.getElementById('mensaje8');
if (respuesta8) {
if (respuesta8.value === 'b') {
  mensaje8.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje8.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el b.</p>';
}
} else {
mensaje8.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 9
const respuesta9 = document.querySelector('input[name="respuesta9"]:checked');
const mensaje9 = document.getElementById('mensaje9');
if (respuesta9) {
if (respuesta9.value === 'c') {
  mensaje9.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje9.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el valorCorrecto9.</p>';
}
} else {
mensaje9.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 10
const respuesta10 = document.querySelector('input[name="respuesta10"]:checked');
const mensaje10 = document.getElementById('mensaje10');
if (respuesta10) {
if (respuesta10.value === 'a') {
  mensaje10.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje10.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el a.</p>';
}
} else {
mensaje10.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 11
const respuesta11 = document.querySelector('input[name="respuesta11"]:checked');
const mensaje11 = document.getElementById('mensaje11');
if (respuesta11) {
if (respuesta11.value === 'c') {
  mensaje11.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje11.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el c.</p>';
}
} else {
mensaje11.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 12
const respuesta12 = document.querySelector('input[name="respuesta12"]:checked');
const mensaje12 = document.getElementById('mensaje12');
if (respuesta12) {
if (respuesta12.value === 'a') {
  mensaje12.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje12.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el c.</p>';
}
} else {
mensaje12.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 13
const respuesta13 = document.querySelector('input[name="respuesta13"]:checked');
const mensaje13 = document.getElementById('mensaje13');
if (respuesta13) {
if (respuesta13.value === 'a') {
  mensaje13.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje13.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el a.</p>';
}
} else {
mensaje13.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 14
const respuesta14 = document.querySelector('input[name="respuesta14"]:checked');
const mensaje14 = document.getElementById('mensaje14');
if (respuesta14) {
if (respuesta14.value === 'a') {
  mensaje14.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje14.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el a.</p>';
}
} else {
mensaje14.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 15
const respuesta15 = document.querySelector('input[name="respuesta15"]:checked');
const mensaje15 = document.getElementById('mensaje15');
if (respuesta15) {
if (respuesta15.value === 'a') {
  mensaje15.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje15.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el a.</p>';
}
} else {
mensaje15.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 16
const respuesta16 = document.querySelector('input[name="respuesta16"]:checked');
const mensaje16 = document.getElementById('mensaje16');
if (respuesta16) {
if (respuesta16.value === 'c') {
  mensaje16.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje16.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "c".</p>';
}
} else {
mensaje16.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 17
const respuesta17 = document.querySelector('input[name="respuesta17"]:checked');
const mensaje17 = document.getElementById('mensaje17');
if (respuesta17) {
if (respuesta17.value === 'b') {
  mensaje17.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje17.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
}
} else {
mensaje17.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 18
const respuesta18 = document.querySelector('input[name="respuesta18"]:checked');
const mensaje18 = document.getElementById('mensaje18');
if (respuesta18) {
if (respuesta18.value === 'c') {
  mensaje18.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje18.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "c".</p>';
}
} else {
mensaje18.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 19
const respuesta19 = document.querySelector('input[name="respuesta19"]:checked');
const mensaje19 = document.getElementById('mensaje19');
if (respuesta19) {
if (respuesta19.value === 'a') {
  mensaje19.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje19.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje19.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 20
const respuesta20 = document.querySelector('input[name="respuesta20"]:checked');
const mensaje20 = document.getElementById('mensaje20');
if (respuesta20) {
if (respuesta20.value === 'c') {
  mensaje20.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje20.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "c".</p>';
}
} else {
mensaje20.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 21
const respuesta21 = document.querySelector('input[name="respuesta21"]:checked');
const mensaje21 = document.getElementById('mensaje21');
if (respuesta21) {
if (respuesta21.value === 'c') {
  mensaje21.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje21.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "c".</p>';
}
} else {
mensaje21.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 22
const respuesta22 = document.querySelector('input[name="respuesta22"]:checked');
const mensaje22 = document.getElementById('mensaje22');
if (respuesta22) {
if (respuesta22.value === 'b') {
  mensaje22.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje22.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
}
} else {
mensaje22.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 23
const respuesta23 = document.querySelector('input[name="respuesta23"]:checked');
const mensaje23 = document.getElementById('mensaje23');
if (respuesta23) {
if (respuesta23.value === 'b') {
  mensaje23.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje23.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
}
} else {
mensaje23.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 24
const respuesta24 = document.querySelector('input[name="respuesta24"]:checked');
const mensaje24 = document.getElementById('mensaje24');
if (respuesta24) {
if (respuesta24.value === 'a') {
  mensaje24.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje24.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje24.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 25
const respuesta25 = document.querySelector('input[name="respuesta25"]:checked');
const mensaje25 = document.getElementById('mensaje25');
if (respuesta25) {
if (respuesta25.value === 'c') {
  mensaje25.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje25.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "c".</p>';
}
} else {
mensaje25.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 26
const respuesta26 = document.querySelector('input[name="respuesta26"]:checked');
const mensaje26 = document.getElementById('mensaje26');
if (respuesta26) {
if (respuesta26.value === 'a') {
  mensaje26.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje26.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje26.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 27
const respuesta27 = document.querySelector('input[name="respuesta27"]:checked');
const mensaje27 = document.getElementById('mensaje27');
if (respuesta27) {
if (respuesta27.value === 'a') {
  mensaje27.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje27.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje27.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 28
const respuesta28 = document.querySelector('input[name="respuesta28"]:checked');
const mensaje28 = document.getElementById('mensaje28');
if (respuesta28) {
if (respuesta28.value === 'b') {
  mensaje28.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje28.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
}
} else {
mensaje28.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 29
const respuesta29 = document.querySelector('input[name="respuesta29"]:checked');
const mensaje29 = document.getElementById('mensaje29');
if (respuesta29) {
if (respuesta29.value === 'c') {
  mensaje29.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje29.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "c".</p>';
}
} else {
mensaje29.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 30
const respuesta30 = document.querySelector('input[name="respuesta30"]:checked');
const mensaje30 = document.getElementById('mensaje30');
if (respuesta30) {
if (respuesta30.value === 'a') {
  mensaje30.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje30.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje30.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 31
const respuesta31 = document.querySelector('input[name="respuesta31"]:checked');
const mensaje31 = document.getElementById('mensaje31');
if (respuesta31) {
if (respuesta31.value === 'b') {
  mensaje31.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje31.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
}
} else {
mensaje31.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 32
const respuesta32 = document.querySelector('input[name="respuesta32"]:checked');
const mensaje32 = document.getElementById('mensaje32');
if (respuesta32) {
if (respuesta32.value === 'b') {
  mensaje32.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje32.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
}
} else {
mensaje32.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 33
  const respuesta33 = document.querySelector('input[name="respuesta33"]:checked');
  const mensaje33 = document.getElementById('mensaje33');
  if (respuesta33) {
    if (respuesta33.value === 'a') {
      mensaje33.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
    } else {
      mensaje33.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
    }
    } else {
    mensaje33.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
    }

// Pregunta 34
const respuesta34 = document.querySelector('input[name="respuesta34"]:checked');
const mensaje34 = document.getElementById('mensaje34');
if (respuesta34) {
if (respuesta34.value === 'a') {
  mensaje34.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje34.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje34.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 35
const respuesta35 = document.querySelector('input[name="respuesta35"]:checked');
const mensaje35 = document.getElementById('mensaje35');
if (respuesta35) {
if (respuesta35.value === 'a') {
  mensaje35.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje35.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje35.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 36
const respuesta36 = document.querySelector('input[name="respuesta36"]:checked');
const mensaje36 = document.getElementById('mensaje36');
if (respuesta36) {
if (respuesta36.value === 'a') {
  mensaje36.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje36.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje36.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 37
const respuesta37 = document.querySelector('input[name="respuesta37"]:checked');
const mensaje37 = document.getElementById('mensaje37');
if (respuesta37) {
if (respuesta37.value === 'a') {
  mensaje37.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje37.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje37.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 38
const respuesta38 = document.querySelector('input[name="respuesta38"]:checked');
const mensaje38 = document.getElementById('mensaje38');
if (respuesta38) {
if (respuesta38.value === 'a') {
  mensaje38.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje38.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje38.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 39
const respuesta39 = document.querySelector('input[name="respuesta39"]:checked');
const mensaje39 = document.getElementById('mensaje39');
if (respuesta39) {
if (respuesta39.value === 'a') {
  mensaje39.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje39.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje39.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 40
const respuesta40 = document.querySelector('input[name="respuesta40"]:checked');
const mensaje40 = document.getElementById('mensaje40');
if (respuesta40) {
if (respuesta40.value === 'a') {
  mensaje40.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje40.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje40.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

  }
  
