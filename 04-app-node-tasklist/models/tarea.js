import { nanoid } from "nanoid";

class Tarea {

  id = "";
  desc = "";
  completadoEn = null;

  constructor( desc ) {

    this.id = nanoid();
    this.desc = desc;

  }

}


export default Tarea;