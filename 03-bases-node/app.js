const fs = require("fs");

const base = 3;
let salida = "";

const tablaDeMultiplicar = () => {
  for (let i = 1; i < 11; i++) {
    salida += `${base} x ${i} = ${base * i}\n`;
  }
  return salida;
}

console.clear();
console.log("==============================");
console.log(`      Tabla del: ${base}`);
console.log("==============================");
console.log(tablaDeMultiplicar());

fs.writeFile(`./03-bases-node/tabla-${base}.txt`, salida, (err) => {
  if(err) throw err;

  console.log(`Archivo de tabla-${base}.txt creado`)
})