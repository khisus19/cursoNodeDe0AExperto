import * as dotenv from 'dotenv' 
dotenv.config()


import { inquirerMenu, leerInput, listarLugares, pausaMenu } from "./helpers/inquirer.js"
import { Busquedas } from "./models/busquedas.js";



const main = async () => {

  const busquedas = new Busquedas();
  let opt;

  do {
    opt = await inquirerMenu()
    
    switch (opt) {
      case 1:
        // mostrar mensaje
        const termino = await leerInput("Ciudad: ");
        
        // Buscar los lugares
        const lugares = await busquedas.ciudad( termino );
        
        // Seleccionar el lugar
        const id = await listarLugares(lugares);
        const lugarSel = lugares.find( l => l.id === id)

        // Clima

        // Mostrar resultados
        console.log("\nInformación de la ciudad\n");
        console.log("Ciudad:", lugarSel.nombre);
        console.log("Lat:", lugarSel.lat);
        console.log("Long:", lugarSel.long);
        console.log("Temperatura:", );
        console.log("Mínima:", );
        console.log("Máxima:", );
        break;

      case 2:
        console.log("Este es tu historial")
        break;

      default:
        break;
    }

    if ( opt !== 0 ) await pausaMenu();

  } while(opt !== 0);




}


main();