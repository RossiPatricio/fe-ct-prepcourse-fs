function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  // Si fecha es una instancia de Date, simplemente verificamos si es válida
  if (fecha instanceof Date && !isNaN(fecha)) {
    return true;
  }

  // Expresión regular para verificar el formato xx/xx/xxxx
  const regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;

  // Verificar si la fecha tiene el formato correcto
  if (!regexFecha.test(fecha)) {
    return false;
  }

  // Extraer los componentes de la fecha
  const [day, month, year] = fecha.split("/").map(Number);

  // Crear un objeto Date con los componentes de la fecha
  const dateObject = new Date(year, month - 1, day);

  // Verificar si los componentes de la fecha son iguales a los valores proporcionados y si el objeto Date resultante es válido
  return (
    dateObject.getDate() === day &&
    dateObject.getMonth() === month - 1 &&
    dateObject.getFullYear() === year &&
    dateObject.getDate() === Number(day) &&
    dateObject.getMonth() === Number(month) - 1 &&
    dateObject.getFullYear() === Number(year)
  );
}

module.exports = esFechaValida;