// Ejemplo de código en Typescript

interface DatosLibro {
    tematica: any;
    paginas: number | string;
    precio: number;
    calculaPrecio(): number;
}

class DatosLibro2 {
    tematica: any;
    paginas: number | string;
    precio: number;
}

class Libro {

    public autor: string;
    protected titulo: string;

    constructor (autor, titulo) {
        this.autor = autor
        this.titulo = titulo
    }
}

class Libro2 {

    constructor (public autor: string, public titulo: string ) {}
}


class LibroTecnico extends Libro {

    datos: DatosLibro2;
    private capitulos: Array<string>;
    //private capitulos: string[];
 
	constructor(autor, titulo, tematica, paginas, precio) {
        super(autor, titulo);

        this.datos.tematica = tematica
        this.datos.paginas = paginas
        this.datos.precio = precio

        this.datos2 = new DatosLibro2()
		this.capitulos = [];
		// ...
	}
	
	calculaPrecio(pValor = 1) {
        this.datos.precio *= pValor
        console.log(this)
        return 4;
	}
}

let oLibro = new LibroTecnico("Pepe", "Angular", "Informatica", 200, 30)
oLibro.calculaPrecio(1.16)