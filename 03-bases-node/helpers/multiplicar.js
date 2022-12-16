const fs = require("fs");
let salida = "";

const crearArchivoDeMultiplicar = async (base = 5, listar) => {

  try {
    for (let i = 1; i < 11; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if(listar) {
      console.log("==============================");
      console.log(`      Tabla del: ${base}`);
      console.log("==============================");
      console.log(salida);
    }

    fs.writeFileSync(`../03-bases-node/tabla-${base}.txt`, salida);


    return `Archivo tabla-${base}.txt creado`;
  } catch (error) {
    throw error
  }
  

}


module.exports.crearArchivoDeMultiplicar = crearArchivoDeMultiplicar;