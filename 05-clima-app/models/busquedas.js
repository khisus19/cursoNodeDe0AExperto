import fs from "fs";

import axios from "axios";

export class Busquedas {

  historial = [];
  dbPath = "./db/historial.json"

  constructor() {

    // TODO: leer db si existe
    this.leerDB()
  }

  get mapboxParams() {
    return {
      "access_token": process.env.MAPBOX_KEY,
      "limit": 5
    }
  }

  get openWeatherParams() {
    return {
      "appid": process.env.OPENWEATHER_KEY,
      "units": "metric",
      "lang": "en"
    }
  }

  async buscarCiudad( lugar = "" ){

    try {
      // petición http
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
        params: this.mapboxParams
      });

      const resp = await instance.get();
      return resp.data.features.map( lugar => ({
        id: lugar.id,
        nombre: lugar.place_name,
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
        temp: data.main.temp + "°C",
        feel: data.main.feels_like + "°C",
        min: data.main.temp_min + "°C",
        max: data.main.temp_max + "°C",
        hum: data.main.humidity + "%",
        desc: data.weather[0].description
      }

    } catch (error) {
      return null
    }
  }


  agregarHistorial( lugar = "") {

    // Prevenir duplicados
    this.historial.includes(lugar) || this.historial.unshift(lugar);

    this.historial = this.historial.splice(0,5)
    // Grabar en DB
    this.guardarDB();
  }

  guardarDB() {

    const payload = {
      historial: this.historial
    };

    fs.writeFileSync(this.dbPath, JSON.stringify(payload));

  }
  
  leerDB() {
    if (!fs.existsSync(this.dbPath)) {
      return null;
    } 

    const info = fs.readFileSync(this.dbPath, {encoding: "utf-8"})
    const data = JSON.parse(info)
    this.historial = data.historial;
  }
}

