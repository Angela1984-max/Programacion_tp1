"use strict" 
//Validaciones

    //Pido el nombre del disco
    const disco = validarString("Ingrese el nombre del disco");
    
        do {
            //pido el nombre de la pista y valido
            let pista = validarPista("Ingrese el nombre de la pista");
            //pido duración de pista y valido
            let duraciónPista = validarduraciónPista("Ingrese la duración de la $(pista)");
            //pido autor y valido
            let autor = validarAutor("Ingrese el nombre del autor del $(disco)");
            //pido código del disco y valido
            let códigoDisco = validarcódigodisco("Ingrese el código del $(disco)");
           

            }while(confirm("Otra pista y duración de Pista para cargar?"));

    



/*Validaciones

El nombre del disco, autor/banda y nombre de la pista no pueden quedar vacíos.
El código numérico único del disco no puede ser menor a 1, ni mayor a 999.
La duración de cada pista debe estar entre 0 y 7200 (segundos) inclusive.

const nombredediscos = ["Please Please Me"; "With the Beatles"; "A Hard Day's Night"; "Beatles for Sale"];

function nombredediscos(autor, nombrepista,duración){
    this.autor = autor;
    this.nombrepista = nombrepista;
    this.duracion = duración;
}



Portada 
Codigo numerico disco menor a 1, ni mayor a 999.
Pistas nombre
Duración 0 y 7200 (segundos)


function cargarDisco () {
    nombredediscos = prompt("Como se llama el disco");
    console.log (disco1);
}

function mostrarDisco() {
    console.log("El nombre del disco es $(nombredeldisco)";
}


let discos = [];
let pistas = [];

discos.push[Manantial];


/*
