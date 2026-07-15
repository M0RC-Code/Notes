const inputTextEl = document.querySelector(".input-text");
const inputSubmitBtnEl = document.querySelector(".input-submit-btn");
const showNotesEl = document.querySelector(".show-note");

let notes = [];

function render() {
    // load from local storage
    const stored = localStorage.getItem("Notes");
    notes = stored ? JSON.parse(stored) : [];   // بازنویسی نه اضافه کردن

    // clear show notes
    showNotesEl.innerHTML = "";

    // show note
    notes.forEach((note) => {
        showNotesEl.insertAdjacentHTML("beforeend", `
            <div class="box-note">
                <h3 class="box-title">${note.titleNote}</h3>
                <p class="box-content">${note.contentNote}</p>
            </div>
        `);
    });
}

function saveNotes() {
    localStorage.setItem("Notes", JSON.stringify(notes));
}

function addNewNote() {
    const content = inputTextEl.value.trim();
    if (content === "") {
        alert("Please Enter note");
        return;
    }

    const newNote = {
        titleNote: Date.now(),
        contentNote: content
    };
    notes.push(newNote);
    saveNotes();
    render();
    inputTextEl.value = "";
}

// render notes from local storage
render();

inputSubmitBtnEl.addEventListener("click", addNewNote);