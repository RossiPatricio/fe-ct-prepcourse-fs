function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let result= 0;
  for(let i=0; i<arrayOfNums.length; i++) {
    result += arrayOfNums[i];
  }
  return result;
}

module.exports = agregarNumeros;
