let textVorodi = document.querySelector(".title-input");
let noteClick = document.querySelector(".add-note");
let form = document.querySelector("#add-note");
let noteMatne = document.querySelector(".note-matne");
let noteUl = document.querySelector(".note-ul");
let newLi = document.createElement("li");

// Selecting the 'Add New Note' button element from the HTML.
const addnewnoteBtn = document.querySelector('.add-new');

// Selecting the modal element used for adding notes.
const addNoteModal = document.querySelector('.modal-style');

// Selecting the form element used for adding new notes.
const addnoteForm = document.querySelector('#add-note');

// Selecting the wrapper element that will contain the list of notes.
const listwrapper = document.querySelector('.list');

// Adding a click event listener to the 'Add New Note' button.
addnewnoteBtn.addEventListener('click', () => {
    // Toggling the 'hidden' class on the modal to show/hide it.
    addNoteModal.classList.toggle('hidden');
});

// Adding a submit event listener to the add note form.
addnoteForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Preventing the form from submitting and refreshing the page.

    // Selecting input elements for title and description from the form.
    const titleInput = document.querySelector('.title-input');
    const descriptionInput = document.querySelector('.description-textarea');

    // Creating new HTML elements for the note display.
    const newdiv = document.createElement('div'); // Div container for the note.
    const headline = document.createElement('p'); // Paragraph for the note title.
    const description = document.createElement('span'); // Span for the note description.
    const deleteBtn = document.createElement('button'); // Button to delete the note.
    
    // Setting the text content for the delete button.
    deleteBtn.textContent = 'Delete';
    
    // Adding CSS class to the new note container.
    newdiv.classList.add('note-matne');
    
    // Setting the text content for the note title and description.
    hedline.innerText = titleInput.value;
    description.innerText = descriptionInput.value;
    
    // Appending the title, description, and delete button to the note container.
    newdiv.appendChild(headline);
    newdiv.appendChild(description);
    newdiv.appendChild(deleteBtn);
    
    // Appending the new note container to the list wrapper.
    listwrapper.appendChild(newdiv);
    
    // Resetting the form inputs after adding the note.
    addnoteForm.reset();
    
    // Hiding the modal after adding the note.
    addNoteModal.classList.add('hidden');
      // Adding a click event listener to the delete button within the new note.
      deleteBtn.addEventListener('click', () => {
        deleteNote(newdiv); // Call the deleteNote function and pass the note container to be deleted.
    });
});
function deleteNote(noteElement) {
    // Remove the note's parent container (the div containing the note) from the list wrapper.
    listwrapper.removeChild(noteElement);
}