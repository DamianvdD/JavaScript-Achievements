const textElement = document.getElementById('text');

document.addEventListener('click', () => {
    textElement.innerHTML = 'Scroll! Do not click! ';
});

document.addEventListener('wheel', () => {
    textElement.innerHTML = textElement.innerHTML + '!';
});