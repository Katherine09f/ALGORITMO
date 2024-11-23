function encontrarMaximo() {
    // Obtiene el valor del campo de texto
    var numerosTexto = document.getElementById('numeros').value;

    // Divide la cadena en un arreglo usando comas
    var numerosString = numerosTexto.split(',');

    // Convierte cada elemento a número y valida
    var numerosArray = [];
    for (var i = 0; i < numerosString.length; i++) {
        var numero = parseFloat(numerosString[i].trim());
        if (numero === "" || numero !== numero) { // Validar si no es un número
            document.getElementById('resp').value = 'Por favor, ingresa solo números válidos.';
            return;
        }
        numerosArray.push(numero);
    }

    // Encuentra el máximo manualmente
    var maximo = numerosArray[0]; // Supongamos que el primero es el más grande
    for (var i = 1; i < numerosArray.length; i++) {
        if (numerosArray[i] > maximo) {
            maximo = numerosArray[i];
        }
    }

    // Muestra el resultado
    document.getElementById('resp').value = 'El número más grande es: ' + maximo;
}