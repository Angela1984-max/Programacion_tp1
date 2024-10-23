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

    function validarPista(msg =""){
        //booleano para validar
        let datoValido;

        //variable auxiliar
        let práctico;

        do {
            //pido y valido el nombre de la pista
            práctico = prompt("msg");

            //valido que no sea un numero
            if(!isNan(práctico)) {
                alert("Ingrese texto");
                datoValido = false;
            }
                else if(práctico === null) {
                alert("Por favor, complete el campo");
                datoValido = false;
            }
                else if(práctico.trim() === "") {
                alert("Por favor, no deje el campo vacio");
                datoValido = false;
            }
                else {
                datoValido = true;
            }
          } while(!datoValido);
        //devuelvo el dato validado
          return práctico;
        }

        function validarduraciónPista(msg =""){
            //booleano para validar
            let datoValido;
            //variable auxiliar
            let práctico;

                do {
                    práctico = parseInt(prompt());
                    //Validaciones
                    if(isNaN(práctico)) {
                        alert("Por favor, ingrese números");
                        datoValido = false;
                    }
                    else if(práctico > 0 || códigoDisco < 7200){
                        alert("Por favor, la duración de la pista debe ser mayor a 0 y menor a 7200 segundos");
                        datoValido = false;
                    }
                    else {
                        datoValido = true;
                    }
                  } while (!datoValido);

                  return práctico;
            }

         function validarAutor(msg =""){
                //booleano para validar
            let datoValido;
                //variable auxiliar
            let práctico; 

             do{
                autor = prompt (msg ="");

            if(!isNan(práctico)) {
                alert("Ingrese texto");
                datoValido = false;
}
            else if(práctico === null) {
                alert("Por favor, complete el campo");
                datoValido = false;
}
            else if(práctico.trim() === "") {
                alert("Por favor, no deje el campo vacio");
                datoValido = false;
}
            else {
                datoValido = true;

            }while(!datoValido);
        
            return práctico;
}

         function validarcódigodisco (msg =""){
         //booleano para validar
         let datoValido;
         //variable auxiliar
            let práctico;
            
  do {
    códigoDisco = parseInt(prompt(msg =""));

    if(isNaN(práctico)) {
        alert("Por favor, ingrese números");
        datoValido = false;
    }
    else if(práctico > 1 || práctico < 999){
        alert("Por favor, El código del disco debe ser mayor a 1 y menor a 999");
        datoValido = false;
    }
    else {
        datoValido = true;
    }while (!datoValido);
    return práctico;
   




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
