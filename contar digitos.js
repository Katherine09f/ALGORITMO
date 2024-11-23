function contarDigitos() {
    const frase = document.getElementById("frase").value;
    const digitos = frase.match(/\d/g);  
    if (digitos === null) {
        document.getElementById("resultado").innerText = "No se encontraron dígitos en la frase.";
    } else {
        const cantidadDigitos = digitos.length;
        document.getElementById("resultado").innerText = "La frase contiene " + cantidadDigitos + " dígitos.";
    }
}
