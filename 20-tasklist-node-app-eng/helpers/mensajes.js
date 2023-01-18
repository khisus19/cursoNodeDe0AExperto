require("colors");

const mostrarMenu = () => {
  return new Promise(resolve => {

    console.clear();
    console.log("================================");
    console.log("       Select an option")
    console.log("================================\n");
  
    console.log(`${ "1.".green } Create a ToDo`);
    console.log(`${ "2.".green } List ToDos`);
    console.log(`${ "3.".green } List Completed ToDos`);
    console.log(`${ "4.".green } List Pending ToDos`);
    console.log(`${ "5.".green } Complete ToDo(s)`);
    console.log(`${ "6.".green } Delete ToDo`);
    console.log(`${ "0.".green } Exit\n`);
  
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    readLine.question("Select an option: ", (opt) => {
      readLine.close();
      resolve(opt);
    })

  })

}

const pausa = () => {

  return new Promise( resolve => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout
    }); 
  
    readLine.question(`\nPress ${ "ENTER".green } to continue\n`, (opt) => {
      readLine.close();
      resolve();
    })

  })
}

module.exports = {
  mostrarMenu,
  pausa
}