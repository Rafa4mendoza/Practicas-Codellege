
var capturar = false;
var alumnos = [];
var calificaciones = [];
var evaluar = "";
var tableData = "";
var posicion = 0;
var infoBox = document.getElementById("info");
var buttonCapturar = document.getElementById("btnCapturar");
var buttonGuardar = document.getElementById("btnGuardar");
var buttonLimpiar = document.getElementById("btnLimpiar");
var textNombre = document.getElementById("nombre");
var textCalificacion = document.getElementById("calificacion");
var tableBody = document.getElementById("data");

buttonCapturar.addEventListener("click", function(){
    capturar = !capturar;
    capturaInformacion();
});

function capturaInformacion(){

    if(capturar){
        infoBox.classList.remove("d-none");
        infoBox.classList.add("d-block");
        buttonCapturar.classList.remove("btn-outline-primary");
        buttonCapturar.classList.add("btn-outline-danger");
        buttonCapturar.innerHTML = "Dejar de capturar";

    }else{
        infoBox.classList.remove("d-block");
        infoBox.classList.add("d-none");
        buttonCapturar.classList.remove("btn-outline-danger");
        buttonCapturar.classList.add("btn-outline-primary");
        buttonCapturar.innerHTML = "Capturar";
    }

    buttonLimpiar.addEventListener("click", function(){
        textNombre.value = '';
        textCalificacion.value = '';
    });

    buttonGuardar.addEventListener("click", function(){
        alumnos[posicion] = textNombre.value;
        calificaciones[posicion] = textCalificacion.value;

        evaluar = evaluarCalificacion(calificaciones[posicion]);

        tableData += `
        <tr class=${evaluar}> 
            <td>${posicion}</td>
            <td>${alumnos[posicion]}</td>
            <td>${calificaciones[posicion]}</td>
            <td>${evaluar}</td>
        </tr>`;
        tableBody.innerHTML = tableData;
        textNombre.value = '';
        textCalificacion.value = '';
        posicion++;

    });

}

function evaluarCalificacion(cal){
    if(cal >=0 && cal <=5 ){
        return "reprobado"
    } 
    else if (cal >= 6 && cal <= 8){
        return "aprobado"
    }
    else{
        return "sobresaliente"
    }
}
/*
var opcion;
var resultado;

function menu(){
    console.log("1: Nombre");
    console.log("2: Edad");
    console.log("3: Estudio");
    console.log("1: Gustos");

    opcion = Number(prompt("Elige una opcion"));

    switch(opcion){

        case 1:
            console.log("Rafael");
            break;

        case 2:
            console.log("26");
            break;
        
            case 3:
                console.log("Ingieneria");
                break;
        
            case 4:
                console.log("Comics");
                break;
            default:
                console.log("No introdujo alguna opcion");
                break;
    }
    
}

function saludar(){
    var saludar = "Si";

    do{
        console.log("Hola");
        saludar = prompt("Saludar otra vez");
    }while(saludar == "Si"){

    }
}

function calificacion(){

    var seguir = "si";

    do{
        resultado = Number(prompt("¿Cual es la calificacion?"));

        switch(resultado){
            case 1:
                console.log("Reprobado");
                break;
            case 2:
                console.log("Reprobado");
                break;
            case 3:
                console.log("Reprobado");
                break;
            case 4:
                console.log("Reprobado");
                break;
            case 5:
                console.log("Reprobado");
                break;
            case 6:
                console.log("Normal");
                break;
            case 7:
                console.log("Normal");
                break;
            case 8:
                console.log("Normal");
                break;
            case 9:
                console.log("Sobresaliente");
                break;
            case 10:
                console.log("Sobresaliente");
                break;

            default:
                console.log("Escriba una calificacion de 1 a 10");
        }

        seguir = prompt("¿Quiere continuar?");
        
    }while(seguir == "si");



    

}
*/
