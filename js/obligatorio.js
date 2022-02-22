let inde = () => {
  alert(
    "Ingrese 2 opciones o más y el algoritmo elegirá 1 por usted de forma aleatorea"
  );
  let arrOpcion = [];
  let term = "n";
  let agregar = prompt("Ingrese una opción"); 
  arrOpcion.push(agregar);
  while (term == "n") {
    agregar = prompt("Ingrese otra opción");
    if (agregar != null) {
      arrOpcion.push(agregar);
    } // condicional 1  
    let contin = confirm("¿Desea agregar otra opción?"); // botón para agregar otra opción o finalizar
    if (!contin) {
      term = "y";
      alert(
        "Se elegirá entre las siguientes opciones: " + arrOpcion.join(",  ")
      ); // condición de salida cuando apretas cancelar en el botón
      let final = Math.floor(Math.random() * arrOpcion.length);  // calculo aleatoreo basado en el largo del arreglo
      alert("La opción elegida aleatoreamente es: " + arrOpcion[final]);
    } 
  } //termina ciclo
}; //termina funcion



