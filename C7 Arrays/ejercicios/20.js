function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let start= array[0];
  for(let i=1; i<array.length; i++) {
    if (start != array[i]) {
      return false; 
    } else return true;
  }
}

module.exports = todosIguales;
