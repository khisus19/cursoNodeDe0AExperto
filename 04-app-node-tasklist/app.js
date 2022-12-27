import colors from "colors";

import { inquirerMenu } from "./helpers/inquirer.js";



console.clear();

const main = async () => {
  console.log("Hola, mundo");

  let opt = "";

  do {
    opt = await inquirerMenu();
    console.log({ opt });


  } while( opt !== "" );
}

main();

