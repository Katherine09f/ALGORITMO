//Solicita tres números y determina cuál es el mayor de ellos
//num1,num2,num3
//comparar los numero
//determinar cual es el mayor
// Mostrar resultado
Funcion encontrarelmayor
	Definir num1, num2, num3 Como entero
	Definir mayor Como Entero
	Escribir "ingresar el primer num1"
	Leer num1
	Escribir "ingresar el segundo num2"
	leer num2
	Escribir "ingresar el tercer num3"
	Leer num3
	mayor=1
	Si num1> num2 y num1> num3 Entonces 
		Escribir "el mayor es:", num1
	SiNo
		
		Si  num2>num1 y num2>num3 Entonces
			Escribir "el mayor es:", num2
		SiNo
			Escribir "el mayor es:", num3
		FinSi
	finsi
FinFuncion

//Edad mínima para votar: Pregunta la edad del usuario y verifica si es elegible para 
//votar (18 años o más).
//solicitar la edad del usuario
//verificar si tiene la edad suficiente para votar
Funcion votacionessermayordeedad
	Definir edad Como Entero
	Escribir "ingresar tu edad"
	leer edad
	Si edad>= 18 Entonces
		Escribir "si,tengo la edad sufciente para votar"
	SiNo
		Escribir "no, no tengo la edad sufciente para votar"
	Fin Si
	
FinFuncion

//Dado dos números verificar si el primero es múltiplo del segundo
//solicitar el primer numero y el segundo numero
//verificar que el segundo numero no sea cero
//verificar si el primer numero no es multiplo del segundo 
//mostra resultado
Funcion VerificacióndeMúltiplosentreDosNúmeros
	Definir num1,num2 Como Entero
	Escribir "ingresa el primer numero"
	leer num1
	Escribir "ingresa el segundo numero"
	Leer num2
	Si num1 % num2 == 0 Entonces
		Escribir "El primer número es múltiplo del segundo."
	SiNo
		Escribir "El primer número no es múltiplo del segundo."
	Fin Si
FinFuncion

//Número positivo, negativo o cero: Pide al usuario que ingrese un número y muestra 
//pedir al usuario que ingrese un numero
//verificar el numero es positivo,negativo o cero
//mostrar resultado
Funcion numeropositivonegativo
	Definir numero Como Real
	Escribir "ingresa un numero"
	Leer numero
	Si numero> 0 Entonces
        Escribir "El número es positivo."
    Sino
        Si numero < 0 Entonces
            Escribir "El número es negativo."
        Sino
            Escribir "El número es cero."
        Fin Si
    Fin Si
FinFuncion

//Año bisiesto: Solicita al usuario un año y determina si es un año bisiesto o no. Un 
//año bisiesto es divisible por 4, pero no por 100, a menos que también sea divisible por 400 
//solicita al usuario que ingrese un año
//ver si el año es bisiesto
//mostrar resultados
Funcion añobisiesto
	Definir año Como Entero
	Escribir "ingresa el año"
	leer año
	Si año%4==0 entonces 
		si año%100==0 o año%400==0
			Escribir "El año " año ", no es un año bisiesto" 
		sino
			Escribir "El año " año ", es un año bisiesto"
		FinSi
    SiNo
        Escribir "El año ", año, ", es un año bisiesto."
    FinSi
FinFuncion


