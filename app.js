const nameInput = document.getElementsByTagName('input')[0];
const textArea = document.querySelector('textarea');
const card = document.querySelector('.carousel-inner');

function checkOrder(event) {
    //console.log(event.target.parentNode.);
    textArea.value = 'Услуга: ' + event.target.parentNode.querySelector('h2').innerText;
    nameInput.scrollIntoView(true);
    nameInput.focus();
    nameInput.select();
}

card.addEventListener('click', checkOrder);

