const { crearArchivoDeMultiplicar } = require("./helpers/multiplicar")
const base = 6;

console.clear();

crearArchivoDeMultiplicar(base)
  .then(nombreArchivo => console.log(nombreArchivo, "creado"))
  .catch(err => console.log(err))