//Pide al usuario que ingrese su mes y día de nacimiento.
Funcion DeterminarSignoZodiacal
    // Definimos las variables necesarias
    Definir mes Como Entero     
    Definir dia Como Entero      
    Definir signo Como Texto      
    // Solicitar al usuario que ingrese su mes de nacimiento
    Escribir "Ingrese su mes de nacimiento (1-12):"
    Leer mes
	
    // Solicitar al usuario que ingrese su día de nacimiento
    Escribir "Ingrese su día de nacimiento (1-31):"
    Leer dia
	
    // Determinar el signo zodiacal basado en el mes y el día
    Si (mes = 1 Y dia >= 20) O (mes = 2 Y dia <= 18) Entonces
        signo = "Acuario"          // Rango de fechas para Acuario
    Sino Si (mes = 2 Y dia >= 19) O (mes = 3 Y dia <= 20) Entonces
			signo = "Piscis"           // Rango de fechas para Piscis
		Sino Si (mes = 3 Y dia >= 21) O (mes = 4 Y dia <= 19) Entonces
				signo = "Aries"            // Rango de fechas para Aries
			Sino Si (mes = 4 Y dia >= 20) O (mes = 5 Y dia <= 20) Entonces
					signo = "Tauro"            // Rango de fechas para Tauro
				Sino Si (mes = 5 Y dia >= 21) O (mes = 6 Y dia <= 20) Entonces
						signo = "Géminis"          // Rango de fechas para Géminis
					Sino Si (mes = 6 Y dia >= 21) O (mes = 7 Y dia <= 22) Entonces
							signo = "Cáncer"           // Rango de fechas para Cáncer
						Sino Si (mes = 7 Y dia >= 23) O (mes = 8 Y dia <= 22) Entonces
								signo = "Leo"              // Rango de fechas para Leo
							Sino Si (mes = 8 Y dia >= 23) O (mes = 9 Y dia <= 22) Entonces
									signo = "Virgo"            // Rango de fechas para Virgo
								Sino Si (mes = 9 Y dia >= 23) O (mes = 10 Y dia <= 22) Entonces
										signo = "Libra"            // Rango de fechas para Libra
									Sino Si (mes = 10 Y dia >= 23) O (mes = 11 Y dia <= 21) Entonces
											signo = "Escorpio"         // Rango de fechas para Escorpio
										Sino Si (mes = 11 Y dia >= 22) O (mes = 12 Y dia <= 21) Entonces
												signo = "Sagitario"        // Rango de fechas para Sagitario
											Sino Si (mes = 12 Y dia >= 22) O (mes = 1 Y dia <= 19) Entonces
													signo = "Capricornio"      
												Fin Si
											fin si 
										fin si
									fin si
								fin si
							fin si
						fin si
					fin si
				fin si
			fin si
		fin si
	fin si 
	Escribir "Su signo zodiacal es: ", signo
FinFuncion

//Solicita al usuario que ingrese un número de día del mes (por ejemplo, del 1 al 31) 
//y verifica si ese día pertenece a la primera quincena (días 1-15) o
//a la segunda quincena (días 16-31)
funcion Quincenadeldia
	Definir dia Como Entero
	Escribir "Ingrese un número de día del mes (1-31);"
    Leer dia
	
    Si dia < 1 O dia > 31 Entonces
        Escribir "Número de día inválido,Debe estar entre 1 y 31"
    Sino
        Si dia >= 1 Y dia <= 15 Entonces
            Escribir "El día ", dia, " pertenece a la primera quincena"
        Sino
            Escribir "El día ", dia, " pertenece a la segunda quincena"
        FinSi
    FinSi
FinFuncion


//Pide al usuario que ingrese un número del 1 al 7,
//donde 1 representa el domingo, 2 el lunes, 3 el martes, y así sucesivamente.
//mostrar el nombre del día de la semana correspondiente al número ingresado
funcion Diasdelasemana
	definir num Como Entero
	Escribir "Ingrese un numero del 1 al 7"
	Leer num 
	segun num Hacer
		1:Escribir"Domingo" 
		2:Escribir"Lunes"
		3:Escribir"Martes"
		4:Escribir"Miercoles"
		5:Escribir"Jueves"
		6:Escribir"Viernes"
		7:Escribir"Sabado"
		De Otro Modo:
			Escribir"Numuero invalido;ingresa un numero entre 1 y 7"
			
	FinSegun
FinFuncion


//Crea un programa que permita a un usuario ingresar el precio de un artículo y un porcentaje de descuento.
//El programa debe calcular y mostrar el precio final 
//después del descuento aplicando el 15% del IVA
funcion Descuentoconiva
	definir precio_original,porcentaje_descuento,descuento,precio_con_descuento,iva_calculado,precio_final Como Real
	iva <-precio_con_descuento*15 
	Escribir"Ingrese el precio del articulo"
	leer precio_original
	Escribir"Ingrese el porcentaje de descuento"
	leer porcentaje_descuento
	descuento <- precio_original*porcentaje_descuento/100
	precio_con_descuento<-precio_original - descuento
	iva_calculado<-precio_con_descuento*iva/100
	precio_final<-precio_con_descuento+iva_calculado
	Escribir"El precio con descuento (sin iva) es",precio_con_descuento
	Escribir"El precio final (con iva) es",precio_final
FinProceso
FinFuncion

//Pide al usuario que ingrese su salario actual y el porcentaje de aumento que recibirá.
//Calcula y muestra el nuevo salario después del aumento
funcion Salario
	Definir sueldoActual, porcentajeAumento, nuevoSueldo Como Real
	Escribir "Ingrese su salario actual:"
	Leer sueldoActual
	Escribir "Ingrese el porcentaje de aumento (sin el %)"
	Leer porcentajeAumento
	nuevoSueldo = sueldoActual + (sueldoActual * (porcentajeAumento / 100))
	Escribir "Su nuevo salario después del aumento es ", nuevoSueldo
Fin Proceso
FinFuncion

