# **Sample-Text**

Aplicación web para gestión básica de notas con almacenamiento local, mensajería en vivo y gestión de eventos mediante calendario

<div align="center">
  <img src="/src/assets/img/logo-wide.png" alt="Logo de Sample-Text">
</div>

## **Autores**: Gabriel Daniel Manea | Minda Huang  
## **Tipo**: Trabajo de Fin de Grado (TFG | 1º Año de DAW)  

## 🛠️ **Tecnologías utilizadas**

- **HTML5**
- **CSS3**
- **JavaScript** (Vanilla)
- **[Bootstrap 5.3.0](https://getbootstrap.com/)** (Framework, responsividad)
- **[GSAP](https://gsap.com/)** (Animaciones & Toast)
- **[SortableJS](https://sortablejs.github.io/Sortable/)** (Para la creación del producto)


## 📂 **Estructura del proyecto**

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
│   ├── .gitignore
│   ├── index.html
│   ├── LICENSE
│   ├── README.md
│   ├── sample_text.sql
```


## 🚀 **Funcionalidades actuales**

- Páginas estáticas completas
- Diseño responsive
- Formulario funcional (con validación básica)
- Notas básicas funcionales
- Almacenamiento local para datos de las notas
- Gestión de eventos mediante calendario (Por hacer)


## 📝 **Cómo ejecutar el proyecto**

### **Clonando el repositorio**

```
1. Clonar el repositorio:
   git clone https://github.com/G4DM/Sample-Text.git
2. Abrir el archivo `index.html` en cualquier navegador moderno.
3. Acceder a la página del producto y ver las funcionalidades en acción.
```

## 📜 **Licencia**

Este proyecto está licenciado bajo la **MIT License**. Puedes ver los detalles en el archivo [LICENSE](https://github.com/G4DM/Sample-Text/blob/main/LICENSE).
