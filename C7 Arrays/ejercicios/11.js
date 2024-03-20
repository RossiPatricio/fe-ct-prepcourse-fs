function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let duplicados= [];
  for(let i=0; i<array.length; i++) {
    duplicados.push(array[i]*2);
  }
  return duplicados;
}

module.exports = duplicarElementos;
