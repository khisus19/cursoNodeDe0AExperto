const fs = require("fs");
let salida = "";

const crearArchivoDeMultiplicar = async (base = 5) => {

  try {
    console.log("==============================");
    console.log(`      Tabla del: ${base}`);
    console.log("==============================");

    for (let i = 1; i < 11; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    console.log(salida);
    fs.writeFileSync(`../03-bases-node/tabla-${base}.txt`, salida);


    return `./03-bases-node/tabla-${base}.txt creado`;
  } catch (error) {
    throw error
  }
  

}


module.exports.crearArchivoDeMultiplicar = crearArchivoDeMultiplicar;