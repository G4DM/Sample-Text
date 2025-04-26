// ===================================
// Autor: Gabriel Daniel Manea
// Fecha: 05 de marzo de 2025
// Autor de la última modificación: Gabriel Daniel Manea
// Última fecha de modificación: 18 de Abril de 2025
// ===================================

document.addEventListener("DOMContentLoaded", function () {
  // Configuración común de GSAP
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({
    nullTargetWarn: false,
    force3D: false,
  });

  // Animación del header al hacer scroll
  const header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

    // Animación inicial del header
    gsap.from(header, {
      duration: 0.8,
      y: -20,
      opacity: 0,
      ease: "power2.out",
    });
  }

  // Animación del logo
  const logo = document.querySelector(".logo-img");
  if (logo) {
    gsap.from(logo, {
      duration: 1,
      opacity: 0,
      y: -20,
      ease: "power2.out",
    });
  }

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

  // Animación del botón CTA
  const ctaBtn = document.querySelector(".btn-cta");
  if (ctaBtn) {
    gsap.from(ctaBtn, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      delay: 0.6,
      ease: "power2.out",
    });
  }

  // Animación de scroll para las secciones
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  });

  // Animación de elementos con clase animate-on-scroll
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
          duration: 0.5,
          delay: parseFloat(delay) * 0.5,
          ease: "power2.out",
          overwrite: "auto",
        });
        element.classList.add("visible");
      },
      once: true,
    });
  });

  // Animación de las tarjetas de características
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card, index) => {
    ScrollTrigger.create({
      trigger: card,
      start: "top 80%",
      onEnter: () => {
        gsap.to(card, {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: "power2.out",
          delay: index * 0.1,
        });
      },
    });

    // Efecto hover en las tarjetas
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.3,
        y: -5,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        duration: 0.3,
        y: 0,
        boxShadow: "0 5px 15px rgba(0,0,0,0.03)",
        ease: "power2.out",
      });
    });
  });

  // Animación del footer
  const footer = document.querySelector(".footer");
  if (footer) {
    ScrollTrigger.create({
      trigger: footer,
      start: "top 80%",
      onEnter: () => {
        gsap.utils.toArray(".footer-brand, .footer-title, .footer-links li, .footer-contact li").forEach((el, i) => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power2.out",
          });
        });
      },
    });
  }

  // Efecto hover mejorado para los enlaces del footer
  const footerLinks = document.querySelectorAll(".footer-link");
  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, {
        x: 5,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(link, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  // Actualizar el año en el footer
  const currentYear = document.getElementById("current-year");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Precarga optimizada (común a todas las páginas)
  window.addEventListener("load", function () {
    gsap.to("body::after", {
      duration: 0.3,
      css: { top: "100%" },
      ease: "power2.in",
    });
  });
});
