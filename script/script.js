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
const cardContainer = document.querySelector('.card-container');


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

  if(!readOrNot){
    readOrNot = false; //If it is not read
  }
  else if (readOrNot){
    readOrNot = true; //If it is read
  }

  const newBook = new Book(title, author, pages, readOrNot);
  myLibrary.push(newBook);
  myLibrary.forEach(book => console.log(book));


  const cardBody = document.createElement('article');
  cardBody.classList = 'card-body';

  // Container for displays
  const displayContainer = document.createElement('div');
  displayContainer.classList = 'display-container';

  // For displaying the title in container
  const displayTitle = document.createElement('p');
  displayTitle.textContent = `Title: ${title}`;

  // For displaying the author in container
  const displayAuthor = document.createElement('p');
  displayAuthor.textContent = `Author: ${author}`;

  // For displaying the pages in container
  const displayPages = document.createElement('p');
  displayPages.textContent = `Pages: ${pages}`;

  // For displaying the read/not-read in container
  const displayReadStatus = document.createElement('button');
  if(!readOrNot){
    displayReadStatus.textContent = 'Not Read';
  }
  else{
    displayReadStatus.textContent = 'Read';
  }

  // displayReadStatus.addEventListener("click", () =>{
  //   if()
  // })

  // insert displays in display-container
  displayContainer.append(displayTitle, displayAuthor, displayPages, displayReadStatus);

  // insert display-container in card-body
  cardBody.appendChild(displayContainer);

  // insert card-body in card-container
  cardContainer.appendChild(cardBody);

  // Clear the form when it is submitted
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readInput.checked = '';
  notReadInput.checked = '';
  form.style.display = 'none';
  // ===================================
}

submitButton.addEventListener("click", (event) =>{
  event.preventDefault(); //To prevent default form submission
  addBookToLibrary();
})