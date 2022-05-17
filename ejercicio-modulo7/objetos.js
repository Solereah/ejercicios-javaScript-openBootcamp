
const datosPersonales={
    nombre: 'Sol',
    apellido: 'Lereah',
    edad: 42,
    altura:1.73,
    eresDesarrollador: true

}

const miEdad = datosPersonales.edad 

const datosPersonalesAmigas =[

    {    nombre: 'Sol',
    apellido: 'Lereah',
    edad: 42,
    altura:1.73,
    eresDesarrollador: true},
    {   nombre: 'Laura',
        apellido: 'Palmisciano',
        edad: 40,
        altura:1.70,
        eresDesarrollador: false
    },
    {   nombre: 'Celeste',
        apellido: 'Benetti',
        edad: 41,
        altura:1.68,
        eresDesarrollador: false
}

]
/*
const listaOrdenada = datosPersonalesAmigas.sort((a, b) =>{
    if (a.edad > b.edad){
        return -1
    }
    if(a.edad < b.edad){
        return 1
    }

    return 0

})
*/
const listaOrdenada = datosPersonalesAmigas.sort((a, b) =>b.edad - a.edad)
console.log(listaOrdenada);