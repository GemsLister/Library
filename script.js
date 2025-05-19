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
  this.readStatus = Boolean(readStatusCheck);
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
    details.classList.add('details')
    
    const labelsValues = [
      ['Title: ', book.titleVal],
      ['Author: ', book.authorVal],
      ['Pages: ', book.pagesVal],
      ['Read Status: ', book.readStatusCheck ? 'Read' : 'Not Read'],
    ]

    labelsValues.forEach(([labelText, paragraphText])=>{
      const line = document.createElement('div');
      line.classList.add('line');
      line.style.cssText = 'display: flex; gap: 8px';

      const label = document.createElement('h4');
      label.textContent = labelText;
      
      const paragraph = document.createElement('p');
      paragraph.textContent = paragraphText;

      line.append(label, paragraph);
      displaySection.appendChild(line);
    })
  })
}

submitBtn.addEventListener('click', (e)=>{
  createBook();
  e.preventDefault();
})



