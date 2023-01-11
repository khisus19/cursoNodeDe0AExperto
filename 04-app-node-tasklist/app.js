import colors from "colors";

import { inquirerMenu, pausaMenu, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist } from "./helpers/inquirer.js";
import { guardarDB, leerDB } from "./helpers/interaccionesDB.js";
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

      case "3": // Listar Completadas
        tareas.listadoFiltrado();
        break;

      case "4": // Listar Pendientes
        tareas.listadoFiltrado( false );
        break;

      case "5": // Completar tareas
        const ids = await mostrarListadoChecklist(tareas.listadoArr);
        tareas.toggleCompletadas(ids);
        break;

      case "6": //Borrar
        const id = await listadoTareasBorrar( tareas.listadoArr );
        const ok = await confirmar("¿Esta seguro?");
        if(ok) {
          tareas.borrarTarea(id)
        }
        break;
    }


    guardarDB( tareas.listadoArr );

    await pausaMenu();

  } while( opt !== "0" );


}

main();

