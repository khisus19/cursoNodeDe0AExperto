import { inquirerMenu, leerInput, pausaMenu } from "./helpers/inquirer.js"
import { Busquedas } from "./models/busquedas.js";


const main = async () => {

  const busquedas = new Busquedas();
  let opt;
  

  do {
    opt = await inquirerMenu()
    
    switch (opt) {
      case 1:
        // mostrar mensaje
        const lugar = await leerInput("Ciudad: ");
        await busquedas.ciudad( lugar )

        // Buscar los lugares

        // Seleccionar el lugar

        // Clima

        // Mostrar resultados
        console.log("\nInformación de la ciudad\n");
        console.log("Ciudad:", );
        console.log("Lat:", );
        console.log("Lng:", );
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