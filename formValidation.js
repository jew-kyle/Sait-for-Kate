const needValidation = document.querySelectorAll('input');

needValidation.forEach(input => { input.addEventListener('change', (event) => {
    
    event.preventDefault();
    validation(event);
        
})});

function validation(event) {
    if(event.target.value) {
        if(event.target.validity.patternMismatch) {
            event.target.classList.remove('is-valid');
            event.target.classList.add('is-invalid');
            invalidMargin(event.target);
        } else {
            event.target.classList.remove('is-invalid');
            event.target.classList.add('is-valid');
            event.target.parentNode.classList.remove('mb-2');
            event.target.parentNode.classList.add('mb-3');
        }
    } else {
        event.target.classList.add('is-invalid');
        invalidMargin(event.target);
    }
}

function invalidMargin(element) {
    element.parentNode.classList.remove('mb-3');
    element.parentNode.classList.add('mb-2');
}