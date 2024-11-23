function calcularPromedio() {
    // Obtén los valores de las calificaciones
    var cal1 = document.getElementById('cal1').value;
    var cal2 = document.getElementById('cal2').value;
    var cal3 = document.getElementById('cal3').value;
    var cal4 = document.getElementById('cal4').value;
    var cal5 = document.getElementById('cal5').value;

    // Verifica si algún campo está vacío
    if (cal1 === "" || cal2 === "" || cal3 === "" || cal4 === "" || cal5 === "") {
        document.getElementById('promedio').value = 'Por favor, completa todas las calificaciones.';
        return;
    }

    // Convierte las calificaciones a números
    cal1 = parseFloat(cal1);
    cal2 = parseFloat(cal2);
    cal3 = parseFloat(cal3);
    cal4 = parseFloat(cal4);
    cal5 = parseFloat(cal5);

    // Calcula el promedio
    var promedio = (cal1 + cal2 + cal3 + cal4 + cal5) / 5;

    // Muestra el resultado en el área de texto
    document.getElementById('promedio').value = 'El promedio es: ' + promedio.toFixed(2);
}