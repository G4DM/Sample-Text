DROP DATABASE IF EXISTS sample_text;
CREATE DATABASE IF NOT EXISTS sample_text;
USE sample_text;

-- Tabla usuarios
CREATE TABLE usuarios (
    ID_Usuario INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Apellidos VARCHAR(100) NOT NULL,
    Edad INT,
    Telefono VARCHAR(20),
    Correo_electronico VARCHAR(100) UNIQUE NOT NULL
);

-- Tabla formularios
CREATE TABLE formularios (
    ID_Formulario INT AUTO_INCREMENT PRIMARY KEY,
    ID_Usuario INT NOT NULL,
    Mensaje TEXT NOT NULL,
    FOREIGN KEY (ID_Usuario) REFERENCES usuarios(ID_Usuario)
);