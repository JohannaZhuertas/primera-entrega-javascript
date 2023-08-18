
//SEGUNDA ENTREGA

const usuario = "maria";
const contraseña = 123456;

let contraseñaIngresada = prompt("Bienvenida Maria\nIngresa contraseña");

if (parseInt(contraseñaIngresada) === contraseña) {
  alert("Ingreso exitoso");
} else {

  let intentos = 1;
  for (; intentos <= 3; intentos++) {
    contraseñaIngresada = prompt("La contraseña es incorrecta. Se bloqueará en el tercer intento");
    if (parseInt(contraseñaIngresada) === contraseña) {
      alert("Contraseña válida");
      break;
    }
  }

  if (intentos > 3) {
    alert("Intentos fallidos\nBloqueamos tu cuenta por seguridad");
  }
}

const producto1 = {
  nombre: "rodillo de jade",
  unidades: 2,
  material: "cuarzo",
  precio: 1500,
  colores: ["rosa", "magenta", "violeta"]
};

const producto2 = {
  nombre: "masajedora electrico",
  unidades: 1,
  material: "cuarzo",
  precio: 1500,
  colores: ["magenta", "verde"]
};

const producto3 = {
  nombre: "Gua sha",
  unidades: 1,
  material: "cuarzo",
  precio: 999,
  colores: ["amarillo", "verde", "magenta"]
};

const producto4 = {
  nombre: "bolsas de masaje",
  unidades: 8,
  material: "silicona",
  precio: 1700,
  colores: ["amarillo", "magenta", "verde"]
};

const miArray = [producto1, producto2, producto3, producto4];

const productosCaros = miArray.filter(producto => producto.precio > 1300);
console.log("Mostrar los productos superiores a 1300:", productosCaros);

for (let i = 0; i < miArray.length; i++) {
  console.log("Mostrar", miArray[i]);
}
 

function nombreDeProductosBuscados() {
  const productosBuscados = prompt("Ingrese los productos a buscar, separados por comas");
  return productosBuscados.split(',').map(producto => producto.trim());
}

const productosABuscar = nombreDeProductosBuscados();

for (const producto of productosABuscar) {
  for (const item of miArray) {
    if (item.nombre === producto) {
      console.log(`Nombre de producto buscado: ${producto}, Valor: ${item.unidades}`);
      break;
    }
  }
}










































/////////////////////////// Primera   entrega ////////////////////////
// es un contador de prendas en stock 


/*let contraseña = "123456"

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
