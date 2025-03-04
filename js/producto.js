// Obtener el formulario y la lista de notas
const formulario = document.getElementById("formularioNota");
const listaNotas = document.getElementById("listaNotas");

// Función para crear una nueva nota
function crearNota(texto) {
  // Crear el contenedor de la nota
  const nuevaNota = document.createElement("li");
  nuevaNota.classList.add("nota");

  // Crear el contenido de la nota
  const contenidoNota = document.createElement("span");
  contenidoNota.classList.add("contenido");
  contenidoNota.textContent = texto;
  nuevaNota.appendChild(contenidoNota);

  // Crear el contenedor de las acciones
  const acciones = document.createElement("div");
  acciones.classList.add("acciones");

  // Botón para tachar la nota
  const botonTachar = document.createElement("button");
  botonTachar.textContent = "✅"; // Emoji para tachar
  botonTachar.classList.add("tachar");
  botonTachar.onclick = function () {
    contenidoNota.classList.toggle("tachada");
  };
  acciones.appendChild(botonTachar);

  // Botón para editar la nota
  const botonEditar = document.createElement("button");
  botonEditar.textContent = "✏️"; // Emoji para editar
  botonEditar.classList.add("editar");
  botonEditar.onclick = function () {
    const nuevoTexto = prompt("Editar nota:", contenidoNota.textContent);
    if (nuevoTexto) {
      contenidoNota.textContent = nuevoTexto;
    }
  };
  acciones.appendChild(botonEditar);

  // Botón para mover la nota arriba
  const botonMoverArriba = document.createElement("button");
  botonMoverArriba.textContent = "⬆️"; // Emoji para mover arriba
  botonMoverArriba.classList.add("mover-arriba");
  botonMoverArriba.onclick = function () {
    if (nuevaNota.previousElementSibling) {
      listaNotas.insertBefore(nuevaNota, nuevaNota.previousElementSibling);
    }
  };
  acciones.appendChild(botonMoverArriba);

  // Botón para mover la nota abajo
  const botonMoverAbajo = document.createElement("button");
  botonMoverAbajo.textContent = "⬇️"; // Emoji para mover abajo
  botonMoverAbajo.classList.add("mover-abajo");
  botonMoverAbajo.onclick = function () {
    listaNotas.appendChild(nuevaNota);
  };
  acciones.appendChild(botonMoverAbajo);

  // Botón para eliminar la nota
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "🗑️"; // Emoji para eliminar
  botonEliminar.classList.add("eliminar");
  botonEliminar.onclick = function () {
    nuevaNota.remove();
  };
  acciones.appendChild(botonEliminar);

  nuevaNota.appendChild(acciones);
  listaNotas.appendChild(nuevaNota);
}

// Event listener para el formulario de notas
formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  // Obtener el texto de la nota
  const textoNota = document.getElementById("notaInput").value;

  if (textoNota) {
    crearNota(textoNota); // Crear la nueva nota
    formulario.reset(); // Resetear el formulario
  }
});
