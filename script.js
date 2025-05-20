const addBookBtn = document.querySelector('#addBookBtn');
const submitBtn = document.querySelector('#submitBtn');

const formElement = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const readStatus = document.querySelector('#readStatus');


// book array
const myLibrary = [];


addBookBtn.addEventListener('click', ()=>{
    formElement.style.cssText = 'display: flex; flex-direction: column';
})

function Book(titleVal, authorVal, pagesVal, readStatusCheck) {
  this.titleVal = titleVal;
  this.authorVal = authorVal;
  this.pagesVal = pagesVal;
  this.readStatusCheck = Boolean(readStatusCheck);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  display();
}

function createBook(){
  if(title && author && pages && readStatus){
    const addNewBook = new Book(title.value, author.value, pages.value, readStatus.checked);
    addBookToLibrary(addNewBook);
  } else {
    title.value = '';
    author.value = '';
    pages.value = '';
    readStatus.checked = false;
  }
}

function display(){
  const displaySection = document.querySelector('#displayBooks');
  displaySection.textContent = '';
  
  myLibrary.forEach((book, index)=>{
    const details = document.createElement('article');
    details.classList.add('details');
    
    // Title Container
    const titleLabelVal = document.createElement('div');
    titleLabelVal.classList.add('titleLabelVal');
    titleLabelVal.style.cssText = 'display:flex; gap: 8px;'
    const titleLabel = document.createElement('h4');
    titleLabel.textContent = 'Title: ';
    const titleText = document.createElement('p');
    titleText.textContent = `${book.titleVal}`;
    titleLabelVal.append(titleLabel, titleText);

    // Author Container
    const authorLabelVal = document.createElement('div');
    authorLabelVal.classList.add('authorLabelVal');
    authorLabelVal.style.cssText = 'display:flex; gap: 8px;'
    const authorLabel = document.createElement('h4');
    authorLabel.textContent = 'Author: ';
    const authorText = document.createElement('p');
    authorText.textContent = `${book.authorVal}`;
    authorLabelVal.append(authorLabel, authorText);

    // Pages Container
    const pagesLabelVal = document.createElement('div');
    pagesLabelVal.classList.add('pagesLabelVal');
    pagesLabelVal.style.cssText = 'display:flex; gap: 8px;'
    const pagesLabel = document.createElement('h4');
    pagesLabel.textContent = 'Pages: ';
    const pagesText = document.createElement('p');
    pagesText.textContent = `${book.pagesVal}`;
    pagesLabelVal.append(pagesLabel, pagesText);

    // Read Status
    const readLabelVal = document.createElement('div');
    readLabelVal.classList.add('pagesLabelVal');
    readLabelVal.style.cssText = 'display:flex; gap: 8px;'
    const readLabel = document.createElement('h4');
    readLabel.textContent = 'Pages: ';
    const readText = document.createElement('p');
    readText.textContent = `${book.readStatusCheck ? 'Read' : 'Not Read'}`;
    readLabelVal.append(readLabel, readText);
    console.log(book.readStatusCheck);
    
    // Buttons Container
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    buttons.style.cssText = 'display: flex; gap: 8px';
    // for delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    
    // for toggle button
    let readNotRead = document.createElement('button');
    readNotRead.textContent = 'Toggle Read';
    readNotRead.classList.add('readNotRead');

    buttons.append(deleteBtn, readNotRead);
    details.append(titleLabelVal, authorLabelVal, pagesLabelVal, readLabelVal, buttons);
    displaySection.appendChild(details);
    
    // delete button function
    deleteBtn.addEventListener('click', ()=>{
      myLibrary.splice(index, 1);
      display();
    })
    // read or not-read
    readNotRead.addEventListener('click', ()=>{
      book.readStatusCheck = !book.readStatusCheck;
      if(book.readStatusCheck) readText.textContent = 'Read';
      else readText.textContent = 'Not Read';
    })
  })
}

submitBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  createBook();
})



