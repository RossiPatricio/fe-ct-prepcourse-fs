function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let count = 0;
  for(let i=0; i<resultadosTest.length; i++) {
    count = count + resultadosTest[i];
  }
  return count / resultadosTest.length;
}

module.exports = promedioResultadosTest;
