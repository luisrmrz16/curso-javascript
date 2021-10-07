
function precioConDescuento(precio, descuento){
	const porcentajePrecioConDescuento = 100 - descuento;
	const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
	
	return precioConDescuento;
}

function priceDiscount(){
	const inputPrice = document.getElementById("InputPrice");
	const priceValue = inputPrice.value;

	const inputDiscount = document.getElementById("InputDiscount");
	const discountValue = inputDiscount.value;

	const finalPrice = precioConDescuento(priceValue, discountValue);

	const finalHTML = document.getElementById("FinalPrice");
	finalHTML.innerText = "El precio final con descuento es $" + finalPrice;
}