///////////////Ejercicio 11/////////////////////////////////////////////////////////////////////////////////////////
//Calculadora de compra con múltiples artículos:
//Permite al usuario ingresar el precio y la cantidad de varios artículos que está comprando. 
//Calcula el total de la compra y aplica un descuento del 10% si el total es mayor a $100.
////////BOSQUEJO/////////////////////////////////////////////////////////////////////////////////////////
//ENT:leer (prec,cant,seguir)
//
//PROC:Repetir
//Escribir "Ingrese los precios de los articulo por favor"
//leer prec 
//Escribir "Ingrese la cantidad de los articulos por favor"
//Leer cant 
//total_art=prec*cant
//total_comp=total_art + total_comp
//Escribir "¿Desea seguir ingresando articulos? (n si su respuesta es no,s si su respuesta es si)"
//leer seguir 
//Hasta Que seguir="N" o seguir="n"
//
//SAL:Mostrar el total de compra con descuento o sin descuento dependiendo de el precio total
/////////////////////////////////////////////////////////////////////////////////////////////////////////
Funcion Calculadora_de_articulos
	Definir prec,total_art,total_comp,total_descuento Como Real
	Definir cant Como Entero
	Definir seguir Como Caracter
	total_comp=0
	Repetir
		Escribir "Ingrese los precios de los articulo por favor"
		leer prec 
		Escribir "Ingrese la cantidad de los articulos por favor"
		Leer cant 
		total_art=prec*cant
		total_comp=total_art + total_comp
		
		Escribir "¿Desea seguir ingresando articulos? (n si su respuesta es no,s si su respuesta es si)"
		leer seguir 
	Hasta Que seguir="N" o seguir="n"
	
	Escribir "Su precio total es de: " total_comp
	
	Si total_comp>100 Entonces
		total_descuento=total_comp-0.10*total_comp
		Escribir "Su precio con el 10% de descuento es de: " total_descuento
	SiNo
		Escribir "Su precio total es de: " total_comp
	Fin Si
	
FinFuncion

///////////////EJERCICIO 12/////////////////////////////////////////////////////////////////////////////////////////
//Calculadora de impuestos sobre el salario: 
//Solicita al usuario que ingrese su salario anual y calcula el impuesto sobre la renta según las siguientes tasas: 
//Hasta $10,000: 5% De $10,001 a $20,000: 10%;  más de $20,000: 15%
/////////BOSQUEJO///////////////////////////////////////////////////////////////////////////
//ENT:leer (salario_anual)
//
//PROC:Si salario_anual <= 10000 Entonces
//impuesto=salario_anual * 0.05
//Sino 
//	Si salario_anual > 10000 Y salario_anual <= 20000 Entonces
//		impuesto=(10000 * 0.05) + ((salario_anual - 10000) * 0.10)
//	Sino
//		impuesto=(10000 * 0.05) + (10000 * 0.10) + ((salario_anual - 20000) * 0.15)
//	FinSi
//
//SALIDA: Escribir: el impuesto sobre su salario es, el impuesto
///////////////////////////////////////////////////////////////////////////////////////
Funcion calculadora_impuestos_salario
	Definir salario_anual, impuesto Como Real
	Escribir "Ingrese su salario anual:"
	Leer salario_anual
	Si salario_anual <= 10000 Entonces
		impuesto=salario_anual * 0.05
	Sino 
		Si salario_anual > 10000 Y salario_anual <= 20000 Entonces
			impuesto=(10000 * 0.05) + ((salario_anual - 10000) * 0.10)
		Sino
			impuesto=(10000 * 0.05) + (10000 * 0.10) + ((salario_anual - 20000) * 0.15)
		FinSi
	FinSi
	Escribir "El impuesto sobre su salario es: " impuesto
FinFuncion

////////////////EJERCICIO 13////////////////////////////////////////////////////////////////////////////////////////
//Pregunta al usuario cuántos años ha estado trabajando en una empresa y calcula su bono de antigüedad. 
//Si ha trabajado más de 5 años, otorga un bono del 5% sobre su salario.
//////////////BOSQUEJO/////////////////////////////////////////////////////////////////////////////////////////////
//ENT:Leer (salario anual y años trabajando)
//
//PROC:Si años_trabajados > 5 Entonces
//bono_antiguedad <- salario_anual * 0.05
//salario_con_bono <- salario_anual + bono_antiguedad
//Escribir "Se le otorga un bono de antigüedad del 5%. El bono es: $", bono_antiguedad
//Escribir "Su salario total con el bono de antigüedad es: $", salario_con_bono
//SiNo
//
//SALIDA:Escribir "No tiene derecho a un bono de antigüedad."
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Funcion Años_de_trabajo
	Definir salario_anual, impuesto, bono_antiguedad, salario_con_bono Como Real
	Definir años_trabajados Como Entero
	Escribir "Ingrese su salario anual:"
	Leer salario_anual
	Escribir "¿Cuántos años ha trabajado en la empresa?"
	Leer años_trabajados
	Si años_trabajados > 5 Entonces
		bono_antiguedad=(salario_anual * 0.05)
		salario_con_bono=(salario_anual + bono_antiguedad)
		Escribir "Se le otorga un bono de antigüedad del 5%. El bono es: " bono_antiguedad
		Escribir "Su salario total con el bono de antigüedad es: " salario_con_bono
	SiNo
		Escribir "No tiene derecho a un bono de antigüedad."
	FinSi
