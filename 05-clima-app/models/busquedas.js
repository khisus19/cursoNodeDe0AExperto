import axios from "axios";

export class Busquedas {

  historial = [ "Tegucigalpa", "Madrid", "San Jose"];

  constructor() {

    // TODO: leer db si existe
  }

  get mapboxParams() {
    return {
      "access_token": "pk.eyJ1Ijoia2hpc3VzMTkiLCJhIjoiY2xjdGNlOGswMDA1NjNycDV1aGk2ZzFtZyJ9.6LKCLy1p9_UBt1FWu3_njQ",
      "limit": 5,
      "language": "es"
    }
  }

  async ciudad( lugar = "" ){

    try {
      // petición http
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
        params: this.mapboxParams
      });

      const resp = await instance.get();
      console.log(resp.data);
      
      return []; // Retornar un array con los lugares

    } catch (error) {
      return [];
    }



  }


}

