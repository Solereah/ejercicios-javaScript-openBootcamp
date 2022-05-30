
const nombre ='Sol'
const apellido='Lereah'

const persona={
    nombre: nombre,
    apellido: apellido,
}

//Almacena localStorage
localStorage.setItem('persona',JSON.stringify(persona))


//Almacena sessionStorage
/sessionStorage.setItem('persona', JSON.stringify(persona))


//Almacena cookies
const now = new Date()
document.cookie = `persona=${JSON.stringify(persona)};expires=${new Date(now.getTime() + 2 * 60000)}`


