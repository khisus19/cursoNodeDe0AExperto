import colors from "colors";

import Tarea from "./tarea.js";



class Tareas {
  
  _listado = {};


  get listadoArr() {

    const listado = [];
    Object.keys(this._listado).forEach(key => {
      const tarea = this._listado[key];
      listado.push(tarea)
    })

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  borrarTarea( id = "" ){
    if (this._listado[id]){
      delete this._listado[id];
    }
  }

  cargarTareasFromArray( tareas = [] ) {
    
    tareas.forEach(tarea => {
      this._listado[tarea.id] = tarea;
    })
  }


  crearTarea( desc = "" ){
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    this.listadoArr.map( (tarea, index) => {
      let tareaColor = tarea.completadoEn ? tarea.completadoEn.toString().green : "No completada".red;
      console.log( ` ${(index + 1).toString().blue}. ${tarea.desc} :: ${tareaColor}`)
    })
  }

  listadoFiltrado(isCompleted = true) {
    if(isCompleted) {
      this.listadoArr
        .filter(tarea => tarea.completadoEn )
        .map((tarea, index) => console.log( ` ${( (index + 1) + ".").blue} ${tarea.desc}` ));

    } else {
      this.listadoArr
        .filter(tarea => tarea.completadoEn === null)
        .map((tarea, index) => console.log( ` ${( (index + 1) + ".").blue} ${tarea.desc}` ));
    }
  }

}

export default Tareas;