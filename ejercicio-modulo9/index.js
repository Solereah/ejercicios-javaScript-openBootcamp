const logger = require('./logger')

/*
Crea un nuevo proyecto de Node

- Instala la dependencia Winston

- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

- Registra el error en un archivo a través de un try...catch
 */

const mensajeError =(nombre)=>{
    if(typeof nombre === "string"){
       return nombre; 
    }
    
    throw new Error('El valor debe ser de tipo string') 
}


try{
    logger.info('Se esta ejecutando de forma correcta')
}catch(e){
    logger.error('ERROR');
}

 console.log(mensajeError(9));  

