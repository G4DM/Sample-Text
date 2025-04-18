<?php
// Incluir la configuración de conexión
include 'config.php';

// Crear la conexión con la base de datos
$conn = new mysqli($host, $usuario, $contrasena, $basedatos);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recoger los datos del formulario (ya validados por JS)
$nombre = $_POST['nombre'] ?? '';
$apellidos = $_POST['apellidos'] ?? '';
$edad = $_POST['edad'] ?? null;
$telefono = $_POST['telefono'] ?? '';
$correo = $_POST['correo'] ?? '';
$mensaje = $_POST['mensaje'] ?? '';

// Verificar que los campos requeridos no estén vacíos
if (empty($nombre) || empty($apellidos) || empty($correo) || empty($mensaje)) {
    die("Todos los campos son obligatorios.");
}

// Verificar si el correo ya existe
$stmt_check = $conn->prepare("SELECT ID_Usuario FROM usuarios WHERE Correo_electronico = ?");
$stmt_check->bind_param("s", $correo);
$stmt_check->execute();
$stmt_check->store_result();

if ($stmt_check->num_rows > 0) {
    // Si el correo ya existe, recuperamos el ID del usuario
    $stmt_check->bind_result($id_usuario);
    $stmt_check->fetch();
    $stmt_check->close();
} else {
    // Si no existe, insertamos al nuevo usuario
    $stmt_check->close();
    $stmt_usuario = $conn->prepare("INSERT INTO usuarios (Nombre, Apellidos, Edad, Telefono, Correo_electronico) VALUES (?, ?, ?, ?, ?)");
    $stmt_usuario->bind_param("ssiss", $nombre, $apellidos, $edad, $telefono, $correo);
    $stmt_usuario->execute();
    $id_usuario = $stmt_usuario->insert_id;
    $stmt_usuario->close();
}

// Insertar el mensaje en la tabla formularios asociado al ID de usuario
$stmt_formulario = $conn->prepare("INSERT INTO formularios (ID_Usuario, Mensaje) VALUES (?, ?)");
$stmt_formulario->bind_param("is", $id_usuario, $mensaje);
$stmt_formulario->execute();

// Cerrar conexiones
$stmt_formulario->close();
$conn->close();

// Redirigir a una página de gracias
header("Location: completado.php");
exit();
?>
