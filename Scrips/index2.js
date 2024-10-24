class discos {
    constructor(nombre, autor, pista, portada, duración) {

        this.nombre = nombre;
        this. autor = autor;
        this.pista = pista;
        this.portada = portada;
        this.duración = duración;

     }
     fetch("discos.json").then(response => response.json()).then(discos => console.table(discos));





        // Creo la propiedad como Array vacio
        this.cd = [];
        // Intento leer el archivo (asincrónico)
        fetch("discos.json")
        .then(response => response.json())
        .then(discos => {
            // Recorro lo que leí del archivo
            for(let libro of libros) {
                // 
                const book = {
                    "stock": Math.ceil(10 * Math.random()),
                    "libro": new Libro(
                        libro.nombre,
                        libro.autor,
                        libro.editorial,
                        libro.portada
                    )
                };
                // 
                this.libros.push(book);
            }
        });
    }
    toHTML() {
        let html = "";
        // Recorro la propiedad libros (Array de Libro)
        for(let obj of this.libros) {
            // Llamo al metodo toHTML de Libro
            html += obj.libro.toHTML();
        }
        return html;
    }
    pedirLibro(nombre) {
        // Recorro todo el catalogo de libros
        for(let obj of this.libros) {
            // Miro el libro
            const libro = obj.libro;
            // Veo si coincide con el nombre solicitado
            if(libro.nombre === nombre) {
                // Resto stock
                obj.stock--;
                return obj.stock;
            }
        }
    }
    devolverLibro(nombre) {
        // Recorro todo el catalogo de libros
        for(let obj of this.libros) {
            // Miro el libro
            const libro = obj.libro;
            // Veo si coincide con el nombre solicitado
            if(libro.nombre === nombre) {
                // Aumento stock
                obj.stock++
                return obj.stock;
            }
        }
    }
}