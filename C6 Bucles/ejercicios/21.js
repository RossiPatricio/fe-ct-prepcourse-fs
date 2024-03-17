function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  return (numero > 0) && ((numero & (numero - 1)) === 0);
}

module.exports = esPotenciaDeDos;
