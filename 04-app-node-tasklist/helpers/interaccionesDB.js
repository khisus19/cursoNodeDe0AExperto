import fs from 'fs';

const path = "./db/data.json"


export const guardarDB = ( data ) => {
  fs.writeFileSync(path, JSON.stringify(data) );
}

export const leerDB = () => {

  if( !fs.existsSync(path)) {
    return null
  }

  const info = fs.readFileSync(path, {encoding: "utf-8"});
  const data = JSON.parse(info);

  return data;
}
