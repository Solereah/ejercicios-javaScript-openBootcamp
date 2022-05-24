class Estudiante{
    nombre = 'Sol'
    asignaturas = ['Javascript', 'HTML', 'CSS'];
    
     obtenDatos(){
        return {
            nombre : this.nombre,
            asignaturas: this.asignaturas
        }
    } 
}
const estudiante_uno = new Estudiante()
 console.log(estudiante_uno.obtenDatos());