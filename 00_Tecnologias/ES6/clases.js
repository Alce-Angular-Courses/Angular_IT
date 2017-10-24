// Ejemplo de código en ES6

class Libro {

    constructor (autor, titulo) {
        this.autor = autor
        this.titulo = titulo
    }

}

class LibroTecnico extends Libro {
 
	constructor(autor, titulo, tematica, paginas, precio) {
        super(autor, titulo);
        this.tematica = tematica
        this.paginas = paginas
        this.precio = precio
		this.capitulos = [];
		// ...
	}
	
	calculaPrecio(pValor = 1) {
        this.precio *= pValor
        console.log(this)
	}
}

oLibro = new LibroTecnico("Pepe", "Angular", "Informatica", 200, 30)
oLibro.editorial = "Espasa"
oLibro.calculaPrecio(1.16)