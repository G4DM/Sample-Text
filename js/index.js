// Inicializa EmailJS
(function(){
    emailjs.init("vQxVgDKd6z3tMNC7t"); // Tu ID de usuario de EmailJS
})();

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario
    const email = document.getElementById('userEmail').value; // Obtiene el correo ingresado

    console.log("Correo ingresado:", email); // Verifica el correo ingresado

    // Validación del correo
    if (isValidEmail(email)) {
        sendEmail(email);
    } else {
        alert('Por favor, introduce un correo electrónico válido.');
    }
});

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
}

function sendEmail(email) {
    emailjs.send('service_rw4n7iq', 'template_btsslt4', {
        to_email: email,
    })
    .then(function(response) {
        console.log('Correo enviado con éxito:', response);
        alert('Correo enviado correctamente.');
    }, function(error) {
        console.error('Error al enviar el correo:', error); // Cambiado a console.error para destacar errores
        alert('Hubo un problema al enviar el correo. Revisa la consola para más detalles.');
    });
}