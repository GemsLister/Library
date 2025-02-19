const showFormButton = document.querySelector('#show-form-btn');
const form = document.querySelector('#form');
const closeButton = document.querySelector('#close-btn');

// To show the form
showFormButton.addEventListener("click", () =>{
    form.style.display = 'grid';
})

// Close the form
closeButton.addEventListener("click", () =>{
    form.style.display = 'none';
})