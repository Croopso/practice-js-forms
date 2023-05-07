document.addEventListener('DOMContentLoaded', init);

function init() {
    

    const formEl = document.querySelector('form');
    

    if (formEl) {
        formEl.addEventListener('submit', handleSubmit )
    }
}


function handleSubmit(e) {
    e.preventDefault();
   

    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value; 

   

    const liElement = document.createElement('li');
    liElement.classList.add('users-list__person');
    liElement.innerText = firstName + ' ' + lastName;

    const ulElement = e.target.nextElementSibling;
    ulElement.appendChild(liElement);

    e.target.elements.firstName.value = '';
    e.target.elements.lastName.value = '';

}