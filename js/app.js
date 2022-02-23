var isVisible = true;
$(document).ready( function(){
    var nombre = "Rafael"
    prueba1(nombre);
});

function prueba1(dato){
    console.log(dato);
}

$("#verde").click( function(){
    $("#color").removeClass("bg-start").addClass("bg-success");
});
$("#amarillo").click( function(){
    $("#color").removeClass("bg-start").addClass("bg-warning");
});
$("#rojo").click( function(){
    $("#color").removeClass("bg-start").addClass("bg-danger");
});
$("#animation").click( function(){
    $("#color").removeClass("bg-start").addClass("animate");
});

$("#toggle").click( function(){
    if(isVisible){
        $("#color").hide();
        isVisible = false;
    }
    else{
        $("#color").show();
        isVisible = true;
    }
});