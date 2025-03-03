class Libro {
    constructor(titulo, autor, ano, estado, capitulos = []) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.estado = estado;
        this.capitulos = capitulos;
    }

    agregarCapitulo(capitulo) {
        this.capitulos.push(capitulo);
        console.log('Capitulo agregado correctamente')
    }
    
    eliminarCapitulo(capitulo) {
        const indice = this.capitulos.findIndex(elemento => elemento === capitulo);
        if (indice === -1) {
            console.log("El nombre del capitulo es incorrecto")
            return false;
        } else {
            this.capitulos.splice(indice, 1);
            console.log("Capitulo Eliminado Correctamente")
            return true;
        }
    }
    
    describirLibro() {
        const capitulosTexto = this.capitulos.length ? this.capitulos.join(", ") : "Ninguno";
        console.log(`-----------------Libro-----------------
            Titulo: ${this.titulo}
            Autor: ${this.autor}
            Año: ${this.ano}
            Estado: ${this.estado}
            Capitulos: ${capitulosTexto}`);
    }
}


// Creación de 10 libros
const libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "Disponible", ["La fundación de Macondo", "Los Buendía", "La peste del insomnio"]);
const libro2 = new Libro("El señor de los anillos", "J.R.R. Tolkien", 1954, "Prestado");
libro2.agregarCapitulo("La Comunidad del Anillo");

const libro3 = new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", 1605, "Disponible");
const libro4 = new Libro("1984", "George Orwell", 1949, "Prestado", ["El Gran Hermano", "La Policía del Pensamiento"]);
const libro5 = new Libro("Rayuela", "Julio Cortázar", 1963, "Disponible");

const libro6 = new Libro("Harry Potter y la piedra filosofal", "J.K. Rowling", 1997, "Disponible");
libro6.agregarCapitulo("El niño que vivió");
libro6.agregarCapitulo("El sombrero seleccionador");

const libro7 = new Libro("La sombra del viento", "Carlos Ruiz Zafón", 2001, "Prestado");
const libro8 = new Libro("Crimen y castigo", "Fiódor Dostoyevski", 1866, "Disponible", ["El crimen", "La investigación", "El castigo"]);
const libro9 = new Libro("El principito", "Antoine de Saint-Exupéry", 1943, "Disponible");
const libro10 = new Libro("Fahrenheit 451", "Ray Bradbury", 1953, "Prestado", ["La temperatura a la que arde el papel"]);

// Agregar los libros a una lista (array)
const libreria = [libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10];

function mostrarLibros(){
    libreria.forEach((item) => {
        item.describirLibro();
    })
}
function mostrarLibroAleatorio(){
    const indiceAleatorio = Math.floor(Math.random() * libreria.length);
    libreria[indiceAleatorio].describirLibro();
}

function agregarCapitulo(tituloLibro, nombreCapitulo){
    const libro = libreria.find(libro => libro.titulo == tituloLibro)
    libro.agregarCapitulo(nombreCapitulo)
}

function eliminarCapitulo(tituloLibro, nombreCapitulo){
    const libro = libreria.find(libro => libro.titulo == tituloLibro)
    libro.eliminarCapitulo(nombreCapitulo);
}
