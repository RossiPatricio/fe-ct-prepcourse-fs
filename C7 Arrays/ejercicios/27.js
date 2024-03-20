function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  let string= "";
  for(let i=0; i<palabras.length; i++) {
    if (i === 0) {
      string += palabras[i];
    } else {
      string += " " + palabras[i];
    }
  }
  return string;
}

module.exports = dePalabrasAFrase;
