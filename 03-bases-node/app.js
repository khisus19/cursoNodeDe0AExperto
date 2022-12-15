const base = 4;

const tablaDeMultiplicar = () => {
  for (let i = 1; i < 11; i++) {
    console.log(`${base} x ${i} = ${base * i}`);
  }
}

console.clear();
tablaDeMultiplicar();