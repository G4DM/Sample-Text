// ===================================
// Autor: Minda Huang
// Fecha: 05 de marzo de 2025
// Autor de la última modificación: Gabriel Daniel Manea
// Última fecha de modificación: 18 de Abril de 2025
// ===================================

document.addEventListener("DOMContentLoaded", function () {
  // Configuración optimizada de GSAP
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({
    nullTargetWarn: false,
    force3D: false,
  });

  // Animaciones más rápidas
  const animateElements = document.querySelectorAll(".animate-on-scroll");

  animateElements.forEach((element) => {
    const delay = element.getAttribute("data-delay") || 0;

    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.to(element, {
          y: 0,
          opacity: 1,
          duration: 0.5, // Reducido de 0.8s
          delay: parseFloat(delay) * 0.5, // Reducimos el delay
          ease: "power2.out",
          overwrite: "auto",
        });
        element.classList.add("visible");
      },
      once: true, // Solo se ejecuta una vez
    });
  });

  // Optimización de tarjetas
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card, index) => {
    ScrollTrigger.create({
      trigger: card,
      start: "top 90%",
      onEnter: () => {
        gsap.to(card, {
          y: 0,
          opacity: 1,
          duration: 0.4, // Más rápido
          delay: index * 0.1, // Menor delay entre elementos
          ease: "power2.out",
          onComplete: () => card.classList.add("visible"),
        });
      },
      once: true,
    });

    // Hover optimizado
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -5,
        scale: 1.02,
        duration: 0.2, // Más rápido
        ease: "power1.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: card.classList.contains("visible") ? 0 : 20,
        scale: 1,
        duration: 0.3,
        ease: "power1.out",
      });
    });
  });

  // Optimización sección ubicación
  const locationSection = document.querySelector(".location-section");
  if (locationSection) {
    ScrollTrigger.create({
      trigger: locationSection,
      start: "top 85%",
      onEnter: () => {
        gsap.to(locationSection, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => locationSection.classList.add("visible"),
        });
      },
      once: true,
    });
  }

  // Precarga optimizada
  window.addEventListener("load", function () {
    gsap.to("body::after", {
      duration: 0.3,
      css: { top: "100%" },
      ease: "power2.in",
    });
  });
});

// Animación para las tarjetas de equipo
const teamCards = document.querySelectorAll(".team-card");
teamCards.forEach((card, index) => {
  gsap.fromTo(
    card,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      delay: index * 0.15,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      ease: "back.out(1.2)",
    }
  );

  // Efecto hover mejorado
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      y: -8,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      y: 0,
      duration: 0.4,
      ease: "elastic.out(1, 0.5)",
    });
  });
});
