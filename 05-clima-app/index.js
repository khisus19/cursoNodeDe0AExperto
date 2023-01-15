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
        const { temp, feel, min, max, hum, desc} = await busquedas.temp(lugarSel.lat, lugarSel.lon);

        // Mostrar resultados
        console.log("\nInformación de la ciudad\n");
        console.log("Ciudad:", lugarSel.nombre);
        console.log("Lat:", lugarSel.lat);
        console.log("Long:", lugarSel.lon);
        console.log("Temperatura:", temp, "°C");
        console.log(`Temperatura: ${temp} °C`);
        console.log("Sensación Térmica:", feel);
        console.log("Mínima:", min);
        console.log("Máxima:", max);
        console.log("Humedad:", hum);
        console.log("Descripción:", desc);
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