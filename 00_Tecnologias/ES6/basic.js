// Ejemplo de código en ES6

var data = [{precio: 12}, {precio: 34}, {precio: 19}]; 

//ES5
// data.forEach(function(elem) {elemm.precio++})

//ES6
// data.forEach(elem => elemm.precio++)


data.forEach( elem => {
{

	const iva = 1.16
	let precioFinal = elem.precio * iva
	console.log(`
	Oferta: 
	El precio final es ${precioFinal}`)
}

 
 // console.log (iva)
});