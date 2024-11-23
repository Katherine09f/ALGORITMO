function encontrarMinimo() {
    // Obtener el texto ingresado por el usuario
    var numerosTexto = document.getElementById('numeros').value;
    
    // Convertir el texto en un arreglo de números
    var numeros = numerosTexto.split(',');  // Separar los números por coma
    
    // Inicializar una variable para almacenar el mínimo
    var minimo = Infinity;  // Empezamos con un valor muy alto para comparar

    // Recorrer el arreglo y encontrar el número más pequeño
    for (var i = 0; i < numeros.length; i++) {
        var num = parseFloat(numeros[i].trim());  // Convertir el número a tipo numérico
        
        // Comprobar si el número es menor que el mínimo actual
        if (num < minimo) {
            minimo = num;
        }
    }

    // Mostrar el resultado en el textarea
    document.getElementById('resultado').value = "El número más pequeño es: " + minimo;
}