function esNumeroPerfecto(num) {
    // Verificamos que el número sea mayor que 1, ya que no existen números perfectos menores que 2
    if (num <= 1) return false;
  
    let sumaDivisores = 0;
  
    // Iteramos desde 1 hasta la mitad del número para encontrar sus divisores
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sumaDivisores += i; // Agregamos el divisor a la suma
        }
    }
  
    // Verificamos si la suma de los divisores es igual al número original
    return sumaDivisores === num;
  }
  function calcularTotalAPagar(producto, cantidad) {
    const precioTelevisor = 500;
    const precioRefrigeradora = 800;
    let subtotal = 0;
  
    if (producto === "televisor") {
        subtotal = cantidad * precioTelevisor;
        if (cantidad >= 2) {
            subtotal *= 0.90; // Descuento del 10% para 2 o más televisores
        }
    } else if (producto === "refrigeradora") {
        subtotal = cantidad * precioRefrigeradora;
        if (cantidad > 3) {
            subtotal *= 0.85; // Descuento del 15% para más de 3 refrigeradoras
        }
    } else {
        return "Producto no válido";
    }
  
    if (subtotal > 2000) {
        subtotal *= 0.95; // Descuento adicional del 5% si supera $2,000
    }
  
    return subtotal.toFixed(2);
  }
  
  function calcular() {
    const producto = document.getElementById("producto").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
  
    if (!cantidad || cantidad <= 0) {
        alert("Por favor, ingrese una cantidad válida.");
        return;
    }
  
    const total = calcularTotalAPagar(producto, cantidad);
    document.getElementById("resultado").textContent = total;
  }
  function imprimirDivisibles() {
    let sumaPares = 0;
    let sumaImpares = 0;
    let numerosDivisibles = [];
  
    for (let i = 1; i <= 50; i++) {
        // Verificar si el número es divisible por 3 y 7
        if (i % 3 === 0 && i % 7 === 0) {
            numerosDivisibles.push(i);
  
            // Verificar si el número es par o impar
            if (i % 2 === 0) {
                sumaPares += i;
            } else {
                sumaImpares += i;
            }
        }
    }
  
    // Mostrar los resultados en el HTML
    document.getElementById("resultado").textContent = numerosDivisibles.join(", ");
    document.getElementById("sumaPares").textContent = sumaPares;
    document.getElementById("sumaImpares").textContent = sumaImpares;
  }
  function sumarDigitos() {
    // Obtener el valor del número
    const numero = document.getElementById("numero").value;
    
    // Convertir el número a un arreglo de dígitos
    const digitos = Array.from(numero).map(Number);
    
    // Calcular la suma de los dígitos
    const suma = digitos.reduce((acc, digito) => acc + digito, 0);
    
    // Obtener el contenedor de resultado
    const resultadoDiv = document.getElementById("resultado");
    
    // Limpiar el contenedor de resultado antes de mostrar nuevos datos
    resultadoDiv.innerHTML = "";
  
    // Crear una tarjeta para cada dígito
    digitos.forEach(digito => {
        const tarjeta = document.createElement("div");
        tarjeta.textContent = `Dígito: ${digito}`;
        tarjeta.style.backgroundColor = "#a3d5ff";
        tarjeta.style.border = "1px solid #000";
        tarjeta.style.padding = "10px";
        tarjeta.style.margin = "5px";
        tarjeta.style.display = "inline-block";
        tarjeta.style.fontWeight = "bold";
        resultadoDiv.appendChild(tarjeta);
    });
  
    // Crear una tarjeta para la suma
    const tarjetaSuma = document.createElement("div");
    tarjetaSuma.textContent = `Suma de dígitos: ${suma}`;
    tarjetaSuma.style.backgroundColor = "#ffd5a3";
    tarjetaSuma.style.border = "1px solid #000";
    tarjetaSuma.style.padding = "10px";
    tarjetaSuma.style.margin = "5px";
    tarjetaSuma.style.display = "inline-block";
    tarjetaSuma.style.fontWeight = "bold";
    resultadoDiv.appendChild(tarjetaSuma);
  }
  function sumarDigitos() {
      // Obtener el valor del número
      const numero = document.getElementById("numero").value;
      
      // Convertir el número a un arreglo de dígitos
      const digitos = Array.from(numero).map(Number);
      
      // Calcular la suma de los dígitos
      const suma = digitos.reduce((acc, digito) => acc + digito, 0);
      
      // Obtener el contenedor de resultado
      const resultadoDiv = document.getElementById("resultado");
      
      // Limpiar el contenedor de resultado antes de mostrar nuevos datos
      resultadoDiv.innerHTML = "";
  
      // Crear una tarjeta para cada dígito
      digitos.forEach(digito => {
          const tarjeta = document.createElement("div");
          tarjeta.textContent = `Dígito: ${digito}`;
          tarjeta.style.backgroundColor = "#a3d5ff";
          tarjeta.style.border = "1px solid #000";
          tarjeta.style.padding = "10px";
          tarjeta.style.margin = "5px";
          tarjeta.style.display = "inline-block";
          tarjeta.style.fontWeight = "bold";
          resultadoDiv.appendChild(tarjeta);
      });
  
      // Crear una tarjeta para la suma
      const tarjetaSuma = document.createElement("div");
      tarjetaSuma.textContent = `Suma de dígitos: ${suma}`;
      tarjetaSuma.style.backgroundColor = "#ffd5a3";
      tarjetaSuma.style.border = "1px solid #000";
      tarjetaSuma.style.padding = "10px";
      tarjetaSuma.style.margin = "5px";
      tarjetaSuma.style.display = "inline-block";
      tarjetaSuma.style.fontWeight = "bold";
      resultadoDiv.appendChild(tarjetaSuma);
  }
  function mostrarDivisores() {
      // Obtener el valor del número
      const numero = parseInt(document.getElementById("numero").value);
      
      // Verificar si el número es válido
      if (!numero || numero <= 1) {
          alert("Por favor, ingresa un número mayor que 1.");
          return;
      }
  
      // Calcular los divisores del número (excluyendo el propio número)
      const divisores = [];
      for (let i = 1; i < numero; i++) {
          if (numero % i === 0) {
              divisores.push(i);
          }
      }
  
      // Obtener el contenedor de resultado
      const resultadoDiv = document.getElementById("resultado");
      
      // Limpiar el contenedor de resultado antes de mostrar nuevos datos
      resultadoDiv.innerHTML = "";
  
      // Si no hay divisores, mostrar un mensaje
      if (divisores.length === 0) {
          const mensaje = document.createElement("div");
          mensaje.textContent = `El número ${numero} no tiene divisores (excepto él mismo).`;
          mensaje.style.backgroundColor = "#ffb3b3";
          mensaje.style.borderRadius = "12px";
          mensaje.style.padding = "20px";
          mensaje.style.fontWeight = "bold";
          mensaje.style.fontSize = "18px";
          mensaje.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
          mensaje.style.color = "#333";
          resultadoDiv.appendChild(mensaje);
      } else {
          // Crear una tarjeta para cada divisor
          divisores.forEach(divisor => {
              const tarjeta = document.createElement("div");
              tarjeta.classList.add("tarjeta");
              tarjeta.textContent = `Divisor: ${divisor}`;
              resultadoDiv.appendChild(tarjeta);
          });
      }
  }
  function calcularPromedioPares() {
      // Generar 10 números aleatorios y almacenarlos en un arreglo
      const numeros = [];
      for (let i = 0; i < 10; i++) {
          numeros.push(Math.floor(Math.random() * 100) + 1); // Números entre 1 y 100
      }
  
      // Filtrar los números pares
      const numerosPares = numeros.filter(num => num % 2 === 0);
  
      // Calcular el promedio de los números pares
      let promedio = 0;
      if (numerosPares.length > 0) {
          promedio = numerosPares.reduce((sum, num) => sum + num, 0) / numerosPares.length;
      }
  
      // Obtener el contenedor de resultados
      const resultadoDiv = document.getElementById("resultado");
      
      // Limpiar cualquier contenido previo
      resultadoDiv.innerHTML = "";
  
      // Mostrar los números generados en una tarjeta
      let tarjetaNumeros = document.createElement("div");
      tarjetaNumeros.style.backgroundColor = "#fff9c4";
      tarjetaNumeros.style.borderRadius = "12px";
      tarjetaNumeros.style.padding = "20px";
      tarjetaNumeros.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      tarjetaNumeros.style.fontWeight = "bold";
      tarjetaNumeros.style.color = "#333";
      tarjetaNumeros.style.fontSize = "18px";
      tarjetaNumeros.style.marginBottom = "20px";
      tarjetaNumeros.textContent = "Números Generados: " + numeros.join(", ");
      resultadoDiv.appendChild(tarjetaNumeros);
  
      // Mostrar los números pares en una tarjeta
      let tarjetaPares = document.createElement("div");
      tarjetaPares.style.backgroundColor = "#fff9c4";
      tarjetaPares.style.borderRadius = "12px";
      tarjetaPares.style.padding = "20px";
      tarjetaPares.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      tarjetaPares.style.fontWeight = "bold";
      tarjetaPares.style.color = "#333";
      tarjetaPares.style.fontSize = "18px";
      tarjetaPares.style.marginBottom = "20px";
      tarjetaPares.textContent = "Números Pares: " + numerosPares.join(", ");
      resultadoDiv.appendChild(tarjetaPares);
  
      // Mostrar el promedio en una tarjeta
      let tarjetaPromedio = document.createElement("div");
      tarjetaPromedio.style.backgroundColor = "#fff9c4";
      tarjetaPromedio.style.borderRadius = "12px";
      tarjetaPromedio.style.padding = "20px";
      tarjetaPromedio.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      tarjetaPromedio.style.fontWeight = "bold";
      tarjetaPromedio.style.color = "#333";
      tarjetaPromedio.style.fontSize = "18px";
      tarjetaPromedio.textContent = `Promedio de Números Pares: ${promedio.toFixed(2)}`;
      resultadoDiv.appendChild(tarjetaPromedio);
  }
  function calcularTotal() {
      let subtotal = parseFloat(document.getElementById("subtotal").value);
      let diaSemana = document.getElementById("diaSemana").value;
      let personas = parseInt(document.getElementById("personas").value);
      let pagoConTarjeta = document.getElementById("pagoConTarjeta").checked;
  
      if (isNaN(subtotal) || isNaN(personas) || subtotal <= 0 || personas <= 0) {
          alert("Por favor ingresa todos los valores correctamente.");
          return;
      }
  
      let descuento = 0;
  
      // Descuento según el día de la semana
      if (diaSemana === "lunes" || diaSemana === "martes") {
          descuento = 0.1; // 10% de descuento
      } else if (diaSemana === "miércoles" || diaSemana === "jueves") {
          descuento = 0.15; // 15% de descuento
      } else if (diaSemana === "viernes" || diaSemana === "sábado") {
          descuento = 0.2; // 20% de descuento
      }
  
      let total = subtotal - (subtotal * descuento);
  
      // Si es pago con tarjeta, aplicar un 5% de recargo
      if (pagoConTarjeta) {
          total += total * 0.05;
      }
  
      // Dividir entre el número de personas
      let totalPorPersona = total / personas;
  
      // Mostrar el resultado
      document.getElementById("total").innerText = `Total a pagar: $${total.toFixed(2)} (Por persona: $${totalPorPersona.toFixed(2)})`;
  }
  function contarDigitos() {
      let frase = document.getElementById("frase").value;
      let contador = 0;
  
      // Recorrer cada carácter de la frase
      for (let i = 0; i < frase.length; i++) {
          if (!isNaN(frase[i]) && frase[i] !== ' ') { // Verificar si el carácter es un dígito
              contador++;
          }
      }
  
      // Mostrar el resultado
      let resultado = `${contador} dígitos tiene la frase.`;
      document.getElementById("resultado").innerHTML = resultado;
  }
  function contarPalabras() {
      // Obtener la frase ingresada por el usuario
      let frase = document.getElementById("frase").value;
      
      // Separar la frase en palabras usando el espacio como delimitador
      let palabras = frase.split(' ');
  
      // Calcular el número de palabras
      let numPalabras = palabras.length;
  
      // Mostrar el resultado
      document.getElementById("resultadoFrase").innerText = `${numPalabras} palabras tiene la frase.`;
  }
  function mostrarDivisibles() {
      // Variables para las sumas
      let sumaPares = 0;
      let sumaImpares = 0;
  
      // Array para almacenar los números divisibles por 3 y 7
      let numerosDivisibles = [];
  
      // Bucle para recorrer los números del 1 al 50
      for (let i = 1; i <= 50; i++) {
          if (i % 3 === 0 && i % 7 === 0) {  // Verificar divisibilidad por 3 y 7
              numerosDivisibles.push(i);
              // Comprobar si el número es par o impar y sumarlo a la respectiva variable
              if (i % 2 === 0) {
                  sumaPares += i;
              } else {
                  sumaImpares += i;
              }
          }
      }
  
      // Mostrar los resultados
      document.getElementById("numeros").innerText = `Números divisibles por 3 y 7: ${numerosDivisibles.join(", ")}`;
      document.getElementById("sumaPares").innerText = `Suma de los números pares: ${sumaPares}`;
      document.getElementById("sumaImpares").innerText = `Suma de los números impares: ${sumaImpares}`;
  }