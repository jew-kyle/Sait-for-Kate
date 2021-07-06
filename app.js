const container = document.querySelector('.container');
const movedBlock = document.querySelector('#moved');

container.addEventListener('mouseover', (event) => {
    createShadow(event);
});

container.addEventListener('mousemove', (event) => {
    moveShadow(event);
});

container.addEventListener('mouseleave', () => {
    movedBlock.classList.add('hidden');
    movedBlock.classList.remove('shadow');
});

movedBlock.addEventListener('mouseover', (event) => {
    console.log(event.target.parentNode);
    if (!event.target.parentNode.classList.contains('container')) {
        event.target.classList.add('hidden');
        event.target.classList.remove('shadow');
    }
})


function createShadow(event) {
    movedBlock.classList.add('shadow');
    movedBlock.classList.remove('hidden');
    movedBlock.style.top = `${event.clientY - 50}px`;
    movedBlock.style.left = `${event.clientX - 50}px`;
}

function moveShadow(event) {
    movedBlock.style.top = `${event.clientY - 50}px`;
    movedBlock.style.left = `${event.clientX - 50}px`;
}