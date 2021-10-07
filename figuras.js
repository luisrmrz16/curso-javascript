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
	return (lado * 2) + (altura * 2);
}

function areaRectangulo(lado, altura){
	return lado * altura;
}

// Funciones para el triangulo.

function perimetroTriangulo(lado_a, lado_b, lado_c){
	return (lado_a + lado_b + lado_c);
}

function areaTriangulo(base, altura){
	return (base * altura) / 2;
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
	const value = parseFloat(input.value);
	const perimetro = perimetroCuadrado(value);
	alert("El perímetro de este cuadrado es: " + perimetro + "cm");
}

function calcularAreaCuadrado(){
	const input = document.getElementById("lado-cuadrado");
	const value = parseFloat(input.value);
	const area = areaCuadrado(value);
	alert("El área de este cuadrado es: " + area + "cm²");
}

function calcularPerimetroRectangulo(){
	const lado = document.getElementById("lado-rectangulo");
	const ancho = document.getElementById("ancho-rectangulo");
	const value1 = parseFloat(lado.value);
	const value2 = parseFloat(ancho.value);
	const perimetro = perimetroRectangulo(value1, value2);
	alert("El perímetro de este rectangulo es: " + perimetro + "cm");
}

function calcularAreaRectangulo(){
	const lado = document.getElementById("lado-rectangulo");
	const ancho = document.getElementById("ancho-rectangulo");
	const value1 = parseFloat(lado.value);
	const value2 = parseFloat(ancho.value);
	const area = areaRectangulo(value1, value2);
	alert("El área de este rectangulo es: " + area + "cm²");
}

function calcularPerimetroTriangulo(){
	const a = document.getElementById("lado-triangulo-a");
	const b = document.getElementById("lado-triangulo-b");
	const c = document.getElementById("lado-triangulo-c");

	const lado_a = parseFloat(a.value);
	const lado_b = parseFloat(b.value);
	const lado_c = parseFloat(c.value);

	

	var e = document.getElementById("tipo-triangulo");
	switch(e.selectedIndex){
		case 0: //triangulo equilatero
			var perimetro = perimetroTriangulo(lado_a, lado_a, lado_a);
			break;
		case 1: //triangulo isosceles
			var perimetro = perimetroTriangulo(lado_a, lado_b, lado_b);
			break;
		case 2: //triangulo escaleno
			var perimetro = perimetroTriangulo(lado_a, lado_b, lado_c);
			break;
	}

	alert("El perímetro de este rectangulo es: " + perimetro + "cm");
}

function calcularAreaTriangulo(){
	const b = document.getElementById("base-triangulo");
	const a = document.getElementById("alto-triangulo");
	const base = parseFloat(b.value);
	const alto = parseFloat(a.value);
	const area = areaTriangulo(base, alto);
	alert("El perímetro de este rectangulo es: " + area + "cm²");
}

//MOSTRAR INPUT CUANDO CAMBIA EL TIPO DE TRIANGULO XD

const selectElement = document.querySelector('.tipo-triangulo');

selectElement.addEventListener('change', (event) => {

    var e = document.getElementById("tipo-triangulo");
	var lado_a = document.getElementById('lado-triangulo-a');
	var lado_b = document.getElementById('lado-triangulo-b');
	var lado_c = document.getElementById('lado-triangulo-c');

	switch (e.selectedIndex){
		case 0:
			lado_a.style.visibility = "visible";
			lado_b.style.visibility = "hidden";
			lado_c.style.visibility = "hidden";
		break;
		case 1:
			lado_a.style.visibility = "visible";
			lado_b.style.visibility = "visible";
			lado_c.style.visibility = "hidden";
		break;
		case 2:
			lado_a.style.visibility = "visible";
			lado_b.style.visibility = "visible";
			lado_c.style.visibility = "visible";
		break;
	}
	
});