var telefono = new Object();

$(document).ready( function(){
    //setValores();
    //setMarca();
    //setModelo();
    //console.log("Getters:");
    //console.log(getMarca());
    //console.log(getModelo());
    //logicos();
    ciclos();
});

function setMarca(){
    telefono.marca = "Hawei";

}

function setModelo(){
    telefono.modelo = "P40";
}

function getMarca(){
    return telefono.marca;
}

function getModelo(){
    return telefono.modelo;
}

var x;
var y;
var z;
function setValores(){
    x = prompt("Valor del primer numero: ");
    y = prompt("Valor del segundo numero: ");
    console.log(suma(x,y));
}

function suma(numero1, numero2){
z = Number(numero1) + Number(numero2);
return z;
}

function logicos(){
    var f = '1';
    var e = 4;
    var g = 10;
    if (f == 1){
        console.log("entro")
    }
    else{
        console.log("Salio")
    }

    if (f === 1){
        console.log("entro");
    }
    else{
        console.log("salio");
    }

    if (g == 10 && e ==4){
        console.log("entro");
    }
    else{
        console.log("salio");
    } 
    
    if (g == 8 || e ==4){
        console.log("entro");
    }
    else{
        console.log("salio");
    }      

}

function ciclos() {
    var arreglo = [50, 30, 22, 15, 8, 3, 9, 10];
    var aux = 0;
    var posicion = arreglo.length
    for(var i = 0; i < arreglo.length; i++){
        posicion--;
        if (aux < arreglo[i] && aux != arreglo[posicion]){
            aux = arreglo[posicion];
            arreglo[posicion] = arreglo[i];
            arreglo[i] = aux;
        }
        else{
            i = arreglo.length;
        }
        console.log(arreglo);   
    }
}