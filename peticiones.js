function personajes() {
    $(document).ready(function() {
        $.ajax({
            url: 'datos.txt', 
            type: 'POST',
            success: function (respuesta) {
                document.getElementById("datos").innerHTML = respuesta;

            },
            error: function() {
                console.log("DIDN'T WORK. :(");
            } 
        });
    });
}

let btnPersonajes = document.getElementById("personajes");
btnPersonajes.addEventListener("click", personajes);
btnPersonajes.addEventListener("click", mensaje);   