import { nanoid } from "nanoid";

class Tarea {

  id = "";
  desc = "";
  completadaEn = null;

  constructor( desc ) {

    this.id = nanoid();
    this.desc = desc;

  }

}


export default Tarea;