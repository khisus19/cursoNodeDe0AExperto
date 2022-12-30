import colors from "colors";

import { inquirerMenu, pausaMenu, leerInput } from "./helpers/inquirer.js";
import Tareas from "./models/tareas.js";


const main = async () => {

  let opt = "";
  const tareas = new Tareas();

  do {
    opt = await inquirerMenu();
    
    switch (opt) {
      case "1":
        // Crear opcion
        const desc = await leerInput("Descripción:");
        tareas.crearTarea(desc);
        break;

      case "2":
        console.log( tareas.listadoArr );
        break;

      case "3":
        
        break;
    }

    await pausaMenu();

  } while( opt !== "0" );


}

main();

