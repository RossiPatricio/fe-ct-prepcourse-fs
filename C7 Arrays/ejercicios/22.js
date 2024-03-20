function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let arr= []
  for(let i=0;i<11;i++) {
    arr.push(6*i);
  }
  return arr;
}

module.exports = tablaDelSeis;
