document.getElementById('contactForm').addEventListener('submit', function (e) {
    // Evitar que el formulario se envíe si hay un error
    e.preventDefault();
  
    // Obtener los valores de los campos
    const dni = document.getElementById('dni').value;
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const edad = document.getElementById('edad').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
  
    // Validaciones
    if (!dni || !nombre || !apellidos || !edad || !telefono || !email) {
      alert('Todos los campos son obligatorios.');
      return;
    }
  
    // Validación de DNI (debe tener 9 caracteres y un formato específico)
    const dniRegex = /^[0-9]{8}[A-Za-z]$/;
    if (!dniRegex.test(dni)) {
      alert('Por favor, ingresa un DNI válido.');
      return;
    }
  
    // Validación de teléfono (debe ser un número válido)
    const telefonoRegex = /^[0-9]{9}$/;
    if (!telefonoRegex.test(telefono)) {
      alert('Por favor, ingresa un número de teléfono válido (9 dígitos).');
      return;
    }
  
    // Validación de edad (debe ser mayor a 0)
    if (edad <= 0) {
      alert('La edad debe ser un número positivo.');
      return;
    }
  
    // Validación de correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }
  
    // Si todas las validaciones pasan, enviar el formulario (aquí lo simularé con un mensaje)
    alert('Formulario enviado con éxito');
  });
  