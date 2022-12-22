const fs = require("fs");
const colors = require("colors");
let salida = "";
let consola = "";

const crearArchivoDeMultiplicar = async (base = 5, listar, hasta = 10) => {

  try {
    for (let i = 1; i < hasta + 1; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base.toString().red} x ${i.toString().blue} = ${(base * i).toString().green}\n`;
    }

    if(listar) {
      console.log("==============================".yellow);
      // console.log(`      Tabla del: ${base}`);
      console.log("      Tabla del: ".green + base.toString().red);
      console.log("==============================".yellow);
      console.log(consola);
    }

    fs.writeFileSync(`../03-bases-node/tabla-${base}.txt`, salida);


    return "Archivo " + ("tabla-" + base + ".txt").toString().rainbow + " creado";
  } catch (error) {
    throw error
  }
  

}


module.exports.crearArchivoDeMultiplicar = crearArchivoDeMultiplicar;