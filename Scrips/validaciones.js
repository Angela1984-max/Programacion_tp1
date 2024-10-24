function validarPista(msg =""){
    //booleano para validar
    let datoValido;

    //variable auxiliar
    let practico;

    do {
        //pido y valido el nombre de la pista
        practico = prompt("msg");

        //valido que no sea un numero
        if(!isNan(practico)) {
            alert("Ingrese texto");
            datoValido = false;
        }
            else if(practico === null) {
            alert("Por favor, complete el campo");
            datoValido = false;
        }
            else if(practico.trim() === "") {
            alert("Por favor, no deje el campo vacio");
            datoValido = false;
        }
            else {
            datoValido = true;
        }
      } while(!datoValido);
    //devuelvo el dato validado
      return practico;
    }

    function validarDuracionPista(msg =""){
        
        //booleano para validar
        let datoValido;
        //variable auxiliar
        let practico;

            do {
                practico = parseInt(prompt(msg =""));
                //Validaciones
                if(isNaN(practico)) {
                    alert("Por favor, ingrese números");
                    datoValido = false;
                }
                else if(practico > 0 || codigoDisco < 7200){
                    alert("Por favor, la duración de la pista debe ser mayor a 0 y menor a 7200 segundos");
                    datoValido = false;
                }
                else {
                    datoValido = true;
                }
              } while (!datoValido);

              return practico;
        }

     function validarAutor(msg =""){
            //booleano para validar
        let datoValido;
            //variable auxiliar
        let practico; 

         do{
            autor = prompt (msg ="");

        if(!isNan(practico)) {
            alert("Ingrese texto");
            datoValido = false;
}
        else if(practico === null) {
            alert("Por favor, complete el campo");
            datoValido = false;
}
        else if(practico.trim() === "") {
            alert("Por favor, no deje el campo vacio");
            datoValido = false;
}
        else {
            datoValido = true;

        }while(!datoValido);
    
        return practico;
}
    function validarCodigoDisco(msg ="") {
        //booleano para validar
        let datoValido;
        //variable auxiliar
        let practico;
     
             do{ 
                practico = parseInt(prompt(msg =""));

             if(isNaN(practico)) {
                alert("Por favor, ingrese números");
                datoValido = false;

            }
            else if(practico > 1 || practico < 999){
            alert("Por favor, El código del disco debe ser mayor a 1 y menor a 999");
            datoValido = false;
    
            }
            else {
            datoValido = true;
    
            }while (!datoValido);
    
            return practico;
         }
