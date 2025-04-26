// ===================================
// Autor: Gabriel Daniel Manea
// Fecha: 18 de Abril de 2025
// ===================================

// Animación de entrada específica de esta página
gsap.to(".mensaje", {
  duration: 0.8,
  scale: 1,
  opacity: 1,
  ease: "back.out(1.7)",
});

// Animación del icono específica de esta página
gsap.to(".check-icon", {
  duration: 0.6,
  scale: 1,
  delay: 0.3,
  ease: "elastic.out(1, 0.5)",
});

// Crear partículas decorativas (específico de esta página)
function createParticles() {
  const colors = ["rgba(13, 110, 253, 0.1)", "rgba(25, 135, 84, 0.1)", "rgba(108, 117, 125, 0.1)"];

  for (let i = 0; i < 15; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Tamaño aleatorio entre 10 y 30px
    const size = Math.random() * 20 + 10;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Posición aleatoria
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;

    // Color aleatorio
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(particle);

    // Animación
    gsap.to(particle, {
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
      duration: Math.random() * 10 + 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }
}

// Efecto hover en el botón específico de esta página
function setupButtonHover() {
  const boton = document.querySelector(".boton");
  if (!boton) return;

  boton.addEventListener("mouseenter", function () {
    gsap.to(this, {
      duration: 0.3,
      y: -3,
      boxShadow: "0 8px 20px rgba(13, 110, 253, 0.5)",
      ease: "power2.out",
    });
  });

  boton.addEventListener("mouseleave", function () {
    gsap.to(this, {
      duration: 0.3,
      y: 0,
      boxShadow: "0 4px 10px rgba(13, 110, 253, 0.3)",
      ease: "power2.out",
    });
  });
}

// Iniciar todo cuando se cargue la página
document.addEventListener("DOMContentLoaded", function () {
  createParticles();
  setupButtonHover();
});
