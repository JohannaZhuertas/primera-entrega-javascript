
// es un contador de prendas en stock 


let contraseña = "123456"

let intentos = 3
let contador = 1

while (contador <= intentos) {
  let ingresDeContraseña = prompt('ingrese contaseña:')

  if (ingresDeContraseña === contraseña) {
    alert(`ingreso Exitosos`)
    break
  } else {
    alert(`error en contarseña. ${contador}/${intentos}  \n  al maximo de intentos la cuenta sera bloqueada`)
    contador++

  }

}
// funcion  para llamra las variables  de opciones  para  verificar por  nombre 
function ropaEnStock(vestidoOpcion, camperasOpcion, jeanOpciones) {
  let eleccionProducto = prompt('Ingrese el producto para verificar Stock:\n\nJean\nVestido\nCampera')


  // condicional  elgir para ver el producto en stock 
  if (eleccionProducto.toLowerCase() === 'vestido') {
    mostrarStock(vestidoOpcion, unidadesDeVestidos)
  } else if (eleccionProducto.toLowerCase() === 'campera') {
    mostrarStock(camperasOpcion, unidadesDeCamperas)
  } else if (eleccionProducto.toLowerCase() === 'jean') {
    mostrarStock(jeanOpciones, unidadesDeJean)
  } else {
    alert('Opción no válida.')
  }
}
//  funcion para ver  las opciones por  nombre y  unidades
function mostrarStock(opciones, unidades) {
  for (let i = 0; i < opciones.length; i++) {
    console.log(`${opciones[i]} - Unidades disponibles: ${unidades[i]}`)
  }
}

let unidadesDeVestidos = [1, 5, 3];
let vestidoOpcion = ['Boho', 'Minimalista', 'Deportivo']

let unidadesDeCamperas = [1, 2, 4]
let camperasOpcion = ['Invernal', 'Media Estación', 'Gaban']

let unidadesDeJean = [2, 0, 8]
let jeanOpciones = ['Oxford', 'Palazo', 'Overside']
// variable que permite  que  funcione  el  primer funtion 
ropaEnStock(vestidoOpcion, camperasOpcion, jeanOpciones)

if (intentos > contador) {

}




/*
 
alert ("calcula cuantos vasos de agua debes beber al dia")

let peso =prompt ("ingrese  su peso")

let  resultadoDeCalculadora = peso / 7 
alert (`debes beber aproximademente ${resultadoDeCalculadora} vasos de agua de 250ml`)

*/
