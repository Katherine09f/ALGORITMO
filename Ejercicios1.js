function generarArreglo() {
    let arreglo = []; // Arreglo vacío
  
    // Llenar el arreglo con 10 números aleatorios
    for (let i = 0; i < 10; i++) {
      arreglo.push(Math.floor(Math.random() * 100) + 1); // Números entre 1 y 100
    }
  
    // Mostrar los números en el textarea
    document.getElementById("respuesta").value = arreglo.join("; ");
  }