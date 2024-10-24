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

    function validarDuraciónPista(msg =""){
        
        //booleano para validar
        let datoValido;
        //variable auxiliar
        let práctico;

            do {
                práctico = parseInt(prompt(msg =""));
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
        function validarCódigoDisco(msg ="") {
        //booleano para validar
        let datoValido;
        //variable auxiliar
        let práctico;
     
             do{ 
                práctico = parseInt(prompt(msg =""));

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
         }
