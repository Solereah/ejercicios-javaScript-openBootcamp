//Almacena localStorage
localStorage.setItem('nombre','Sol')
localStorage.setItem('apellido', 'Lereah')
localStorage.setItem('persona', JSON.stringify({nombre:'Sol', apellido: 'Lereah'}))
console.log(localStorage.getItem('persona'))

//Almacena sessionStorage
sessionStorage.setItem("persona", JSON.stringify({ nombre: 'Sol', apellido: 'Lereah'})
)

//Almacena cookies
document.cookie = 'nombre = Sol; expires= Mon, 30 May 2022 10:13:00 UTC;'


