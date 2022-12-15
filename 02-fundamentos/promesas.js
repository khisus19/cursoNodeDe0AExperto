const empleados = [
  {
    id: 1,
    nombre: "Fernando"
  },
  {
    id: 2,
    nombre: "Linda"
  },
  {
    id: 3,
    nombre: "Karen"
  }
];

const salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 1500
  }
];


const getEmpleado = ( id ) => {

  const promesa = new Promise((resolve, reject) => {

    const empleado = empleados.find( e => e.id === id)?.nombre;
    
    (empleado)
      ? resolve(empleado)
      : reject(`No existe el empleado con el id ${id}`);
  });
  return promesa;
}

const getSalario = (id) => {

  const salario = salarios.find(s => s.id === id)?.salario;

  const promesa = new Promise((resolve, reject) => {
    salario 
      ? resolve(salario)
      : reject(`No tenemos el salario de la id ${id}`);
  })
  return promesa
}

const id = 3 ;

/* getEmpleado(id)
  .then( empleado => console.log(empleado))
  .catch( err => console.log(err))
  
  
getSalario(id)
  .then( salario => console.log(salario))
  .catch( err => console.log(err)) */

let nombre

getEmpleado(id)
  .then( empleado => {
    nombre = empleado;
    return getSalario(id)
  })
  .then( salario => console.log(`El empleado con el nombre ${nombre} tiene un salario de: ${salario}`))
  .catch(err => console.log(err));