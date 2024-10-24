function cargarDisco(){
     //Pido el nombre del disco
     disco = validarString("Ingrese el nombre del disco");
     
     //pido autor y valido
      let autor = validarAutor("Ingrese el nombre del autor del $(disco)");
       
      //guardo el autor en su array
      autor.push(autor);

      //pido código del disco y valido
      let codigoDisco = validarcodigodisco("Ingrese el código del $(disco)");
      
      //guardo el código del disco en su array
      codigoDisco.push(codigoDisco);
 
}

function cargarPista(){
    do {
        //pido el nombre de la pista y valido
        let pista = validarPista("Ingrese el nombre de la pista");

        //guardo las pistas en su array
        pista.push(pista);

        //pido duración de pista y valido
        
        let duracionPista = validarduracionPista("Ingrese la duración de la $(pista)");
        
        //guardo la duración de pista en su array
        duracionPista.push(duracionPista);
       
}
    function mostrarDisco(){
    //Encuentro el contenedor
    const contenedor = document.querySelector(".contenedor");
    console.log(contenedor);
}

function mostrarPistas() {

}

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