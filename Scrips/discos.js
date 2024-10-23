/*
class disco {
    constructor(nombre, pista, duración, autor, portada){
        this.nombre = nombre;
        this.pista = pista;
        this.duración = duración;
        this.autor = autor;
        this.portada = portada;
    }
}
    */

let discos = [
    {nombre:"People", pista1:"lala", pista2: "lele", pista3: "lalo"},

];

let nombrePista = discos.map(obtenerNombreDPista);
function obtenerNombreDPista(losdiscos) {
    return losdiscos.nombre + "" + losdiscos.pista1;
}
console.info("nombrePista:",nombredediscos);