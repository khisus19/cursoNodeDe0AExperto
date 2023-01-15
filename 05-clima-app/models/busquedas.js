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

  get openWeatherParams() {
    return {
      "appid": process.env.OPENWEATHER_KEY,
      "units": "metric",
      "lang": "es"
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
        lon: lugar.center[0],
        lat: lugar.center[1]
      }))
      

    } catch (error) {
      return [];
    }

  }

  async temp ( lat = "", lon = "") {

    try {
      // petición http
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }`,
        params: this.openWeatherParams
      });

      const { data } = await instance.get();
      return { 
        temp: data.main.temp,
        feel: data.main.feels_like,
        min: data.main.temp_min,
        max: data.main.temp_max,
        hum: data.main.humidity,
        desc: data.weather[0].description
      }
      

    } catch (error) {
      throw error
    }




  }


}

