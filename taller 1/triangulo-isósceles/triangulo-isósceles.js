function alturaIsosceles(lado1,lado2,lado3){
	if (lado1 == lado2  && lado1 != lado3){
		resultado = Math.sqrt(lado1**2 - (lado3**2 / 4));
		return resultado;
	}
	else if (lado2 == lado3 && lado2 != lado1){
		resultado = Math.sqrt(lado2**2 - (lado1**2 / 4));
		return resultado;
	}
	else if (lado3 == lado1 && lado3 != lado2){
		resultado = Math.sqrt(lado3**2 - (lado2**2 / 4));
		return resultado;
	}
	else{
		console.log("No es un triángulo isósceles.")
	}	
}
