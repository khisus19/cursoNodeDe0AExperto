import colors from "colors";

import { inquirerMenu, pausaMenu } from "./helpers/inquirer.js";



console.clear();

const main = async () => {
  console.log("Hola, mundo");

  let opt = "";

  do {
    opt = await inquirerMenu();
    console.log({ opt });

    await pausaMenu();
  } while( opt !== "0" );
}

main();

