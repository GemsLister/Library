const showFormButton = document.querySelector('#show-form-btn');
const submitButton = document.querySelector('#submit-btn');
const form = document.querySelector('#form');
const closeButton = document.querySelector('#close-btn');
// Inputs (Title, Author, Pages, Read/Not)
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
const notReadInput = document.querySelector('#not-read');
// =================================================


// To show the form
showFormButton.addEventListener("click", () =>{
    form.style.display = 'grid';
})

// Close the form
closeButton.addEventListener("click", () =>{
    form.style.display = 'none';
})

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  
  let readOrNot = readInput.checked;

  if(!readOrNot.checked){
    readOrNot = notReadInput.checked;
  }

  const newBook = new Book(title, author, pages, readOrNot);
  myLibrary.push(newBook);

  submitButton.addEventListener("click", () =>{
    newBook.title();  
  })
}