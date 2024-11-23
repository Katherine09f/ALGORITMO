function calcularTotal() {
    // Obtener el valor del subtotal, día, número de personas y si se paga con tarjeta
    let subtotal = parseFloat(document.getElementById("subtotal").value);
    let diaSemana = document.getElementById("diaSemana").value;
    let personas = parseInt(document.getElementById("personas").value);
    let pagoConTarjeta = document.getElementById("pagoConTarjeta").checked;

    // Validar si el subtotal y número de personas son válidos
    if (isNaN(subtotal) || subtotal <= 0) {
        alert("Por favor, ingresa un subtotal válido.");
        return;
    }
    if (isNaN(personas) || personas <= 0) {
        alert("Por favor, ingresa un número válido de personas.");
        return;
    }

    // Inicializar el descuento según el día de la semana
    let descuento = 0;

    switch (diaSemana) {
        case "lunes":
            descuento = 0.1; // 10% de descuento
            break;
        case "martes":
            descuento = 0.15; // 15% de descuento
            break;
        case "miércoles":
            descuento = 0.2; // 20% de descuento
            break;
        case "jueves":
            descuento = 0.25; // 25% de descuento
            break;
        case "viernes":
            descuento = 0.3; // 30% de descuento
            break;
        case "sábado":
            descuento = 0.05; // 5% de descuento
            break;
        case "domingo":
            descuento = 0; // No hay descuento
            break;
    }

    // Descuento adicional si hay más de 4 personas
    if (personas > 4) {
        descuento += 0.05; // 5% adicional
    }

    // Calcular el total con descuento
    let totalConDescuento = subtotal - (subtotal * descuento);

    // Si se paga con tarjeta, añadir un cargo del 2%
    if (pagoConTarjeta) {
        totalConDescuento += totalConDescuento * 0.02; // 2% de recargo por pagar con tarjeta
    }

    // Mostrar el resultado
    document.getElementById("total").innerText = `Total a pagar: $${totalConDescuento.toFixed(2)}`;
}
