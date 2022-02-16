function boton1 () {
    alert ("Este algoritmo compara 2 números y determina cual es el mayor:");
        let entrada = parseInt(prompt("Ingrese el primer número"));
        let entrada2 = parseInt(prompt("Ingrese el segundo número"));
            if (entrada > entrada2){
            alert("El primer número que ingresó es el mayor es decir: "+entrada);
            }
             else if (entrada < entrada2){
            alert("El segundo número que ingresó es el mayor es decir: "+entrada2);
            }
            else if (entrada == entrada2){
            alert("Ingresó el mismo número en ambas ocasiones, son iguales");
            }
            else{
            alert("No estás siguiendo la consigna de este algoritmo");
            }
        };

function boton2() {
    alert("Este algoritmo permite contar cuantas veces se repite una letra dentro de una palabra o texto")
    let texto1 = prompt("Ingrese una palabra");
    let arrTexto1 = texto1.split("");
    let letra1 = prompt("Ingrese la letra que desee contar");
    let contador = 0;
    for (let i = 0; i <= texto1.length; i++) {
        if (arrTexto1[i] == letra1){
            contador+=1
        }
        else{
        }       
    }
    return alert("la palabra (o texto) "+"\""+texto1+"\""+" repite "+"\""+contador+"\""+" veces la letra "+"\""+letra1+"\"");
};
