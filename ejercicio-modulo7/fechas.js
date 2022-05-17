const fechaHoy = new Date()
const miNacimiento = new Date(1979, 6, 30)
const hoyMasTarde = fechaHoy > miNacimiento

const diaNacimiento = miNacimiento.getDate()
const mesNacimiento = miNacimiento.getMonth()+1
const anyoNacimiento = miNacimiento.getFullYear()
