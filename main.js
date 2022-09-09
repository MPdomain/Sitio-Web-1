
const ham = document.querySelector('.ham');
const menu = document.querySelector('.nav-color');


ham.addEventListener('click', () => {
    menu.classList.toggle('activado');
    document.body.classList.toggle('no-scroll');
})


/*let passwordClient='password1'

for(let tries=3; tries >= 0; tries--){
    if(prompt('Please enter password') === passwordClient)
    break
    console.log('Contrasena invalida, el cliente tiene ' + (tries) + 'intentos')
    alert('Invalid Password, please try again')
    if(tries===0){
    alert('Invalid password, try again later')
    document.body.innerHTML=('')}
}
*/

let esValido = {
    telefono: false  , codigo : false
}

const compraEntradaForm = document.getElementById('compraEntradaForm')
compraEntradaForm.addEventListener('submit', (e)=>{
e.preventDefault()
    const nombre = compraEntradaForm.nombre.value
    const apellido = compraEntradaForm.apellido.value
    const telefono =  (compraEntradaForm.telefono.value)
    const entradas = Number(compraEntradaForm.numeroEntradas.value)
    const tarjeta =  (compraEntradaForm.tipoTarjeta.value)
    const nombreTarjeta = compraEntradaForm.nombreTarjeta.value
    const numeroTarjeta = compraEntradaForm.numeroTarjeta.value
    const codigoSeguridad = compraEntradaForm.codigoSeguridad.value
alert(`tus datos son:
nombre: ${nombre}
apellido: ${apellido}
telefono: ${telefono}
entradas: ${entradas}
tipo de tarjeta: ${tarjeta}
nombre de tarjeta: ${nombreTarjeta}
numero de tarjeta: ${numeroTarjeta}
codigo de seguridad: ${codigoSeguridad}`)
})

let entrada = 14.0000

compraEntradaForm.codigoSeguridad.onkeyup=(e)=>{
    let numeroCodigo = e.target.value
    let cantidadNumero = numeroCodigo.length
    if(cantidadNumero !==3){
        setError('codigo', 'codigo incorrecto')
    }
    else if(!esNumero(numeroCodigo)){
        setError ('codigo', 'solo se admiten numeros')
    }
    else setError('codigo', '')
    chequearValidez()
}

compraEntradaForm.telefono.onkeyup=(e)=>{
    let numeroTelefono = e.target.value
    let cantidadNumero = numeroTelefono.length
    if (cantidadNumero!==10){
        setError('telefono', 'numero incorrecto')
    }
    else if(!esNumero(numeroTelefono)){
        setError ('telefono','solo se admiten numeros')
    }
    else setError('telefono', '')
    chequearValidez()
}

function chequearValidez(){
    let botonCompraEntrada = document.getElementById('botonCompraEntrada')
    botonCompraEntrada.disabled=!Object.values(esValido).every(Boolean)
}
chequearValidez()

function setError(key, message){
    let elementoError = document.getElementById('error-' + key)
    esValido[key]=!message
    elementoError.innerText = message
}

function esNumero(palabra){
    for (let i=0; i<palabra.length; i++){
        if(!isFinite(palabra[i]))
        return false
    }
    return true
}


const puestoClasses = {
    libre : 'lugar disponible',
    ocupado : 'lugar ocupado',
    invalido: 'no existe'
}

const crearPuesto = (i,j) => {
    const seat =   document.createElement ('div')
    const puesto = puesto [i][j]
    const tipo = puesto === null ? 'invalido' : puesto ? 'ocupado' : 'libre'

    seat.classList.add(puestoClasses[tipo])
    if (puesto ===null ) return seat
    seat.onclick = () => {
        const puesto  = puesto [i][j]
        const tipo = puesto ? 'ocupado' : 'libre'
        puesto[i][j] = !puesto
        seat.classList.remove(puestoClasses[tipo])
        const nuevoTipo = !puesto ? 'ocupado' : 'libre'
        elm.classList.add(puestoClasses[nuevoTipo])
    }
    return seat
}

const puestosSeat = document.getElementById('puesto')
for(let i = 0; i < puesto.length; i++) {
    const columnaSeat = document.createElement('div')
    columnaSeat.classList.add('columna-de-puestos')
    puestosSeat.appendChild(columnaSeat)
    for(let j = 0; j < columna.length; j++) {
        columnaElm.appendChild(crearPuesto(i, j));
    }
}