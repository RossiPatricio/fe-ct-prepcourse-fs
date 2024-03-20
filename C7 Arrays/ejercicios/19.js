function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  let count = arguments[0]
  
  if(arguments[0]) {
    for(let i=1; i<arguments.length; i++) {
      count = count * arguments[i];
    }
    return count;
  } else return 0;
}

module.exports = multiplicarArgumentos;
