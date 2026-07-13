const inputTextEl = document.querySelector(".input-text");
const inputSubmitBtnEl = document.querySelector(".input-submit-btn");
const showNotesEl = document.querySelector(".show-note")

let notes = [];

function render(){
    let loadNotes = localStorage.getItem("Notes");
    notes.push(JSON.parse(loadNotes));
    notes.forEach((note) => {
        showNotesEl.insertAdjacentHTML("beforeend", `
            <div class="box-note">
                <h3 class="box-title">${note.titleNote}</h3>
                <p class="box-content">${note.contentNote}</p>
            </div>`);
    })
}

function loadNotes(){
    localStorage.setItem("Notes", JSON.stringify(notes));
}

function addNewNote(){
    let newNote = {
        titleNote: Date.now(),
        contentNote: inputTextEl.value
    }
    if(newNote.contentNote === ""){
        return;
    }
    notes.push(newNote);
    loadNotes();
    render();
    inputTextEl.value = "";
}
inputSubmitBtnEl.addEventListener("click", addNewNote);