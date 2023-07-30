
/*function ropaEnStock( vestidoOpcion , CamperasOpcion ,jeanOpcion) {
    let opcionElegida = vestido && campera && jean  ;
    return opcionElegida;
}
 prompt ('Ingrese el producto para verificar Stock, \n Jean \n vestido \n campera ?');



let unidadesDeVestidos = [1, 5, 3];
let vestidoOpcion = ['Boho', 'Minimalista', 'Deportivo'];

prompt ('Opciones de Vestidos:'+ vestidoOpcion);
for (let i = 0; i < vestidoOpcion.length; i++) {
  console.log(`${vestidoOpcion[i]} - Unidades disponibles: ${unidadesDeVestidos[i]}`);
}

let unidadesDeCamperas= [ 1 ,2,4];
let camperasOpcion = [ 'invernal','media estacion'+ 'gaban'];

prompt ('Opciones de camperas :'+ camperasOpcion);
for (let i = 0; i < camperasOpcion.length; i++) {
  console.log(`${camperasOpcion[i]} - Unidades disponibles: ${unidadesDeCamperas[i]}`);
}


let unidadesJean = [ 2 ,0 ,8];
let jeanOpciones = ['oxford', 'palazo','overside'];
prompt ('Opciones de jean :'+ jeanOpciones);
for (let i = 0; i < jeanOpciones.length; i++) {
  console.log(`${jeanOpciones[i]} - Unidades disponibles: ${unidadesDeJeans[i]}`);
  
   codigo de prueba  que no logre que  funcionara */





  
// funcion  para llamra las variables  de opciones  para  verificar por  nombre 
  function ropaEnStock(vestidoOpcion, camperasOpcion, jeanOpciones) {
    let eleccionProducto = prompt('Ingrese el producto para verificar Stock:\n\nJean\nVestido\nCampera');
  
    
// condicional  elgir para ver el producto en stock 
    if (eleccionProducto.toLowerCase() === 'vestido') {
      mostrarStock(vestidoOpcion, unidadesDeVestidos);
    } else if (eleccionProducto.toLowerCase() === 'campera') {
      mostrarStock(camperasOpcion, unidadesDeCamperas);
    } else if (eleccionProducto.toLowerCase() === 'jean') {
      mostrarStock(jeanOpciones, unidadesDeJean);
    } else {
      alert('Opción no válida.');
    }
  }
   //  funcion para ver  las opciones por  nombre y  unidades
  function mostrarStock(opciones, unidades) {
    for (let i = 0; i < opciones.length; i++) {
      console.log(`${opciones[i]} - Unidades disponibles: ${unidades[i]}`);
    }
  }
  
  let unidadesDeVestidos = [1, 5, 3];
  let vestidoOpcion = ['Boho', 'Minimalista', 'Deportivo'];
  
  let unidadesDeCamperas = [1, 2, 4];
  let camperasOpcion = ['Invernal', 'Media Estación', 'Gaban'];
  
  let unidadesDeJean = [2, 0, 8];
  let jeanOpciones = ['Oxford', 'Palazo', 'Overside'];
  // variable que permite  que  funcione  el  primer funtion 
  ropaEnStock(vestidoOpcion, camperasOpcion, jeanOpciones);
  



