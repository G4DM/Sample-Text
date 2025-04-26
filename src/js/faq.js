// ===================================
// Autor: Minda Huang
// Fecha: 05 de marzo de 2025
// Autor de la última modificación: Gabriel Daniel Manea
// Última fecha de modificación: 18 de Abril de 2025
// ===================================

document.addEventListener("DOMContentLoaded", function () {
  // 1. Forzar visibilidad del contenido principal
  const mainContent = document.querySelector(".faq-container");
  if (mainContent) {
    mainContent.style.opacity = "1";
    mainContent.style.visibility = "visible";
  }

  // 2. Funcionalidad del acordeón FAQ (específico de esta página)
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      // Toggle clase active en la pregunta
      this.classList.toggle("active");

      // Obtener la respuesta asociada
      const answer = this.nextElementSibling;

      // Alternar visibilidad de la respuesta
      if (answer.classList.contains("show")) {
        answer.classList.remove("show");
      } else {
        // Cerrar otras respuestas abiertas
        document.querySelectorAll(".faq-answer.show").forEach((openAnswer) => {
          if (openAnswer !== answer) {
            openAnswer.classList.remove("show");
            openAnswer.previousElementSibling.classList.remove("active");
          }
        });

        answer.classList.add("show");
      }
    });
  });

  // 3. Inicializar todas las secciones como visibles
  document.querySelectorAll(".faq-section").forEach((section) => {
    section.style.opacity = "1";
    section.style.visibility = "visible";
  });

  // 4. Solución alternativa para contenido oculto
  setTimeout(() => {
    const allElements = document.querySelectorAll("main *");
    allElements.forEach((el) => {
      el.style.opacity = "1";
      el.style.visibility = "visible";
    });
  }, 100);
});
