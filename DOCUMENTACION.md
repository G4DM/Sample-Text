# Documentación de Sample Text

<div align="center">
  <img src="/src/assets/img/logo-wide.png" alt="Logo de Sample-Text">
</div>

## Índice
- [1. Introducción al proyecto](#1-introducción-al-proyecto)
- [2. Tecnologías utilizadas](#2-tecnologías-utilizadas)
- [3. Estructura del proyecto](#3-estructura-del-proyecto)
- [4. Funcionalidades](#4-funcionalidades)
- [5. Instalación y configuración](#5-instalación-y-configuración)
- [6. Características del frontend](#6-características-del-frontend)
- [7. Características del backend](#7-características-del-backend)
- [8. Sistema de notas con LocalStorage](#8-sistema-de-notas-con-localstorage)
- [9. Formulario de contacto e integración con PHP/MySQL](#9-formulario-de-contacto-e-integración-con-phpmysql)
- [10. Créditos y licencia](#10-créditos-y-licencia)

## 1. Introducción al proyecto

### Descripción general
Sample Text es una aplicación web diseñada para la gestión básica de notas con almacenamiento local, mensajería en vivo y gestión de eventos mediante calendario. El proyecto ofrece una interfaz de usuario intuitiva y moderna, permitiendo a los usuarios organizar sus ideas de manera efectiva.

### Propósito
El propósito principal de Sample Text es centralizar información, eventos y comunicaciones en una única plataforma, combinando lo mejor de herramientas como Notion, Trello y Slack. La aplicación busca simplificar la organización de información personal y profesional, ofreciendo un espacio digital ordenado y accesible.

### Autores
- **Gabriel Daniel Manea**: Desarrollador principal
- **Minda Huang**: Colaborador/Creador de la idea

Este proyecto fue desarrollado como Trabajo de Fin de Grado (TFG) para el primer año de Desarrollo de Aplicaciones Web (DAW).

## 2. Tecnologías utilizadas

El proyecto utiliza un stack tecnológico moderno para el desarrollo web frontend y backend:

| Tecnología | Versión | Uso |
|------------|---------|-----|
| HTML5 | - | Estructura de páginas web |
| CSS3 | - | Estilizado y diseño responsive |
| JavaScript | Vanilla | Lógica del cliente, interactividad |
| Bootstrap | 5.3.0 | Framework CSS para responsividad |
| GSAP | 3.11.4 | Biblioteca para animaciones |
| ScrollTrigger | 3.11.4 | Plugin de GSAP para animaciones de scroll |
| SortableJS | 1.15.0 | Funcionalidad de arrastrar y soltar para notas |
| Font Awesome | 6.4.0 | Iconos e interfaz visual |
| PHP | 7+ | Backend para procesamiento de formularios |
| MySQL | 5+ | Base de datos para almacenar información de contacto |

## 3. Estructura del proyecto

Sample Text sigue una estructura organizada de carpetas y archivos para facilitar el mantenimiento y la escalabilidad:

```
Sample Text/
├── src/
│   ├── assets/
│   │   ├── img/
│   │   │   ├── logo-wide.png
│   │   │   ├── logo.png
│   │   ├── favicon.png
│   ├── css/
│   │   ├── completado.css
│   │   ├── conocenos.css
│   │   ├── contacto.css
│   │   ├── faq.css
│   │   ├── index.css
│   │   ├── main.css  (estilo que se aplica a todas las páginas)
│   │   ├── producto.css
│   ├── js/
│   │   ├── completado.js
│   │   ├── conocenos.js
│   │   ├── contacto.js  (envía los datos mediante PHP a la BBDD)
│   │   ├── faq.js
│   │   ├── main.js  (lógica que se aplica a todas las páginas)
│   │   ├── producto.js  (maneja la lógica del producto | LocalStorage)
│   ├── pages/
│   │   ├── conocenos.html
│   │   ├── contacto.html
│   │   ├── faq.html
│   │   ├── producto.html
│   ├── php/
│   │   ├── completado.php
│   │   ├── config.php
│   │   ├── contacto.php
├── .gitignore
├── index.html
├── LICENSE
├── README.md
├── sample_text.sql
├── DOCUMENTACION.md
```

### Descripción de los directorios principales
- **assets/**: Contiene recursos estáticos como imágenes y favicon.
- **css/**: Archivos de estilo CSS para cada página y estilos globales.
- **js/**: Scripts JavaScript para la lógica de la aplicación.
- **pages/**: Páginas HTML adicionales de la aplicación.
- **php/**: Archivos PHP para el procesamiento del formulario de contacto.

## 4. Funcionalidades

### Funcionalidades implementadas
- **Páginas estáticas completamente funcionales**:
  - Página de inicio (index.html)
  - Página de producto con sistema de notas (producto.html)
  - Página de información sobre los autores (conocenos.html)
  - Página de preguntas frecuentes (faq.html)
  - Página de contacto con formulario (contacto.html)
- **Diseño responsive** adaptado a dispositivos móviles y de escritorio
- **Sistema de notas interactivo**:
  - Creación, edición y eliminación de notas
  - Personalización de color de las notas
  - Fijado de notas importantes
  - Ordenamiento por arrastrar y soltar (drag & drop)
  - Almacenamiento local en el navegador mediante LocalStorage
- **Formulario de contacto funcional**:
  - Validación de datos en frontend y backend
  - Almacenamiento en base de datos MySQL
  - Página de confirmación tras envío exitoso
- **Animaciones y efectos visuales** mediante GSAP y ScrollTrigger

### Funcionalidades pendientes
- **Mensajería en vivo**: Sistema de chat para comunicación entre usuarios
- **Gestión de eventos mediante calendario**: Creación y administración de eventos
- **Sincronización en la nube**: Almacenamiento remoto de notas y datos

## 5. Instalación y configuración

### Requisitos previos
- Servidor web (Apache, Nginx)
- PHP 7.0 o superior
- MySQL 5.0 o superior
- Navegador web moderno

### Pasos para la instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/G4DM/Sample-Text.git
   ```

2. **Configurar la base de datos**:
   - Importar el archivo `sample_text.sql` en tu servidor MySQL
   - Editar el archivo `src/php/config.php` con tus credenciales de MySQL:
     ```php
     <?php
     $host = "localhost";
     $usuario = "tu_usuario";
     $contrasena = "tu_contraseña";
     $basedatos = "sample_text";
     ?>
     ```

3. **Desplegar en el servidor web**:
   - Mover todos los archivos a la carpeta raíz del servidor web
   - Asegurarse de que PHP tenga permisos de escritura en las carpetas necesarias

4. **Acceder a la aplicación**:
   - Abrir el navegador web
   - Navegar a la URL donde se ha desplegado la aplicación
   - La página principal (index.html) debería cargarse correctamente

## 6. Características del frontend

### Componentes principales
- **Barra de navegación**: Presente en todas las páginas, adaptable a dispositivos móviles
- **Hero Section**: Sección de bienvenida en la página principal con llamadas a la acción
- **Tarjetas informativas**: Presentación visual de características y beneficios
- **Footer**: Información de contacto y enlaces importantes
- **Sistema de notas**: Interfaz interactiva para gestión de notas personales

### Sistema de animaciones
Sample Text utiliza la biblioteca GSAP para implementar animaciones fluidas en toda la aplicación:

- **Animaciones de entrada**: Fade-in y desplazamientos suaves al cargar las páginas
- **Animaciones de scroll**: Elementos que aparecen al hacer scroll mediante ScrollTrigger
- **Efectos hover**: Feedback visual al interactuar con elementos como tarjetas y botones
- **Animaciones de transiciones**: Para la creación, eliminación y modificación de notas

Ejemplo de implementación en `main.js`:
```javascript
// Animación de los enlaces de navegación
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link, index) => {
  gsap.from(link, {
    duration: 0.5,
    opacity: 0,
    x: -20,
    delay: index * 0.1,
    ease: "power2.out",
  });
});
```

### Responsividad
La aplicación está diseñada para funcionar correctamente en todas las resoluciones de pantalla:

- **Bootstrap Grid System**: Estructura de columnas adaptables
- **Media Queries**: Ajustes específicos según el tamaño de pantalla
- **Clases condicionales**: Elementos que se muestran u ocultan según el dispositivo
- **Navegación adaptativa**: Menú hamburguesa en dispositivos móviles

## 7. Características del backend

### Base de datos
La aplicación utiliza MySQL como sistema de gestión de base de datos. La estructura actual consiste en:

- **Tabla `usuarios`**: Almacena información de los usuarios que contactan mediante el formulario
  - `ID_Usuario`: Identificador único (PRIMARY KEY, AUTO_INCREMENT)
  - `Nombre`: Nombre del usuario
  - `Apellidos`: Apellidos del usuario
  - `Edad`: Edad del usuario
  - `Telefono`: Número de teléfono
  - `Correo_electronico`: Email del usuario (UNIQUE)

- **Tabla `formularios`**: Almacena los mensajes del formulario de contacto
  - `ID_Formulario`: Identificador único (PRIMARY KEY, AUTO_INCREMENT)
  - `ID_Usuario`: Clave foránea vinculada a la tabla usuarios
  - `Mensaje`: Texto del mensaje enviado

### Script SQL de inicialización
```sql
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
```

### Procesamiento PHP
El backend en PHP se encarga principalmente de:
- Procesar los datos del formulario de contacto
- Validar la información recibida
- Almacenar los datos en la base de datos MySQL
- Redireccionar al usuario a una página de confirmación

## 8. Sistema de notas con LocalStorage

### Funcionamiento general
El sistema de notas es una característica principal de Sample Text que permite a los usuarios:
- Crear notas con contenido editable
- Personalizar el color de cada nota
- Fijar notas importantes para que aparezcan primero
- Reordenar las notas mediante arrastrar y soltar
- Conservar las notas entre sesiones mediante almacenamiento local

### Implementación del almacenamiento
La persistencia de datos se logra utilizando la API LocalStorage del navegador:

```javascript
// Clave para LocalStorage
const STORAGE_KEY = "sampletext_notes";

// Guardar notas en LocalStorage
function saveNotesToStorage() {
  if (saveTimeout) {
    clearTimeout(saveTimeout);
  }

  saveTimeout = setTimeout(() => {
    const notes = [];
    const noteElements = document.querySelectorAll(".note");

    noteElements.forEach((noteElement, index) => {
      notes.push({
        id: noteElement.dataset.id,
        content: noteElement.querySelector(".note-content").innerHTML,
        color: noteElement.style.backgroundColor || "#ffffff",
        pinned: noteElement.classList.contains("pinned"),
        position: index,
      });
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, 300);
}

// Cargar notas desde LocalStorage
function loadNotesFromStorage() {
  const savedNotes = localStorage.getItem(STORAGE_KEY);
  if (savedNotes) {
    const notes = JSON.parse(savedNotes);
    // Ordenar y mostrar notas...
  }
}
```

### Estructura de datos
Cada nota se almacena como un objeto JSON con las siguientes propiedades:
- `id`: Identificador único basado en timestamp
- `content`: Contenido HTML de la nota
- `color`: Color de fondo en formato hexadecimal
- `pinned`: Estado de fijación (booleano)
- `position`: Posición en el orden de las notas

### Características adicionales
- **Throttling**: Optimización para evitar escrituras excesivas mediante timeout
- **Ordenamiento automático**: Las notas fijadas se muestran primero
- **SortableJS**: Implementación de la funcionalidad drag & drop
- **Animaciones GSAP**: Efectos visuales al crear, eliminar o modificar notas

## 9. Formulario de contacto e integración con PHP/MySQL

### Formulario de contacto
El formulario de contacto en `contacto.html` recoge la siguiente información:
- Nombre y apellidos del usuario
- Edad
- Teléfono de contacto
- Correo electrónico
- Mensaje

### Validación de datos
La validación se realiza en dos niveles:

1. **Validación en frontend (JavaScript)**:
   - Campos obligatorios no vacíos
   - Formato correcto de email
   - Edad mínima de 18 años
   - Formato válido de número telefónico

2. **Validación en backend (PHP)**:
   - Verificación de campos obligatorios
   - Sanitización de datos antes de inserción en la base de datos

### Procesamiento del formulario
El archivo `contacto.php` gestiona el procesamiento de los datos:

```php
<?php
// Incluir la configuración de conexión
include 'config.php';

// Crear la conexión con la base de datos
$conn = new mysqli($host, $usuario, $contrasena, $basedatos);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recoger los datos del formulario
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
```

### Flujo de datos
1. El usuario completa el formulario en la página de contacto
2. JavaScript valida los datos en el cliente
3. Al enviar, los datos son procesados por `contacto.php`
4. Se verifica si el usuario ya existe en la base de datos (por correo electrónico)
5. Se almacena la información en las tablas correspondientes
6. Se redirige al usuario a una página de confirmación

### Seguridad implementada
- Uso de `prepare` y parámetros vinculados para prevenir inyección SQL
- Validación de campos obligatorios
- Manejo de errores de conexión a la base de datos
- Sanitización de datos antes de procesarlos

## 10. Créditos y licencia

### Autores
Este proyecto ha sido desarrollado por:
- **Gabriel Daniel Manea**: Desarrollo principal, arquitectura del sistema, frontend y backend
- **Minda Huang**: Colaboración en el desarrollo y diseño

### Agradecimientos
- Universidad y profesores del curso de Desarrollo de Aplicaciones Web
- Comunidades de desarrollo que proporcionaron bibliotecas y frameworks utilizados

### Tecnologías y recursos de terceros
- [Bootstrap](https://getbootstrap.com/) - Framework CSS
- [GSAP](https://gsap.com/) - Biblioteca de animaciones
- [SortableJS](https://sortablejs.github.io/Sortable/) - Funcionalidad drag & drop
- [Font Awesome](https://fontawesome.com/) - Iconos

### Licencia
Este proyecto está licenciado bajo la **MIT License**. Puede ver los detalles en el archivo [LICENSE](https://github.com/G4DM/Sample-Text/blob/main/LICENSE).

La licencia MIT permite:
- Uso comercial
- Modificación
- Distribución
- Uso privado

Con las siguientes condiciones:
- Se debe incluir el aviso de copyright y la licencia en copias del software
- El software se proporciona "tal cual", sin garantías de ningún tipo

```
MIT License

Copyright (c) 2025 Gabriel Daniel Manea & Minda Huang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
