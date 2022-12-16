const { demandOption, options, boolean } = require("yargs");
const { crearArchivoDeMultiplicar } = require("./helpers/multiplicar");
const argv = require("yargs")
              .option("b", {
                alias: "base",
                type: "number",
                demandOption: true
              })
              .option("l", {
                alias: "listar",
                type: "boolean",
                demandOption: false,
                default: false
              })
              .check( (argv, options) => {
                if( isNaN(argv.b)) {
                  throw "La base debe ser numerica"
                }
                return true;
              })
              .argv;


console.clear();


// console.log(argv);


crearArchivoDeMultiplicar(argv.b, argv.l)
  .then(nombreArchivo => console.log(nombreArchivo))
  .catch(err => console.log(err))