FinFuncion
///////////EJERCICIO 14/////////////////////////////////////////////////////////////////////////////////////////////
//Crea un programa que permita al usuario ingresar la distancia de envío y calcule el costo del envío.
//Si la distancia es inferior a 50 km, el costo es de $10. 
//Si la distancia es de 50 km o más, el costo es de $20.
////////////BOSQUEJO//////////////////////////////////////////////////////////////////
//ENTRADA:Leer (distancia)
//
//PROC:Escribir "Ingrese la distancia de envío en kilometros (Km):"
//Leer distancia
//Si distancia < 50 Entonces
//	c_envio=10
//SiNo
//	c_envio=20
//FinSi
//
//SALIDA:Escribir el costo del envio es, costo de envio
/////////////////////////////////////////////////////////////////////////////////////
Funcion calculadora_costo_envio
	Definir distancia, costo_envio Como Real
	Escribir "Ingrese la distancia de envío en kilometros (Km):"
	Leer distancia
	Si distancia < 50 Entonces
		c_envio=10
	SiNo
		c_envio=20
	FinSi
	Escribir "El costo del envío es: " c_envio
FinFuncion

/////////////EJERCICIO 15///////////////////////////////////////////////////////////////////////////////////////////
//Pide al usuario que ingrese el total de sus compras mensuales durante un año. 
//Si el total es superior a $500, aplica un descuento del 20%. 
//Al final se debe aplicar el IVA del 15%.
//////////BOSQUEJO//////////////////////////////////////////////////////////////////////////////////////
//ENTRADA: Leer (compra mensual)
//
//PROC:	Para i=1 Hasta 12 Hacer
//Escribir "Ingrese el total de sus compras del mes ", i, ":"
//Leer compra_mensual
//total_compras=total_compras + compra_mensual
//FinPara
//Escribir "El total de sus compras anuales es: " total_compras
//Si total_compras > 500 Entonces
//	total_con_descuento=total_compras * 0.80
//	Escribir "Se ha aplicado un descuento del 20%. El total con descuento es: " total_con_descuento
//SiNo
//	total_con_descuento=total_compras
//	Escribir "No se ha aplicado descuento. El total es: " total_con_descuento
//FinSi
//total_final=total_con_descuento * (1 + IVA)
//
//SALIDA:Escribir el total final con IVA del 15% es: total final
////////////////////////////////////////////////////////////////////////////////////////////////////////
Funcion calculadora_compras_anuales
	Definir total_compras, compra_mensual, total_con_descuento, total_final, IVA Como Real
	Definir i Como Entero
	total_compras=0
	IVA=0.15 
	Para i=1 Hasta 12 Hacer
		Escribir "Ingrese el total de sus compras del mes ", i, ":"
		Leer compra_mensual
		total_compras=total_compras + compra_mensual
	FinPara
	Escribir "El total de sus compras anuales es: " total_compras
	Si total_compras > 500 Entonces
		total_con_descuento=total_compras * 0.80
		Escribir "Se ha aplicado un descuento del 20%. El total con descuento es: " total_con_descuento
	SiNo
		total_con_descuento=total_compras
		Escribir "No se ha aplicado descuento. El total es: " total_con_descuento
	FinSi
	total_final=total_con_descuento * (1 + IVA)
	Escribir "El total final, con IVA del 15%, es: " total_final
FinFuncion


