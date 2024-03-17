function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  count= a;
  for(let i=a+1; i<=b; i++) {
    count *= i
  }
  count = Math.abs(count);
  return count;
}

module.exports = productoEntreNúmeros;