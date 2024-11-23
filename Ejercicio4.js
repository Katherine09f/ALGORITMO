function calcularPromedio() {
    // Obtener los valores de los campos
    var numerosTexto = document.getElementById('numeros').value;
    var limiteTexto = document.getElementById('limite').value;

    // Convertir los números y el límite a formato adecuado
    var numeros = numerosTexto.split(',');  // Dividir la cadena por comas
    var limite = parseFloat(limiteTexto);   // Convertir el límite a número

    // Validar si el límite es un número
    if (isNaN(limite)) {
        alert("Por favor, ingresa un valor límite válido.");
        return;
    }

    // Inicializar variables para calcular el promedio
    var suma = 0;
    var contador = 0;

    // Recorrer los números y sumar los mayores al límite
    for (var i = 0; i < numeros.length; i++) {
        var num = parseFloat(numeros[i].trim());  // Convertir cada número a tipo número

        // Verificar si el número es mayor al límite
        if (num > limite) {
            suma += num;
            contador++;
        }
    }

    // Verificar si se encontraron números mayores al límite
    if (contador === 0) {
        document.getElementById('resp').value = "No hay números mayores al límite.";
    } else {
        // Calcular el promedio
        var promedio = suma / contador;
        document.getElementById('resp').value = "El promedio es: " + promedio.toFixed(2);
    }
}