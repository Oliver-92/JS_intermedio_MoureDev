// Manipulación del Dom - Ejemplo con hmtl
// TaskList

const myInput = document.querySelector('input');
const myButton = document.querySelector('button');
const myList = document.querySelector('ul');

function addTask() {
    // Validación
    if (myInput.value === '') {
        return
    }
    // Añadir tarea
    const newElement = document.createElement('li'); 
    newElement.textContent = myInput.value;

    newElement.addEventListener('click', () => {
      newElement.remove();  
    })
    
    myList.appendChild(newElement);
    myInput.value = '';
}

myButton.addEventListener('click', addTask);
myInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
}); // Evento de teclado (enter)