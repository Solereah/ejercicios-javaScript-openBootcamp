class Estudiante{
    nombre = 'Sol'
    asignaturas = ['Javascript', 'HTML', 'CSS'];
    
     obtenDatos(){
        const nuevo_estudiante = new Estudiante()
        return nuevo_estudiante
        } 


}
const estudiante_uno = new Estudiante()
 console.log(estudiante_uno.obtenDatos());