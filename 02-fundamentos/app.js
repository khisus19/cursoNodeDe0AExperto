const getUsuarioByID = ( id, callback) => {

  const user = {
    id,
    nombre: "Jesus"
  }

  setTimeout(() => {
    callback(user);
  }, 1500);

}

getUsuarioByID( 10, (usuario) => {
  console.log(usuario.id);
  console.log(usuario.nombre.toUpperCase());
});