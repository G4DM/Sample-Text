// ===================================
// Autor: Minda Huang
// Fecha: 05 de marzo de 2025
// ===================================




// Agregar un evento de clic a todas las preguntas
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    const arrow = this.querySelector(".arrow");

    // Toggle (mostrar/ocultar) la respuesta
    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
      this.classList.add("active"); // Agrega la clase 'active' para rotar la flecha
    } else {
      answer.style.display = "none";
      this.classList.remove("active"); // Elimina la clase 'active' para volver la flecha a su posición original
    }
  });
});
