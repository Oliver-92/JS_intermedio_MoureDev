// Manejo de DOM (Document Object Model)

// Selección de elementos

// - Métodos básicos

const title = document.getElementById('title'); // id
const subtitles = document.getElementsByClassName('subtitle'); // class
const paragraphs = document.getElementsByTagName('p'); // tag

// - Métodos más modernos
const myDiv = document.querySelector('.div'); 
const myDivs = document.querySelectorAll('.div');

title.textContent = 'Cambiado desde JS';
title.style.color = 'red';
title.style.fontSize = '3rem';

myDiv.innerHTML = '<p>Parrafo agregado desde JS</p>';

// - Modificación de atributos

// -- Obtención de atributos
const myLink = document.querySelector('a');
const url = myLink.getAttribute('href');

// -- Establecimiento de atributos
myLink.setAttribute('href', 'https://google.com');

// -- Comprobación de existencia de atributos
const hasTarget = myLink.hasAttribute('target'); // true o false

// -- Eliminación de atributos
myLink.removeAttribute('target');

// - Interacción con clases CSS
const box = document.querySelector('.box')
box.classList.add('selected');
box.classList.remove('selected');
box.classList.toggle('selected'); // Si no tiene la clase la agrega, si la tiene la elimina

const button = document.querySelector('button');
button.style.backgroundColor = 'red';
button.style.color = 'white';
button.style.padding = '10px 20px';

// Creación y eliminación de elementos

// - Creación de elementos

const nerParagraph = document.createElement('p');
newParagraph.textContent = 'Parrafo creado desde JS';
newParagraph.style.padding =  '8px';

container.appendChild(newParagraph); // Agrega el parrafo al contenedor

// -- Inserción de elementos en un lugar concreto
const itemList = document.createElement('ul');
const newItem = document.createElement('li');
newItem.textContent = 'Item creado desde JS';

const secondItem = itemList.children[1];
itemList.insertBefore(newItem, secondItem); // Inserta el item justo antes del segundo item

secondItem.before(newItem); // Inserta el item justo antes del segundo item
secondItem.after(newItem); // Inserta el item justo despues del segundo item

// Eliminación de elementos

// - Eliminación tradicional

const parent = newParagraph.parentElement;
parent.removeChild(newParagraph);

// Elementos del DOM

const sendButton = document.querySelector('button');

sendButton.addEventListener('click', () => {
    alert('Click!')
})

sendButton.addEventListener('DOMContentLoaded', () => { // Se ejecuta cuando el DOM se ha cargado
    alert('El DOM se ha cargado!')
})

sendButton.addEventListener('mouseenter', () => { // Se ejecuta cuando el ratón pasa por encima
    alert('El ratón entro!')
})

sendButton.addEventListener('mouseleave', () => { // Se ejecuta cuando el ratón sale
    alert('El ratón salio!')
})

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    // Manipular el formulario
})

