const form = document.getElementById("formulario");
const tabla = document.querySelector("#tabla tbody");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    // Crear fila
    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${email}</td>
    `;

    // Agregar a la tabla
    tabla.appendChild(fila);

    // Limpiar formulario
    form.reset();
});