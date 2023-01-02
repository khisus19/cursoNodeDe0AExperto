import colors from "colors";

import { inquirerMenu, pausaMenu, leerInput } from "./helpers/inquirer.js";
import { filtrarTareas, guardarDB, leerDB } from "./helpers/interaccionesDB.js";
import Tareas from "./models/tareas.js";


const main = async () => {

  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();
  // console.log("tareasDB", tareasDB);

  if( tareasDB ) {
    // Establecer las tareas
    tareas.cargarTareasFromArray(tareasDB)
  }

  // await pausaMenu();


  do {
    opt = await inquirerMenu();
    
    switch (opt) {
      case "1":
        // Crear opcion
        const desc = await leerInput("Descripción:");
        tareas.crearTarea(desc);
        break;

      case "2":
        tareas.listadoCompleto();
        break;

      case "3":
        
        break;

      case "4":
        console.log( filtrarTareas(tareas.listadoArr, null) );
        break;
    }


    guardarDB( tareas.listadoArr );

    await pausaMenu();

  } while( opt !== "0" );


}

main();

