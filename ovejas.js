function contarOvejas(ov) {
  // aquí tu magia
  let ovejasFiltrados = [];
  ov.forEach((el) => {
    if (el.color === "rojo") {
      if (el.name.includes("a")) {
        if (el.name.indexOf("N") >= 0) {
          ovejasFiltrados.push(el);
        }
      }
    }
  });
  return ovejasFiltrados;
}

const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

console.log(contarOvejas(ovejas));
