// beginner sticky notes with localStorage persistence
let notes = JSON.parse(localStorage.getItem('notes') || '[]');
// migrate simple strings to objects with title
if (notes.length && typeof notes[0] === 'string') {
    notes = notes.map(t => ({ title: '', body: t }));
}
let currentIndex = 0;

const textarea = document.getElementById('show_text');
const titleInput = document.getElementById('note_title_input');
const noteDisplay = document.getElementById('note_display');
const titleDisplay = document.getElementById('note_title_display');
const preview = document.querySelector('.preview');
const btnAdd   = document.getElementById('btnAdd');
const btnDelete= document.getElementById('btnDelete');
const btnEdit  = document.getElementById('btnEdit');
const btnNext  = document.getElementById('btnNext');
const btnPrev  = document.getElementById('btnPrev');

function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function showNote() {
    if (notes.length === 0) {
        textarea.value = '';
        titleInput.value = '';
        noteDisplay.textContent = '';
        titleDisplay.textContent = '';
        btnDelete.disabled = true;
        btnEdit.disabled = true;
        btnNext.disabled = true;
        btnPrev.disabled = true;
    } else {
        const note = notes[currentIndex];
        textarea.value = note.body;
        titleInput.value = note.title;
        noteDisplay.textContent = note.body;
        titleDisplay.textContent = note.title;
        btnDelete.disabled = false;
        btnEdit.disabled = false;
        btnNext.disabled = notes.length === 1;
        btnPrev.disabled = notes.length === 1;
    }
}

function showPreview() {
    preview.style.display = 'block';
}

function hidePreview() {
    preview.style.display = 'none';
}

btnAdd.addEventListener('click', () => {
    const text = textarea.value.trim();
    const title = titleInput.value.trim();
    if (text) {
        notes.push({ title, body: text });
        currentIndex = notes.length - 1;
        saveNotes();
        showNote();
        hidePreview();
    }
});

btnDelete.addEventListener('click', () => {
    if (notes.length === 0) return;
    notes.splice(currentIndex, 1);
    if (currentIndex >= notes.length) {
        currentIndex = notes.length - 1;
    }
    saveNotes();
    showNote();
});

btnEdit.addEventListener('click', () => {
    if (notes.length === 0) return;
    notes[currentIndex] = {
        title: titleInput.value.trim(),
        body: textarea.value
    };
    saveNotes();
});

btnNext.addEventListener('click', () => {
    if (notes.length === 0) return;
    currentIndex = (currentIndex + 1) % notes.length;
    showNote();
    showPreview();
});

btnPrev.addEventListener('click', () => {
    if (notes.length === 0) return;
    currentIndex = (currentIndex - 1 + notes.length) % notes.length;
    showNote();
    showPreview();
});

showNote();
hidePreview();  // hide on initial load
