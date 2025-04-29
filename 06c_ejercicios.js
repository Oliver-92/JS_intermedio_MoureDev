/*
Clase 6 - Manejo del DOM (06/03/2025)
Vídeo: https://www.twitch.tv/videos/2403686130?t=00h11m52s
*/

// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página

// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL

// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página

// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul

// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">

// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM

// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"

// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente


// 1
const title = document.querySelector('#title');
title.textContent = '¡Hola Mundo!';

// 2
const image = document.querySelector('#myImage');
image.src = 'https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'


// 3
const box = document.querySelector('#box');
box.className = 'resaltado';

// 4
const parrafo = document.querySelector('#paragraph');
parrafo.style.color = 'blue';


// 5
const button = document.querySelector('button');
button.addEventListener('click', () => {
        const liElement = document.createElement('li');
        liElement.textContent = 'Nuevo elemento y lo agregue a una lista';
        const list = document.querySelector('#list');
        list.appendChild(liElement);
})

// 6
const btnDelete = document.querySelector('#btn-delete');
const paragraphDelete = document.querySelector('#deleteParagraph');

btnDelete.addEventListener('click', () => {
    paragraphDelete.remove();
})