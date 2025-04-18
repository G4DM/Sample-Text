<?php
session_start();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario completado</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .mensaje {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
            text-align: center;
        }
        .mensaje h1 {
            color: #4CAF50;
        }
        .boton {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            text-decoration: none;
            border-radius: 5px;
        }
        .boton:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="mensaje">
        <h1>¡Gracias<?php echo isset($_SESSION['nombre']) ? ', ' . htmlspecialchars($_SESSION['nombre']) : ''; ?>!</h1>
        <p>Tu mensaje se ha enviado correctamente.</p>
        <p>Nos pondremos en contacto contigo lo antes posible.</p>
        <a class="boton" href="../../index.html">Volver a inicio</a>
    </div>
</body>
</html>
