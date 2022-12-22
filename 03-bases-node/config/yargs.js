const { demandOption, options, boolean } = require("yargs");

const argv = require("yargs")
              .option("b", {
                alias: "base",
                type: "number",
                demandOption: true,
                describe: "Es la base de la tabla de multiplicar"
              })
              .option("l", {
                alias: "listar",
                type: "boolean",
                default: false,
                describe: "Muestra en consola la tabla de multiplicar"
              })
              .check( (argv, options) => {
                if( isNaN(argv.b)) {
                  throw "La base debe ser numerica"
                }
                return true;
              })
              .argv;


module.exports = argv;