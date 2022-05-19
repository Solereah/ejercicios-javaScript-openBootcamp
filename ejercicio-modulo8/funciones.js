/*
Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos
*/

function verdadero(){
    return true
}
verdadero()

const miAsync = async() =>{
    return setTimeout(()=> console.log('Hola soy una promesa'), 5000)
}

miAsync()

function* genIdPares(){
    let id = 0
    while(true){
        yield id= id+2
    }
}

const gen = genIdPares()
console.log(gen.next());