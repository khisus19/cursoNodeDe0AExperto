import axios from "axios";

export class Busquedas {

  historial = [ "Tegucigalpa", "Madrid", "San Jose"];

  constructor() {

    // TODO: leer db si existe
  }

  get mapboxParams() {
    return {
      "access_token": process.env.MAPBOX_KEY,
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
      return resp.data.features.map( lugar => ({
        id: lugar.id,
        nombre: lugar.place_name_es,
        long: lugar.center[0],
        lat: lugar.center[1]
      }))
      
      return []; // Retornar un array con los lugares

    } catch (error) {
      return [];
    }



  }


}

