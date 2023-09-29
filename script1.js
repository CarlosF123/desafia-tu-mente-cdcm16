var arreglo = ["", "", "", "",""];

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    // Obtén el número del id del objetivo
    var targetId = parseInt(ev.target.id);

    // Verifica si la casilla está vacía y si el elemento no se ha colocado antes
    if (arreglo[targetId] === "" && !arreglo.includes(data)) {
        arreglo[targetId] = data;
        ev.target.appendChild(document.getElementById(data));

        // Cambia el fondo a verde cuando se coloca correctamente
        ev.target.style.backgroundColor = "green";
    } else {
        // Cambia el fondo a rojo cuando se coloca incorrectamente
        ev.target.style.backgroundColor = "red";
    }

    // Verifica si se han colocado todos los elementos
    if (arreglo[0] != "" && arreglo[1] != "" && arreglo[2] != "" && arreglo[3] ) {
        if (arreglo[0] == "f1" && arreglo[1] == "f2" && arreglo[2] == "f3" && arreglo[3] == "f4" ) {
        // Todos los cuadros en verde si está en orden correcto
        document.querySelectorAll(".box").forEach(function(box) {
            box.style.backgroundColor = "green";
        });

        // Cambia el contenido de <h2> a una imagen de éxito
        var img = document.createElement("img");
        img.src = "bien.jpg"; // Reemplaza con la ruta de tu imagen
        img.alt = "Success"; // Texto alternativo para la imagen
        document.querySelector("h2").innerHTML = "";
        document.querySelector("h2").appendChild(img);
    } else {
        // Todos los cuadros en rojo si está en orden incorrecto
        document.querySelectorAll(".box").forEach(function(box) {
            box.style.backgroundColor = "red";
        });

        // Cambia el contenido de <h2> a una imagen de error
        var img = document.createElement("img");
        img.src = "no.jpg"; // Reemplaza con la ruta de tu imagen
        img.alt = "Error"; // Texto alternativo para la imagen
        document.querySelector("h2").innerHTML = "";
        document.querySelector("h2").appendChild(img);
    }
    }
}
