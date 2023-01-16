import inquirer from "inquirer";
import colors from "colors";

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "What do you wish to do?",
    choices: [
      {
        value: 1,
        name: `${ "1.".yellow } Search a place`
      },
      {
        value: 2,
        name: `${ "2.".yellow } History`
      },
      {
        value: 0,
        name: `${ "3.".yellow } Exit`
      }
    ]
  }
];

const pausaOpt = [
  {
    type: "input",
    name: "pausa",
    message: `Press ${ "enter".green } to continue`
  }
]

const inquirerMenu = async () => {

  console.clear();
  console.log("================================".green);
  console.log("     Select an option".italic.white)
  console.log("================================\n".green);

  const { opcion } = await inquirer.prompt(preguntas)

  return opcion;
}

const pausaMenu = async () => {
  
  console.log("\n");
  return await inquirer.prompt(pausaOpt);

}

const leerInput = async( message ) => {

  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate( value ) {
        if(value.length === 0) {
          return "Please, enter a search";
        }
        return true;
      }
    }
  ]

  const { desc } = await inquirer.prompt(question);
  return desc;
}

const listarLugares = async ( lugares = [] ) => {

  const choices = lugares.map( (lugar, i) => {
    return {
      value: lugar.id,
      name: `${((i + 1) + ".").blue} ${lugar.nombre}`
    }
  });

  choices.unshift({
    value: "0",
    name: "0.".blue + " Cancel"
  });

  const preguntas = [
    {
      type: "list",
      name: "id",
      message: "Select a place",
      choices
    }
  ]

  const { id } = await inquirer.prompt(preguntas);
  return id;
}

const confirmar = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message
    }
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;
}

const mostrarListadoChecklist = async ( tareas = [] ) => {

  const choices = tareas.map( (tarea, i) => {
    return {
      value: tarea.id,
      name: `${((i + 1) + ".").blue} ${tarea.desc}`,
      checked: ( tarea.completadaEn ) ? true : false
    }
  });

  const pregunta = [
    {
      type: "checkbox",
      name: "ids",
      message: "Select",
      choices
    }
  ]

  const { ids } = await inquirer.prompt(pregunta);
  return ids;
}

export { 
  inquirerMenu, 
  pausaMenu, 
  leerInput, 
  listarLugares, 
  confirmar,
  mostrarListadoChecklist
};
