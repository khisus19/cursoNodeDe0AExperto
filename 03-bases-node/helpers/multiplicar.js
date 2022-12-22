const fs = require("fs");
const colors = require("colors");
let salida = "";

const crearArchivoDeMultiplicar = async (base = 5, listar) => {

  try {
    for (let i = 1; i < 11; i++) {
      // salida += `${base} x ${i} = ${base * i}\n`;
      salida += base.toString().red + " x ".cyan + i.toString().blue + " = " + (base * i).toString().green + "\n";
    }

    if(listar) {
      console.log("==============================".yellow);
      // console.log(`      Tabla del: ${base}`);
      console.log("      Tabla del: ".green + base.toString().red);
      console.log("==============================".yellow);
      console.log(salida);
    }

    fs.writeFileSync(`../03-bases-node/tabla-${base}.txt`, salida);


    return "Archivo " + ("tabla-" + base + ".txt").toString().rainbow + " creado";
  } catch (error) {
    throw error
  }
  

}


module.exports.crearArchivoDeMultiplicar = crearArchivoDeMultiplicar;