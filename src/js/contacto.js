// ===================================
// Autor: Gabriel Daniel Manea
// Fecha: 05 de Marzo de 2025
// Autor de la última modificación: Gabriel Daniel Manea
// Última fecha de modificación: 18 de Abril de 2025
// ===================================

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const nombre = document.getElementById("nombre");
  const apellidos = document.getElementById("apellidos");
  const edad = document.getElementById("edad");
  const telefono = document.getElementById("telefono");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  const validateField = (input, regex, errorMsg) => {
    const isValid = regex.test(input.value.trim());
    if (isValid) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      input.setCustomValidity("");
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      input.setCustomValidity(errorMsg);
    }
  };

  // Validación para el nombre (solo letras y espacios)
  nombre.addEventListener("input", function () {
    const textRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    validateField(nombre, textRegex, "El nombre solo puede contener letras y espacios.");
  });

  // Validación para los apellidos (solo letras y espacios)
  apellidos.addEventListener("input", function () {
    const textRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    validateField(apellidos, textRegex, "Los apellidos solo pueden contener letras y espacios.");
  });

  // Validación para la edad (debe ser un número entre 1 y 120)
  edad.addEventListener("input", function () {
    const edadNum = parseInt(edad.value.trim(), 10);
    if (isNaN(edadNum) || edadNum <= 17 || edadNum > 120) {
      edad.classList.remove("is-valid");
      edad.classList.add("is-invalid");
      edad.setCustomValidity("La edad debe estar entre 18 y 120.");
    } else {
      edad.classList.remove("is-invalid");
      edad.classList.add("is-valid");
      edad.setCustomValidity("");
    }
  });

  // Validación para el teléfono (debe ser un número que empiece con 6, 7, 8 o 9 y tenga 9 dígitos)
  telefono.addEventListener("input", function () {
    const telefonoRegex = /^[6-9][0-9]{8}$/;
    validateField(telefono, telefonoRegex, "El teléfono debe tener 9 dígitos y comenzar con 6, 7, 8 o 9.");
  });

  // Validación para el correo (debe ser un correo válido)
  correo.addEventListener("input", function () {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateField(correo, emailRegex, "Correo electrónico inválido.");
  });

  // Validación para el mensaje (no puede estar vacío)
  mensaje.addEventListener("input", function () {
    if (mensaje.value.trim() === "") {
      mensaje.classList.remove("is-valid");
      mensaje.classList.add("is-invalid");
      mensaje.setCustomValidity("El mensaje no puede estar vacío.");
    } else {
      mensaje.classList.remove("is-invalid");
      mensaje.classList.add("is-valid");
      mensaje.setCustomValidity("");
    }
  });
});
