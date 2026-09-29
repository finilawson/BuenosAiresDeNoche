const botonLugares = document.getElementById("botonLugares");
const botonEstilo = document.getElementById("botonEstilo");

function cargarLugares() {

    fetch("datos.json")
        .then(res => res.json())
        .then(datos => {

            let contenedor = document.getElementById("contenedor");
            let htmlAcumulado = "";

            datos.forEach(item => {
                htmlAcumulado += `<div class="card">`;
                htmlAcumulado += `<h2>${item.nombre}</h2>`;
                htmlAcumulado += `<p>${item.barrio}</p>`;
                htmlAcumulado += `<p>${item.plan}</p>`;
                htmlAcumulado += `</div>`;
            });

            contenedor.innerHTML = htmlAcumulado;

        });
}

function cambiarEstilo() {
    document.querySelector("body").classList.toggle("oscuro");
}

botonLugares.addEventListener("click", cargarLugares);
botonEstilo.addEventListener("click", cambiarEstilo);