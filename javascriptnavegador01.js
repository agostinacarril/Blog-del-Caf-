// QUERYSELECTOR: solo selecciona 0 o 1 elemento

const heading = document.querySelector('.headertexto h2') //lo selecciona
//heading.textContent = 'Nuevo heading'; //cambia el texto desde Javascript
heading.classList.add('nuevaclase'); //le agrega una nueva clase
console.log(heading); 

// QUERYSELECTORALL:  selecciona todos

const enlace = document.querySelectorAll('.navegacion a')
//enlace[0].textContent = 'hola'; //solo selecciona un elemento
enlace[0].classList.add('nuevaclase');
enlace[0].classList.remove('nuevaclase'); //saca la clase
//enlace[2].href('http://google.com'); //cambia el href-enlace
console.log(enlace);

// GETELEMENTBYID:  en ves de la clase, selecciona el ID

const heading2 = document.getElementById('heading2');
console.log(heading2);

// GENERAR UN NUEVO ENLACE

//const nuevoEnlace = document.createElement('A'); // 'A' de enlace

//nuevoEnlace.href = 'nuevo-enlace.html'; // agregamos el href

//nuevoEnlace.textContent = 'Tienda Virtual'; // agregamos el texto

//nuevoEnlace.classList.add('nuevoenlace'); // agregamos la clase

//const navegacion = document.querySelector('.navegacion') // dentro de donde lo queremos agregar en el documento

//navegacion.appendChild(nuevoEnlace); // agregandolo al documento dentro de la clase '.navegacion'

//console.log(nuevoEnlace);

//EVENTOS

console.log(1);

window.addEventListener('load', function(){ //load espera a que el JS y los archivos que dependen del HTML esten listo(como imagenes o css)
    console.log(2);
});

window.onload = function(){
    console.log(3);
};

document.addEventListener('DOMContentLoaded', function(){ //solo espera el HTML, pero no CSS o imagenes
    console.log(4);
});

console.log(5);

//window.onscroll = function(){   //se descarga cada vez que se hace scroll
//    console.log('scrolling...'); // si pones function(evento) y console.log(evento) tambien funciona
//};

//SELECCIONAR ELEMENTOS Y ASOCIARLES UN EVENTO

//const botonEnviar = document.querySelector('.boton');
//botonEnviar.addEventListener('click', function(evento) { // El 'click' va unicamente en botones/fotos. Ver 'submit' abajo
//    console.log(evento);
//    evento.preventDefault();
//    //validar formuilario:
//    console.log('enviando formulario');
//})

// EVENTOS EN LOS INPUTS Y TEXTAREA

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(evento) {
    //console.log(e.target.value);
    datos[evento.target.id] = evento.target.value;
    console.log(datos);
}

// EL EVENTO DE 'SUBMIT': Va para formularios.

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento){
evento.preventDefault();

//Validando formulario
const { nombre, email, mensaje } = datos;
if(nombre === '' || email === '' || mensaje === ''){
    mostrarError('Todos los campos son obligatorios');

    return; //Return corta la ejecución de la consola, es decir, no da 'Enviando Formulario'
};
//Mensaje de Formulario Enviado:
mensajeEnviado('Formulario Enviado correctamente');
});

//Mensaje de error
function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    
    formulario.appendChild (error);
    //Para que desaparezca el mensaje de error:
    setTimeout(() => {
    error.remove(); },
    10000);
}
//Mensaje de Formulario Enviado:
function mensajeEnviado(mensaje){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('mensajeenviado');
    
    formulario.appendChild (alerta);
    //Para que desaparezca el mensaje de error:
    setTimeout(() => {
    alerta.remove(); },
    5000);
}