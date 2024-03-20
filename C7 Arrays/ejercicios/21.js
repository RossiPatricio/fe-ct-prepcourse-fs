function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let arr= [];
  for(let i=0; i<array.length; i++) {
    if (["Enero", "Marzo", "Noviembre"].includes(array[i])) {
      arr.push(array[i]);
    } else continue;
  }

  if(arr.length !== 3) {
    return "No se encontraron los meses pedidos";
  } else return arr;
}

module.exports = mesesDelAño;
