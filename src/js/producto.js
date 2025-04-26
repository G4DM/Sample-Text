// ===================================
// Autor: Gabriel Daniel Manea
// Fecha: 18 de Abril de 2025
// ===================================

document.addEventListener("DOMContentLoaded", function () {
  // Elementos del DOM específicos de esta página
  const notesGrid = document.getElementById("notesGrid");
  const addNoteBtn = document.getElementById("addNoteBtn");
  const colorPicker = document.getElementById("noteColor");

  // Clave para LocalStorage
  const STORAGE_KEY = "sampletext_notes";

  // Inicializar SortableJS
  let sortable;
  let saveTimeout;
  let currentNoteToDelete = null;

  // Configurar el toast con animaciones personalizadas
  const deleteToastEl = document.getElementById("deleteToast");
  const deleteToast = new bootstrap.Toast(deleteToastEl, {
    autohide: true,
    delay: 3000,
  });

  // Sobreescribir los métodos show y hide para añadir animaciones
  deleteToastEl.addEventListener("show.bs.toast", function () {
    gsap.set(deleteToastEl, { y: 100, opacity: 0 });
    gsap.to(deleteToastEl, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "back.out(1.7)",
    });
  });

  deleteToastEl.addEventListener("hide.bs.toast", function () {
    gsap.to(deleteToastEl, {
      y: 50,
      opacity: 0,
      duration: 0.3,
      ease: "power1.in",
      onComplete: () => {
        deleteToastEl.classList.add("hide");
      },
    });
  });

  // Modificar el evento de confirmación para mostrar el toast animado
  document.getElementById("confirmDeleteBtn").addEventListener("click", function () {
    if (currentNoteToDelete) {
      const noteElement = document.querySelector(`.note[data-id="${currentNoteToDelete}"]`);
      if (noteElement) {
        gsap.to(noteElement, {
          duration: 0.3,
          opacity: 0,
          y: 20,
          ease: "power1.in",
          onComplete: () => {
            noteElement.remove();
            saveNotesToStorage();

            deleteToastEl.classList.remove("hide");
            deleteToast.show();

            const modal = bootstrap.Modal.getInstance(document.getElementById("deleteNoteModal"));
            modal.hide();
          },
        });
      }
    }
  });

  // Función para inicializar Sortable con configuración optimizada
  function initSortable() {
    if (sortable) {
      sortable.destroy();
    }

    sortable = new Sortable(notesGrid, {
      animation: 150,
      ghostClass: "sortable-ghost",
      chosenClass: "sortable-chosen",
      dragClass: "sortable-drag",
      onStart: function (evt) {
        document.body.style.cursor = "grabbing";
        evt.item.classList.add("active-drag");
      },
      onEnd: function (evt) {
        document.body.style.cursor = "";
        evt.item.classList.remove("active-drag");
        evt.item.style.transform = "";
        saveNotesToStorage();
      },
      onChoose: function (evt) {
        evt.item.style.transform = "scale(1.03)";
      },
      group: "notes",
      filter: ".note-actions, .note-btn",
      preventOnFilter: false,
      draggable: ".note:not(.pinned)",
      handle: ".note",
      forceFallback: false,
      swapThreshold: 0.65,
      invertSwap: true,
      direction: "horizontal",
      delay: 100,
      delayOnTouchOnly: true,
      touchStartThreshold: 3,
      onMove: function (evt) {
        return !evt.related.classList.contains("pinned");
      },
    });
  }

  // Cargar notas al iniciar
  loadNotesFromStorage();
  initSortable();

  // Event listeners
  addNoteBtn.addEventListener("click", createNewNote);

  // Función para crear una nueva nota
  function createNewNote() {
    const noteId = Date.now().toString();
    const noteColor = colorPicker.value;

    const noteElement = document.createElement("div");
    noteElement.className = "note";
    noteElement.dataset.id = noteId;
    noteElement.style.backgroundColor = noteColor;
    noteElement.style.opacity = "0";

    noteElement.innerHTML = `
      <div class="note-content" contenteditable="true" placeholder="Escribe tu nota aquí..."></div>
      <div class="note-actions">
        <button class="note-btn delete" title="Eliminar">
          <i class="bi bi-trash"></i>
        </button>
        <button class="note-btn color" title="Cambiar color">
          <i class="bi bi-palette"></i>
        </button>
        <button class="note-btn pin" title="Fijar nota">
          <i class="bi bi-pin"></i>
        </button>
      </div>
    `;

    notesGrid.prepend(noteElement);

    // Animación de entrada
    gsap.to(noteElement, {
      duration: 0.6,
      y: 0,
      opacity: 1,
      ease: "back.out",
      onComplete: () => {
        const contentEditable = noteElement.querySelector(".note-content");
        contentEditable.focus();
      },
    });

    setupNoteEvents(noteElement, noteId);
    saveNotesToStorage();
  }

  // Configurar eventos de la nota
  function setupNoteEvents(noteElement, noteId) {
    const deleteBtn = noteElement.querySelector(".delete");
    const colorBtn = noteElement.querySelector(".color");
    const pinBtn = noteElement.querySelector(".pin");
    const contentEditable = noteElement.querySelector(".note-content");

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteNote(noteId);
    });

    colorBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      changeNoteColor(noteElement);
    });

    pinBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      togglePinNote(noteElement);
    });

    contentEditable.addEventListener("input", saveNotesToStorage);
    contentEditable.addEventListener("mousedown", (e) => e.stopPropagation());
  }

  // Eliminar nota
  function deleteNote(noteId) {
    currentNoteToDelete = noteId;
    const modal = new bootstrap.Modal(document.getElementById("deleteNoteModal"));
    modal.show();
  }

  // Cambiar color de nota
  function changeNoteColor(noteElement) {
    const currentColor = noteElement.style.backgroundColor || "#ffffff";
    colorPicker.value = rgbToHex(currentColor);
    colorPicker.click();

    const handler = function () {
      gsap.to(noteElement, {
        backgroundColor: colorPicker.value,
        duration: 0.3,
        onComplete: saveNotesToStorage,
      });
      colorPicker.removeEventListener("change", handler);
    };

    colorPicker.addEventListener("change", handler);
  }

  // Fijar/desfijar nota
  function togglePinNote(noteElement) {
    const isPinned = noteElement.classList.contains("pinned");
    const pinIcon = noteElement.querySelector(".pin i");

    gsap.to(noteElement, {
      y: isPinned ? 0 : -10,
      duration: 0.2,
      onComplete: () => {
        noteElement.classList.toggle("pinned");

        if (noteElement.classList.contains("pinned")) {
          pinIcon.classList.remove("bi-pin");
          pinIcon.classList.add("bi-pin-fill", "text-warning");
          notesGrid.prepend(noteElement);
        } else {
          pinIcon.classList.add("bi-pin");
          pinIcon.classList.remove("bi-pin-fill", "text-warning");
        }

        saveNotesToStorage();
        initSortable();
      },
    });
  }

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

      notes.sort((a, b) => {
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return a.position - b.position;
      });

      notes.forEach((note, index) => {
        const noteElement = document.createElement("div");
        noteElement.className = "note";
        noteElement.dataset.id = note.id;
        noteElement.style.backgroundColor = note.color;
        noteElement.style.opacity = "0";

        if (note.pinned) noteElement.classList.add("pinned");

        noteElement.innerHTML = `
          <div class="note-content" contenteditable="true">${note.content}</div>
          <div class="note-actions">
            <button class="note-btn delete" title="Eliminar">
              <i class="bi bi-trash"></i>
            </button>
            <button class="note-btn color" title="Cambiar color">
              <i class="bi bi-palette"></i>
            </button>
            <button class="note-btn pin" title="${note.pinned ? "Desfijar nota" : "Fijar nota"}">
              <i class="bi ${note.pinned ? "bi-pin-fill text-warning" : "bi-pin"}"></i>
            </button>
          </div>
        `;

        notesGrid.appendChild(noteElement);
        setupNoteEvents(noteElement, note.id);

        gsap.to(noteElement, {
          duration: 0.6,
          y: 0,
          opacity: 1,
          delay: index * 0.05,
          ease: "back.out",
        });
      });
    } else {
      setTimeout(createNewNote, 500);
    }
  }

  // Convertir RGB a HEX
  function rgbToHex(rgb) {
    if (rgb.startsWith("#")) return rgb;

    const values = rgb.match(/\d+/g);
    if (!values || values.length < 3) return "#ffffff";

    const r = parseInt(values[0]).toString(16).padStart(2, "0");
    const g = parseInt(values[1]).toString(16).padStart(2, "0");
    const b = parseInt(values[2]).toString(16).padStart(2, "0");

    return `#${r}${g}${b}`;
  }
});