//Permite al usuario ingresar la cantidad de unidades de un producto que va a comprar y el precio unitario.
//Aplica descuentos por volumen de compra según las siguientes reglas:
//20-40 unidades: 15% de descuento
//41-90 unidades: 20% de descuento
//Más de 90 unidades: 25% de descuento
//	Al costo total debe aplicar el 15% de impuestos
// BOSQUEJO
//ENTR:cantidad,precio_unitario,subtotal,descuento,total_con_descuento,total_final,impuestos(leer)
//subtotal<-cantidad * precio_unitario(calcular)
//PROCE: si cantidad >= 20 Y cantidad <= 40 Entonces
//          descuento=0.15  
//Sino 
//	     Si cantidad >= 41 Y cantidad <= 90 Entonces
//		     descuento=0.20 
//		
//	Sino
//		Si cantidad > 90 Entonces
//			descuento=0.25  
//		SiNo
//			descuento=0  
// total_con_descuento=subtotal * (1 - descuento)(calcular)
//impuestos=total_con_descuento * 0.15(calcular)
//total_final=total_con_descuento + impuestos(calcular)
//SALI: Mostrar 
//     El subtotal es:
//     El descuento aplicado es:
//     El total con descuento es:
//     El total con impuestos (15%) es:
Funcion Producto_precio
    Definir cantidad, precio_unitario, subtotal, descuento, total_con_descuento, total_final, impuestos Como Real
    Escribir "Ingrese la cantidad de unidades que va a comprar:"
    Leer cantidad
    Escribir "Ingrese el precio unitario del producto:"
    Leer precio_unitario
    subtotal <- cantidad * precio_unitario
    Si cantidad >= 20 Y cantidad <= 40 Entonces
        descuento=0.15  
	Sino 
		Si cantidad >= 41 Y cantidad <= 90 Entonces
			descuento=0.20 
			
		Sino
			Si cantidad > 90 Entonces
				descuento=0.25  
			SiNo
				descuento=0  
			FinSi
			
		FinSi
	FinSi
    total_con_descuento=subtotal * (1 - descuento)
    impuestos=total_con_descuento * 0.15
    total_final=total_con_descuento + impuestos
    Escribir "El subtotal es: $", subtotal
    Escribir "El descuento aplicado es: ", descuento * 100 "%"
    Escribir "El total con descuento es: $", total_con_descuento
    Escribir "El total con impuestos (15%) es: $", total_final
FinFuncion

//Pregunta al usuario cuántas horas de servicio necesita y calcula el costo total. 
//Si las horas son más de 10, aplica un descuento del 20%.
//BOSQUEJO
//ENT: horas,costo_por_hora,subtotal, total_con_descuento, total_final (leer)
//costo_por_hora=50 (indicializar)
//subtotal=horas * costo_por_hora(calcular)
//PROCE: Si horas > 10 Entonces
// Si horas > 10 Entonces
//total_con_descuento=subtotal * 0.80
//Escribir "Se ha aplicado un descuento del 20%."
//SiNo
//	total_con_descuento=subtotal
//	Escribir "No se ha aplicado descuento."
//SALI:Mostrar 
//     El total a pagar es: $

Funcion Horas_de_servicio
    Definir horas, costo_por_hora, subtotal, total_con_descuento, total_final Como Real
    costo_por_hora=50 
    Escribir "Ingrese la cantidad de horas de servicio que necesita:"
    Leer horas
    subtotal=horas * costo_por_hora
    Si horas > 10 Entonces
        total_con_descuento=subtotal * 0.80
        Escribir "Se ha aplicado un descuento del 20%."
    SiNo
        total_con_descuento=subtotal
        Escribir "No se ha aplicado descuento."
    FinSi
    Escribir "El total a pagar es: $", total_con_descuento
FinFuncion

//"XYZ" es una empresa dedicada a ofrecer  banquetes; sus tarifas son las siguientes: 
//El costo de platillo por persona es de $95.00,  pero si el número de personas es mayor a 200  pero menor o igual a 300, el costo es de $85.00.
//Para más de 300 personas el costo por platillo es  de $75.00.
//Se requiere un algoritmo que ayude a determinar  el presupuesto que se debe presentar a los  clientes que deseen realizar un evento aplicando un descuento del 205% con un IVA final del 15%
//BOSQUEJO
//ENTR: num_personas, costo_por_persona, subtotal, total_con_descuento, total_final, descuento, IVA (leer)
//descuento=2.05 (Iinicializar)
//IVA=0.15 (inicializar)
//PROCE:  Si num_personas > 300 Entonces
//costo_por_persona=75
//Sino 
//	Si num_personas > 200 Y num_personas <= 300 Entonces
//        costo_por_persona=85
//	SiNo
//        costo_por_persona=95
// subtotal=num_personas * costo_por_persona (calcular)
//total_con_descuento=subtotal * (1 - descuento)(calcular)
//total_final=total_con_descuento * (1 + IVA)(calcular)
//SALI:Mostrar 
//            El costo por persona es: $
//           El subtotal es: $
//           El total con descuento (205%) es: $
//          El total final con IVA (15%) es: $
funcion Costo_platillos
    Definir num_personas, costo_por_persona, subtotal, total_con_descuento, total_final, descuento, IVA Como Real
    descuento=2.05 
    IVA=0.15   
    Escribir "Ingrese el número de personas para el evento:"
    Leer num_personas
    Si num_personas > 300 Entonces
        costo_por_persona=75
	Sino 
		Si num_personas > 200 Y num_personas <= 300 Entonces
			costo_por_persona=85
		SiNo
			costo_por_persona=95
	    FinSi
	FinSi
    subtotal=num_personas * costo_por_persona
    total_con_descuento=subtotal * (1 - descuento)
    total_final=total_con_descuento * (1 + IVA)
    Escribir "El costo por persona es: $", costo_por_persona
    Escribir "El subtotal es: $", subtotal
    Escribir "El total con descuento (205%) es: $", total_con_descuento
    Escribir "El total final con IVA (15%) es: $", total_final
