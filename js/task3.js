let firstBox = document.querySelector('.first');
let secondBox = document.querySelector('.second');
let third = document.querySelector('.third');

firstBox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'green';
    secondBox.style.backgroundColor = 'grey';
    third.style.backgroundColor = 'grey';

});

secondBox.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'yellow';
    firstBox.style.backgroundColor = 'grey';
    third.style.backgroundColor = 'grey';
});

third.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red';
    firstBox.style.backgroundColor = 'grey';
    secondBox.style.backgroundColor = 'grey';
});