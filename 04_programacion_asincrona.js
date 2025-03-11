// Código sincróno

console.log('Inicio');

// for (let i = 0; i < 1000000000; i++) {}

console.log('Fin');

// Event Loop - Asíncrono (Bucle de eventos). Componentes:

// - Call Stack (Pila de ejecución)
// - Web APIs (APIs del navegador) o Node.js
// - Task Queue (Cola de tareas, como setTimeout) y Microtask Queue (Cola de microtareas, Promesas)

// Flujo del Event Loop:
// 1. Call Stack
// 2. Operaciones asíncronas -> Web APIs o Node.js
// 3. Operación termina -> La colaca en Task Queue o Microtask Queue
// 4. Si el Call Stack está vacío -> Mueve tareas del Task Queue o Microtask Queue al Call Stack
// 5. El proceso se repite

// Codigo asíncrono

// - Callbacks

console.log('Inicio');

setTimeout(() => {
    console.log('Esto se ejecuta después de 2 segundos');
}, 2000);

console.log('Fin');

function step1(callback) {
    setTimeout(() => {
        console.log('Paso 1 completado')
        callback();
    }, 1000)
};

function step2(callback) {
    setTimeout(() => {
        console.log('Paso 2 completado')
        callback();
    }, 1000)
};

function step3(callback) {
    setTimeout(() => {
        console.log('Paso 3 completado')
        callback();
    }, 1000)
};

step1(() => {
    step2(() => {
        step3(() => {
            console.log("Todos los paso completados")
        })
    })
})

// - Promises

const promise = new Promise((resolve, reject) => {
    setInterval(() => {
        const ok = true;
        if (ok) {
            resolve('Todo bien');
        } else {
            reject('Todo mal');
        }
    }, 4000);
})

promise.then(resutl => {
    console.log(resutl);
}).catch(error => {
    console.log(error);
})

// - Encadenamiento de promesas

function step1Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Paso 1 con promesa completado')
            resolve()
        }, 100)
    })
}

function step2Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Paso 2 con promesa completado')
            resolve()
        }, 1000)
    })
}

function step3Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Paso 3 con promesa completado')
            resolve()
        }, 100)
    })
}

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(() => {
      console.log("Todos los paso con promesa completados")  
    })

// - Async/Await

function wait(ms){
    return new Promise(resolve => 
        setTimeout(resolve, ms))
}
async function process (){
    console.log("Inicio del proceso")

    await wait(5000)
    console.log("Proceso después de 5 segundos")

    console.log("Fin del proceso")
}

process()