FinFuncion

//La asociación de vinicultores tiene como política fijar un  precio inicial al kilo de uva, la cual se clasifica en tipos A y B,  y además en tamaños 1 y 2. Cuando se realiza la venta del  producto, ésta es de un solo tipo y tamaño, se requiere  determinar cuánto recibirá un productor por la uva que  entrega en un embarque, considerando lo siguiente:
//	Si es de tipo A, se le cargan $20 al precio inicial cuando es  de tamaño 1; y $30 si es de tamaño 2.
//	Si es de tipo B, se rebajan $30 cuando es de tamaño 1, y  50 cuando es de tamaño 2.
//	Realice un algoritmo para determinar la ganancia obtenida considerando un iva del 15%
//BOSQUEJO:
//ENTR: tipo_uva(leer)
//      tamano_uva (leer)
// precio_inicial, precio_final, cantidad_kilos, IVA, total_a_recibir (leer)
//IVA=0.15 (inicializar)
//PROCE: Si tipo_uva = "A" Entonces
//Si tamano_uva = 1 Entonces
//	precio_final=precio_inicial + 20
//SiNo
//	precio_final=precio_inicial + 30
//FinSi
//SiNo
//	Si tipo_uva = "B" Entonces
//		Si tamano_uva = 1 Entonces
//			precio_final=precio_inicial - 30
//		SiNo
//			precio_final=precio_inicial - 50
//total_a_recibir=precio_final * cantidad_kilos (calcular)
//total_a_recibir=total_a_recibir * (1 + IVA)(calcular)
// SALI: Mostrar 
//      El precio final por kilo de uva es: $
//      El total a recibir, con IVA del 15%, es: $
Funcion Vinicultores
    // Definir variables
    Definir tipo_uva Como Caracter
    Definir tamano_uva Como Entero
    Definir precio_inicial, precio_final, cantidad_kilos, IVA, total_a_recibir Como Real
    IVA=0.15
    Escribir "Ingrese el tipo de uva (A o B):"
    Leer tipo_uva
    Escribir "Ingrese el tamaño de la uva (1 o 2):"
    Leer tamano_uva
    Escribir "Ingrese el precio inicial por kilo de uva:"
    Leer precio_inicial
    Escribir "Ingrese la cantidad de kilos entregados:"
    Leer cantidad_kilos
    Si tipo_uva = "A" Entonces
        Si tamano_uva = 1 Entonces
            precio_final=precio_inicial + 20
        SiNo
            precio_final=precio_inicial + 30
        FinSi
    SiNo
        Si tipo_uva = "B" Entonces
            Si tamano_uva = 1 Entonces
                precio_final=precio_inicial - 30
            SiNo
                precio_final=precio_inicial - 50
            FinSi
        FinSi
    FinSi
    total_a_recibir=precio_final * cantidad_kilos
    total_a_recibir=total_a_recibir * (1 + IVA)
    Escribir "El precio final por kilo de uva es: $", precio_final
    Escribir "El total a recibir, con IVA del 15%, es: $", total_a_recibir
FinFuncion

