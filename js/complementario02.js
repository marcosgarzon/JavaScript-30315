// Ejecutar: Armar lista
let arrOpcion = [];
let ListaDeCompras = () => {
  alert("Vamos a realizar una lista de compras");
  let term = "n";
  let agregar = null;
  while (term == "n") {
    agregar = prompt("Ingrese un producto");
    if (agregar != null) {
      arrOpcion.push(agregar);
    } else {
      alert("No siguió la consigna");
    }
    let contin = confirm("¿Desea agregar otro producto?");
    if (!contin) {
      term = "y";
      alert("La lista de compras es la siguiente: " + arrOpcion.join(",  "));
    }
  }
  document.getElementById(
    "lis"
  ).innerHTML = `Lista de compras: <li> ${arrOpcion.join("<li>")}`;
  return arrOpcion;
};

// Ejecutar: Ingresar precios
let impList = () => {
  class Precio {
    constructor(producto, valor) {
      this.producto = producto;
      this.valor = parseFloat(valor);
    }
  }
  let arr2 = [];
  for (const arrOpcions of arrOpcion) {
    let valor = prompt(`Costo de: ${arrOpcions}`);
    arr2.push(new Precio(arrOpcions, valor));
  }
  let total = 0;
  arr2.forEach((p) => {
    total += p.valor;
  });
  alert(total);
  document.getElementById("tot").innerHTML = `Precio final: $${total}`;
};
