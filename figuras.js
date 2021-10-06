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

function perimetroCirculo(diametro){
	pi = Math.PI;
	return pi * diametro;
}

function areaCirculo(diametro){
	pi = Math.PI;
	radio = diametro / 2;
	return pi * (radio * radio);
}