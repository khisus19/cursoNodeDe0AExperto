import colors from "colors";
import * as dotenv from 'dotenv' ;
dotenv.config();


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
        const termino = await leerInput("City: ");
        
        // Buscar los lugares
        const lugares = await busquedas.buscarCiudad( termino );
        
        // Seleccionar el lugar
        const id = await listarLugares(lugares);
        if ( id === "0" ) continue;

        const lugarSel = lugares.find( l => l.id === id)

        // Guardar en DB
        busquedas.agregarHistorial(lugarSel.nombre);

        // Clima
        const { temp, feel, min, max, hum, desc} = await busquedas.temp(lugarSel.lat, lugarSel.lon);

        // Mostrar resultados
        console.log("\nCity's Information\n".magenta);
        console.log("City:", lugarSel.nombre.magenta);
        console.log("Lat:", lugarSel.lat);
        console.log("Lon:", lugarSel.lon);
        console.log("Temperature:", temp.magenta);
        console.log("Feels Like:", feel.magenta);
        console.log("Minimun Temperature:", min.magenta);
        console.log("Maximun Temperature:", max.magenta);
        console.log("Humidity:", hum.magenta);
        console.log("Description:", desc.magenta);
        break;

      case 2:
        if (busquedas.historial.length === 0) {
          console.log("You haven't search anything");
        } else {
          busquedas.historial.forEach( (lugar, i) => {
            const idx = `${ i + 1 }.`.green;
            console.log(`${idx} ${lugar}`)
          })
        }
        break;

      default:
        break;
    }

    if ( opt !== 0 ) await pausaMenu();

  } while(opt !== 0);

}


main();