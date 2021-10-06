const pi = Math.PI;

// Funciones para el cuadrado.

function perimetroCuadrado(lado){
	return lado * 4;
}

function areaCuadrado(lado){
	return lado * lado;
}


// Funciones para el rectangulo.

function perimetroRectangulo(lado, altura){
	return lado + lado + altura + altura;
}

function areaRectangulo(lado, altura){
	return lado * altura;
}


// Funciones para el triangulo.

function perimetroTriangulo(lado1, lado2, lado3){
	return lado1 + lado2 + lado3;
}

function areaTriangulo(base, altura){
	return base * altura;
}


// Funciones para el circulo.

function perimetroCirculo(radio){
	const diametro = radio * 2;
	return pi * diametro;
}

function areaCirculo(radio){
	return pi * (radio * radio);
}


// Funciones para HTML
function calcularPerimetroCuadrado(){
	const input = document.getElementById("lado-cuadrado");
	const value = input.value;
	const perimetro = perimetroCuadrado(value);
	alert("El perimetro de este cuadrado es: " + perimetro + "cm");
}

function calcularAreaCuadrado(){
	const input = document.getElementById("lado-cuadrado");
	const value = input.value;
	const area = areaCuadrado(value);
	alert("El area de este cuadrado es: " + area + "cm²");
}