<!--
// ===================================
// Autor: Gabriel Daniel Manea
// Fecha: 18 de Abril de 2025
// Autor de la última modificación: -
// Última fecha de modificación: -
// Descripción: Página que se muestra después de enviar el formulario de manera correcta. Redirige al Inicio.
// ===================================
-->
<?php
session_start();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario completado | Sample Text</title>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- GSAP -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
    <!-- CSS personalizado -->
    <link rel="stylesheet" href="../css/completado.css">
</head>
<body>
    <div class="mensaje">
        <div class="check-icon">
            <i class="fas fa-check-circle"></i>
        </div>
        <h1>¡Gracias<?php echo isset($_SESSION['nombre']) ? ', ' . htmlspecialchars($_SESSION['nombre']) : ''; ?>!</h1>
        <p>Tu mensaje se ha enviado correctamente.</p>
        <p>Nos pondremos en contacto contigo lo antes posible.</p>
        <a class="boton" href="../../index.html">Volver a inicio</a>
    </div>

    <!-- JavaScript personalizado -->
    <script src="../js/completado.js"></script>
</body>
</html>