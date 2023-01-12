import inquirer from "inquirer";
import colors from "colors";

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer?",
    choices: [
      {
        value: 1,
        name: `${ "1.".yellow } Buscar lugar`
      },
      {
        value: 2,
        name: `${ "2.".yellow } Historial`
      },
      {
        value: 0,
        name: `${ "3.".yellow } Salir`
      }
    ]
  }
];

const pausaOpt = [
  {
    type: "input",
    name: "pausa",
    message: `Presione ${ "enter".green } para continuar`
  }
]

const inquirerMenu = async () => {

  console.clear();
  console.log("================================".green);
  console.log("     Seleccione una opción".italic.white)
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
          return "Por favor ingrese un valor";
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
    name: "0.".blue + " Cancelar"
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
      message: "Seleccione",
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
