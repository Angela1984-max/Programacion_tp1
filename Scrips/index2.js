class discos {
    constructor(discos, autor, pista, portada, duracion) {

        this.discos = discos;
        this. autor = autor;
        this.pista = pista;
        this.portada = portada;
        this.duracion = duracion;

     }
     fetch("discos.json").then(response => response.json()).then(discos => console.table(discos));





        