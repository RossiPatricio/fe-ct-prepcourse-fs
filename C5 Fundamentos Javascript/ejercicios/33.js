function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if(numero <= 1) {
    return false;
 }
 var numbers = [2,3,4,5,6,7,8,9]
 for(var i=0; i<numbers.length; i++) {
    if(numero === numbers[i]) {
       continue;
    } else if (numero % numbers[i] === 0) {
       return false;
    }
 }
 return true;
}

module.exports = esNumeroPrimo;
