//pasos a seguir:

// boton 1 (funcion suprema): Escribir en el html y guardar en un arreglo una lista de compras
// boton 2: pedir los elementos del arreglo y agregarles un precio
// boton 3: dar una alerta con el costo final de la compra e imprimirlo en el html

// boton 1: Escribir en el html y guardar en un arreglo una lista de compras

let arrOpcion = [];

let ListaDeCompras = () => {
    alert("Vamos a realizar una lista de compras");
    
    let term = "n";
    let agregar = null;

    while (term == "n") {
      agregar = prompt("Ingrese un producto");
      if (agregar != null) {
        arrOpcion.push(agregar);
      } // condicional 1
      else {
        alert(
          "No siguió la consigna"
        );
      }
      let contin = confirm("¿Desea agregar otro producto?"); // botón para agregar otro participante o finalizar
      if (!contin) {
        term = "y";
        alert(
          "La lista de compras es la siguiente: " + arrOpcion.join(",  ")
        ); // condición de salida cuando presione la opción cancelar
        
      
      }
    } //termina ciclo
    
      document.getElementById("lis").innerHTML =  `Lista de compras: <li> ${arrOpcion.join("<li>")}`;
      
    
    return arrOpcion;
  }; //termina funcion
 
  


let impList = () => {

  // para arriba no escribas nada


  class Precio{
    constructor(producto, valor){
        this.producto = producto
        this.valor = parseFloat(valor)
    }
}



let arr2 = [];

for (const arrOpcions of arrOpcion) {
    let valor = prompt(`Costo de: ${arrOpcions}`)
    arr2.push(new Precio(arrOpcions, valor))
}



let total = 0
arr2.forEach( p => {
    total += p.valor
})

alert(total);

// hasta aca no pongas mas cosas

document.getElementById("tot").innerHTML =  `Precio final: $${total}`;

};

/*
  class Grade{
    constructor(name, score){
        this.name = name
        this.score = parseInt(score)
    }
}

let subjects = ['Matematica', 'Fisica', 'Química', 'Artes']
let grades = []

for (const subject of subjects) {
    let score = prompt(`Calificación de ${subject}`)
    grades.push(new Grade(subject, score))
}

console.log(grades);

let total = 0
grades.forEach( g => {
    total += g.score
})

console.log('promedio: ', total/grades.length);

*/



 















  // HTMLAnchorElement.onClick esto va en el botón