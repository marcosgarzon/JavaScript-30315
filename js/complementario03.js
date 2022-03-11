let entrada1 = document.getElementById("entrada1");
let entrada2 = document.getElementById("entrada2");
let historial = document.getElementById("historial");
let total = [];

let suma = () => {
  total = +entrada1.value + +entrada2.value; 
  let listar = document.createElement("li");
  listar.innerHTML = `<li> ${entrada1.value} + ${entrada2.value} = ${total} </li>`;
  historial.appendChild(listar);
};

let resta = () => {
  total = +entrada1.value - +entrada2.value;
  let listar = document.createElement("li");
  listar.innerHTML = `<li> ${entrada1.value} - ${entrada2.value} = ${total} </li>`;
  historial.appendChild(listar);
};

let multiplica = () => {
  total = +entrada1.value * +entrada2.value;
  let listar = document.createElement("li");
  listar.innerHTML = `<li> ${entrada1.value} x ${entrada2.value} = ${total} </li>`;
  historial.appendChild(listar);
};

let divide = () => {
  total = +entrada1.value / +entrada2.value;
  let listar = document.createElement("li");
  listar.innerHTML = `<li> ${entrada1.value} / ${entrada2.value} = ${total} </li>`;
  historial.appendChild(listar);
};
