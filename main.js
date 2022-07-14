const ham = document.querySelector('.ham');
const menu = document.querySelector('.nav-color');


ham.addEventListener('click', () => {
    menu.classList.toggle('activado');
})

