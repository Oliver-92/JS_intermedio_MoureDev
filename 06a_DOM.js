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
box.classList.add('red');

// 01:57:51