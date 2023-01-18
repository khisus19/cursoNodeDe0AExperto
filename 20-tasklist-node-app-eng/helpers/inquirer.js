import inquirer from "inquirer";
import colors from "colors";

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿What do you like to do?",
    choices: [
      {
        value: "1",
        name: `${ "1.".yellow } Create a ToDo`
      },
      {
        value: "2",
        name: `${ "2.".yellow } List ToDos`
      },
      {
        value: "3",
        name: `${ "3.".yellow } List Completed ToDos`
      },
      {
        value: "4",
        name: `${ "4.".yellow } List Pending ToDos`
      },
      {
        value: "5",
        name: `${ "5.".yellow } Complete ToDo(s)`
      },
      {
        value: "6",
        name: `${ "6.".yellow } Delete ToDo`
      },
      {
        value: "0",
        name: `${ "0.".yellow } Exit\n`
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
  console.log("       Select an option".italic.white)
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
          return "Please enter a valid value";
        }
        return true;
      }
    }
  ]

  const { desc } = await inquirer.prompt(question);
  return desc;
}

const listadoTareasBorrar = async ( tareas = [] ) => {

  const choices = tareas.map( (tarea, i) => {
    return {
      value: tarea.id,
      name: `${((i + 1) + ".").blue} ${tarea.desc}`
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
      message: "Borrar",
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
  listadoTareasBorrar, 
  confirmar,
  mostrarListadoChecklist
};
