const logger = require('./logger')

/*
Crea un nuevo proyecto de Node

- Instala la dependencia Winston

- En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

- Registra el error en un archivo a través de un try...catch
 */

const mensajeError =()=>{
  throw new Error('Este es un error personalizado') 
}


try{
    mensajeError()
}catch(e){
    logger.log('Error', e.toString());
}

  

