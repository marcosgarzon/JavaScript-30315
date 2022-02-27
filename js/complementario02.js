//pasos a seguir:

// boton 1 (funcion suprema): Escribir en el html y guardar en un arreglo una lista de compras
// boton 2: pedir los elementos del arreglo y agregarles un precio
// boton 3: dar una alerta con el costo final de la compra e imprimirlo en el html

// boton 1: Escribir en el html y guardar en un arreglo una lista de compras


let ListaDeCompras = () => {
    alert("Vamos a realizar un sorteo: Ingrese a los participantes");
    let arrOpcion = [];
    let term = "n";
    let agregar = prompt("Ingrese un participante");
    arrOpcion.push(agregar);
    while (term == "n") {
      agregar = prompt("Ingrese otro participante");
      if (agregar != null) {
        arrOpcion.push(agregar);
      } // condicional 1
      else {
        alert(
          "Tocar ESC repetidas veces evitó ingresar participantes, se necesitan 2 al menos para hacer un sorteo"
        );
      }
      let contin = confirm("¿Desea agregar otro participante?"); // botón para agregar otro participante o finalizar
      if (!contin) {
        term = "y";
        alert(
          "Se elegirá entre las siguientes personas: " + arrOpcion.join(",  ")
        ); // condición de salida cuando presione la opción cancelar
        let final = Math.floor(Math.random() * arrOpcion.length); // calculo aleatorio basado en el largo del arreglo
        alert("El ganador elegido al azar es: " + arrOpcion[final]);
        document.getElementById("lis").innerHTML = `${arr.join(", ")}`
      }
    } //termina ciclo
  }; //termina funcion