//El director de una escuela está organizando un viaje de estudios, 
//y requiere determinar cuánto debe cobrar a cada alumno y cuánto debe pagar a la compañía de viajes por el servicio. 
//La forma de cobrar es la siguiente: si son 200 alumnos o más, el costo por cada alumno es de $20.00; de 100 a 199 alumnos, 
//el costo es de $30.00, de 50 a 99, de $40.00, 
//y si son menos de 50, el costo de la renta del autobús es de $50 y si son menos de 20 el costo es $2000, sin importar el número de alumnos.
//Realice un algoritmo que permita determinar el pago a la compañía de autobuses y lo que debe pagar 
//cada alumno por el viaje considerando un descuento del 10% adicional
//BSOQUEJO
//ENTR: num_alumnos, costo_por_alumno, total_pago_empresa, total_con_descuento, pago_por_alumno(leer)
//      descuento(leer)
// descuento <- 0.10 (incializar)
//PROCE:Si num_alumnos >= 200 Entonces
//costo_por_alumno=20
//Sino
//	Si num_alumnos >= 100 Y num_alumnos < 200 Entonces
//        costo_por_alumno=30
//	Sino
//		Si num_alumnos >= 50 Y num_alumnos < 100 Entonces
//			costo_por_alumno=40
//		Sino
//			Si num_alumnos >= 20 Y num_alumnos < 50 Entonces
//				costo_por_alumno=50
//			SiNo
//				total_pago_empresa=2000
//				costo_por_alumno=total_pago_empresa / num_alumnos
// El total a pagar a la compañía de autobuses es: $"
// El costo por alumno es: $
// total_pago_empresa=num_alumnos * costo_por_alumno(calcular)
//pago_por_alumno=costo_por_alumno * (1 - descuento)(calcular)
//SALI: Mostrar 
//El costo por alumno, aplicando el descuento del 10%, es: $
// El total a pagar a la compañía de autobuses es: $
Funcion  Viaje_estudios
    Definir num_alumnos, costo_por_alumno, total_pago_empresa, total_con_descuento, pago_por_alumno Como Real
    Definir descuento Como Real
    descuento <- 0.10  
    Escribir "Ingrese el número de alumnos que participarán en el viaje:"
    Leer num_alumnos
	
    Si num_alumnos >= 200 Entonces
        costo_por_alumno=20
	Sino
		Si num_alumnos >= 100 Y num_alumnos < 200 Entonces
			costo_por_alumno=30
		Sino
			Si num_alumnos >= 50 Y num_alumnos < 100 Entonces
				costo_por_alumno=40
			Sino
				Si num_alumnos >= 20 Y num_alumnos < 50 Entonces
					costo_por_alumno=50
				SiNo
					total_pago_empresa=2000
					costo_por_alumno=total_pago_empresa / num_alumnos
					Escribir "El total a pagar a la compañía de autobuses es: $", total_pago_empresa
					Escribir "El costo por alumno es: $", costo_por_alumno
				FinSi
			FinSi
		FinSi
	FinSi
	
	total_pago_empresa=num_alumnos * costo_por_alumno
	pago_por_alumno=costo_por_alumno * (1 - descuento)
	Escribir "El costo por alumno, aplicando el descuento del 10%, es: $", pago_por_alumno
	Escribir "El total a pagar a la compañía de autobuses es: $", total_pago_empresa
FinFuncion


//Una compañía de viajes cuenta con tres tipos de autobuses (A, B y C),
//cada uno tiene un precio por kilómetro recorrido por persona,
//los costos respectivos son $2.0, $2.5 y $3.0
//Se requiere determinar el costo total y por persona del viaje considerando que
//cuando éste se presupuesta debe haber un mínimo de 20 personas,
//de lo contrario el cobro se realiza con base en este número límite. 
//Al final aplica el IVA del 15%.
// ENT:tipo_autobus(leer)
//      numper(leer)
// costoperso,costotal,iva (leer)
//PRC:  Si tipo_autobus = "A" Entonces
//            costoperso=2.0
//SINO 
//	   Si tipo_autobus="B" Entonces
//		    costoperso=2.5
//	SINO 
//		Si tipo_autobus="C" Entonces
//			 costoperso=3.0
// SINO 
//      No exite ese tipo de autobus
//       costoperso=0
// Finsi 
// Si numper<20
//   numper=20
// costotal= (costoperso * numper)(calcular)
//iva= costotal * 0.15(calcular)
//costotal= costotal + iva(calcular)
//SAL: Mostrar el costo total del viaje 
//     Mostrar el costo por persona 
Funcion Compañia_de_viajes
	Definir tipo_autobus como caracter 
	Definir costoperso, costotal,iva Como Real
	Definir numper Como Entero
	Escribir "Ingrese el tipo de bus (A,B o C)"
	Leer tipo_autobus
    Escribir "Ingrese el numero de pasajeros"
	Leer numper
	Si tipo_autobus = "A" Entonces
		costoperso=2.0
	SINO 
		Si tipo_autobus="B" Entonces
			costoperso=2.5
		SINO 
			Si tipo_autobus="C" Entonces
				costoperso=3.0
			SiNo
				Escribir "No exite ese tipo de autobus"
				costoperso=0
			FinSi
		FinSi
	FinSi
	Si numper<20
		numper=20
	FinSi
	costotal= (costoperso * numper)
	iva= costotal * 0.15
	costotal= costotal + iva
	Escribir "El costo total del viaje es: $" costotal
	Escribir "El costo por persona es: $" costotal/numper
FinFuncion


