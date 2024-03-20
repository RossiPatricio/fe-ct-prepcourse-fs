function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let result= [];
  for(let i=0; i<array.length; i++) {
    result.push(array[i].toUpperCase());
  }
  return result;
}

module.exports = convertirStringAMayusculas;
