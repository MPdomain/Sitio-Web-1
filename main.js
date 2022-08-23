
const ham = document.querySelector('.ham');
const menu = document.querySelector('.nav-color');


ham.addEventListener('click', () => {
    menu.classList.toggle('activado');
    document.body.classList.toggle('no-scroll');
})


let passwordClient='password1'

for(let tries=3; tries >= 0; tries--){
    if(prompt('Please enter password') === passwordClient)
    break
    console.log('Contrasena invalida, el cliente tiene ' + (tries) + 'intentos')
    alert('Invalid Password, please try again')
    if(tries===0){
    alert('Invalid password, try again later')
    document.body.innerHTML=('')}
}