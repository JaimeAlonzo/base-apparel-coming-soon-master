let emailInput=document.querySelector('#email-input');

emailInput.oninvalid=e=>{
    e.preventDefault();
    emailInput.classList.add('is-invalid');
}