//Dado un carácter indicar si es una letra del alfabeto
//ENT:caracter(leer)
//PRC: si caracter es mayor o igual a "A" y menor o igual a "Z"
//El caracter ingresado es una letra del alfabeto" 
//Sino
//    si caracter es mayor o igual a "a" y menor o igual a "z"
// El caracter ingresado es una letra del alfabeto 
//Sino El caracter ingresado NO es una letra del alfabeto 
//SAL: Mostrar si es una letra del alfabeto 
Funcion Caracter_
	Definir caract Como Caracter
	Escribir "Ingrese un caracter"
	Leer caract
	si (caract >="A" y caract <="Z")o(caract>= "a" y caract <= "z") Entonces
		Escribir "El caracter ingresado es una letra del alfabeto"
	SiNo
		Escribir "El caracter ingresado NO es una letra el alfabeto" 
	FinSi
FinFuncion

//Dado un carácter muestre si es una vocal o es un digito o es un símbolo de
//puntuación (".", ",",";",":") o un espacio (" ")
//ENT: caract (leer)
//PRC: Si caract es "a", "e", "i", "o", "u","A","E","I","O","U"
// El cracter ingresado es una vocal
// sino 
//     si caract es ".", ",",";",":":
// El caracter ingresado es un simbolo de puntuacion 
// sino Si caracter es un espacio (""):
// El caracter ingresado es un espacio 
// El caracter ingresado es un caracter no definido 
// SAL: Mostrar si es vocal, digito o simbolo 
Funcion Caracter_Vocal_Signo
	Definir caractr Como Caracter
	Escribir "Ingrese un caracter"
	Leer caractr
	si caractr="a" o caractr="e"o caractr="i"o caractr="o"o caractr="u"o caractr="A" o caractr="E"o caractr="I"o caractr="O"o caractr="U" Entonces
		Escribir "El caracter ingresado es una vocal"
	sino
		si caractr>= "0" y caractr<="9" Entonces
			Escribir "El caracter ingresado es un digito"
		sino 
			si caractr= "." o caractr= "," o caractr= ";" o caractr= ":" Entonces
				Escribir "El caracter ingresado es un simbolo de puntuacion"
			sino 
			    si caractr = " " Entonces
					Escribir "El caracter ingresado es un espacio"
				sino 
					Escribir "El caracter ingresado es un caracter no definido"
				FinSi
			FinSi
		FinSi	
	FinSi
FinFuncion

//Dada dos caracteres indicar si son iguales, o si el primer carácter es menor o mayor que el segundo
//ENT: carac1, carac2 (leer)
//PRC: Si carac1 es = a carac2 Entonces
// Los carac son iguales 
// sino 
// si carac1 < carac2 Entonces
// El primer carac es menor que el segundo 
// sino 
// El primer carac es mayor que el segundo"
// SAL: Mostrar si son iguales o el primer crac es menor o mayor que el segundo 
Funcion igual_menor_mayor
	Definir carac1, carac2 Como Caracter
	Escribir"Ingrese el primer caracter"
	Leer carac1
	Escribir "Ingrese el segundo caracter"
	Leer carac2
	si carac1 = carac2 Entonces
		Escribir "Los caracteres son iguales"
	sino 
		si carac1 < carac2 Entonces
			Escribir "El primer caracter es menor que el segundo"
		sino 
			Escribir "El primer caracter es mayor que el segundo"
		FinSi
	FinSi
FinFuncion

//Dada dos frases indicar si son iguales, o si la primera es menor o mayor que la segunda
//ENT: frase1, frase2 (leer)
//PRC: si frase1=frase2 Entonces
// Las frases son iguales 
// sino 
// si frase1<frase2 Entonces
// La primera frase es menor que la segunda 
// sino 
// La primera es mayor que la segunda 
// SAL: Mostrar si son iguales o la primera frase es menor o mayor que la segunda
Funcion Frases 
	Definir frase1, frase2 Como cadena
	Escribir "Ingrese la primera frase"
	Leer frase1 
	Escribir "Ingrese la segunda frase"
	Leer frase2 
	Si frase1=frase2 Entonces
		Escribir "Las frases son iguales"
	SiNo
		Si frase1<frase2 Entonces
			Escribir "La primera frase es menor que la segunda"
		Sino 
			Escribir "La primera frase es mayor que la segunda"
		FinSi
	FinSi
FinFuncion

Algoritmo Ejercicios
	encontrarelmayor
	votacionessermayordeedad
	VerificacióndeMúltiplosentreDosNúmeros
	numeropositivonegativo
	añobisiesto
	DeterminarSignoZodiacal
	Quincenadeldia
	Diasdelasemana
	Descuentoconiva
	Salario
	Calculadora_de_articulos
	calculadora_impuestos_salario
	Años_de_trabajo
	calculadora_costo_envio
	calculadora_compras_anuales
	Producto_precio
	Horas_de_servicio
	Costo_platillos
	Vinicultores
	Viaje_estudios
	Compañia_de_viajes
	Caracter_
	Caracter_Vocal_Signo
	igual_menor_mayor
	Frases
FinAlgoritmo
