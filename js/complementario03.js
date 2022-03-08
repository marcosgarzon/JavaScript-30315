let entrada1 = document.getElementById("entrada1");
let entrada2 = document.getElementById("entrada2");
let historial = document.getElementById("historial");

let suma = () => {
  let ent1 = [];
  let ent2 = [];
  let total = [];
  ent1.push(entrada1.value);
  ent2.push(entrada2.value);
  total = +ent1 + +ent2;
  let listar = document.createElement("li");
  listar.innerHTML = `<li> ${ent1} + ${ent2} = ${total} </li>`;
  historial.appendChild(listar);
};

let resta = () => {
  let ent1 = [];
  let ent2 = [];
  let total = [];
  ent1.push(entrada1.value);
  ent2.push(entrada2.value);
  total = +ent1 - +ent2;
  let listar = document.createElement("li");
  listar.innerHTML = `<li> ${ent1} - ${ent2} = ${total} </li>`;
  historial.appendChild(listar);
};

let multiplica = () => {
  let ent1 = [];
  let ent2 = [];
  let total = [];
  ent1.push(entrada1.value);
  ent2.push(entrada2.value);
  total = +ent1 * +ent2;
  let listar = document.createElement("li");
  listar.innerHTML = `<li> ${ent1} x ${ent2} = ${total} </li>`;
  historial.appendChild(listar);
};

let divide = () => {
  let ent1 = [];
  let ent2 = [];
  let total = [];
  ent1.push(entrada1.value);
  ent2.push(entrada2.value);
  total = +ent1 / +ent2;
  let listar = document.createElement("li");
  listar.innerHTML = `<li> ${ent1} / ${ent2} = ${total} </li>`;
  historial.appendChild(listar);
};
