document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const dni = document.getElementById("dni");
  const nombre = document.getElementById("nombre");
  const apellidos = document.getElementById("apellidos");
  const edad = document.getElementById("edad");
  const telefono = document.getElementById("telefono");
  const email = document.getElementById("email");

  const validateField = (input, regex, errorMsg) => {
    const isValid = regex.test(input.value.trim());
    if (isValid) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      input.setCustomValidity('');
    } else {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
      input.setCustomValidity(errorMsg);
    }
  };

  dni.addEventListener("input", function () {
    const dniRegex = /^[0-9]{8}[A-Za-z]$/;
    validateField(dni, dniRegex, "DNI inválido. Debe tener 8 números y 1 letra.");
  });

  nombre.addEventListener("input", function () {
    const textRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    validateField(nombre, textRegex, "El nombre solo puede contener letras y espacios.");
  });

  apellidos.addEventListener("input", function () {
    const textRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    validateField(apellidos, textRegex, "Los apellidos solo pueden contener letras y espacios.");
  });

  edad.addEventListener("input", function () {
    const edadNum = parseInt(edad.value.trim(), 10);
    if (isNaN(edadNum) || edadNum <= 17 || edadNum > 120) {
      edad.classList.remove('is-valid');
      edad.classList.add('is-invalid');
      edad.setCustomValidity("La edad debe estar entre 1 y 120.");
    } else {
      edad.classList.remove('is-invalid');
      edad.classList.add('is-valid');
      edad.setCustomValidity('');
    }
  });

  telefono.addEventListener("input", function () {
    const telefonoRegex = /^[6-9][0-9]{8}$/;
    validateField(telefono, telefonoRegex, "El teléfono debe tener 9 dígitos y comenzar con 6, 7, 8 o 9.");
  });

  email.addEventListener("input", function () {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateField(email, emailRegex, "Correo electrónico inválido.");
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío real de momento

    // Verificar si todos los campos son válidos antes de enviar el formulario
    if (form.checkValidity()) {
      alert("Formulario válido. (Simulación de envío)");
      form.reset(); // Resetea el formulario tras la validación exitosa
    } else {
      alert("Hay errores en el formulario. Corrige los campos marcados.");
    }
  });
});
