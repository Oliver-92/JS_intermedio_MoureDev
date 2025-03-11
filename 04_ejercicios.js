// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

function saludar(name, callback) {
    setTimeout(() => {
        console.log(`Hola, ${name}`);
        callback();
    }, 2000);
}

saludar('Jorge', () => {
    console.log('Adios');
});

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

function task1(callback) {
    setTimeout(() => {
        console.log('Tarea 1 completada');
        callback();
    }, 1000);
}

function task2(callback) {
    setTimeout(() => {
        console.log('Tarea 2 completada');
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log('Tarea 3 completada');
        callback();
    }, 1000);
}

task1(() => {
    task2(() => {
        task3(() => {
            console.log('Todas las tareas completadas');
        });
    });
});


// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

function verifyNumber(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve('Numero par');
        } else {
            reject('Numero impar');
        }
    });
}

verifyNumber(2)
    .then(result => console.log(result))
    .catch(error => console.log(error));

verifyNumber(3)
    .then(result => console.log(result))
    .catch(error => console.log(error));

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

function firstTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Primera tarea completada');
            resolve();
        }, 1000);
    });
}

function secondTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Segunda tarea completada');
            resolve();
        }, 2000);
    });
}

function thirdTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Tercera tarea completada');
            resolve();
        }, 1500);
    });
}

firstTask()
    .then(() => secondTask())
    .then(() => thirdTask())
    .then(() => console.log('Todas las tareas completadas'))
    .catch(error => console.log(error));

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

async function executeTasks() {
    try {
        await firstTask();
        await secondTask();
        await thirdTask();
        console.log('Todas las tareas completadas');
    } catch (error) {
        console.log(error);
    }
}

executeTasks();

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

async function getUser(id) {
    try {
        const user = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id < 5) {
                    resolve({ id, name: `Usuario ${id}` });
                } else {
                    reject('Usuario no encontrado');
                }
            }, 2000);
        });
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

getUser(4);

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:

console.log("Inicio")
setTimeout(() => console.log("setTimeout ejecutado"), 0)
Promise.resolve().then(() => console.log("Promesa resuelta"))
console.log("Fin")

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.

function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promesa 1 completada');
            resolve();
        }, 1000);
    });
}

function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promesa 2 completada');
            resolve();
        }, 2000);
    });
}

function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promesa 3 completada');
            resolve();
        }, 3000);
    });
}

Promise.all([task1(), task2(), task3()])
    .then(() => console.log('Todas las promesas resueltas'))
    .catch(error => console.log(error));


// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

async function waitSeconds(seconds) {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Tiempo finalizado');
            resolve();
        }, seconds * 1000);
    });
}

waitSeconds(3);

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes

async function checkBalance() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(500);
        }, 1000);
    });
}

async function withdrawMoney(amount) {
    const balance = await checkBalance();

    if (amount > balance) {
        throw new Error('Fondos insuficientes');
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(balance - amount);
        }, 2000);
    });
}

async function main() {
    try {
        const balance = await checkBalance();
        console.log(`Saldo disponible: ${balance}$`);

        const newBalance = await withdrawMoney(300);
        console.log(`Retirando 300$...`);
        console.log(`Operación exitosa, saldo restante: ${newBalance}$`);

        const newNewBalance = await withdrawMoney(300);
        console.log(`Retirando 300$...`);
        console.log(`Operación exitosa, saldo restante: ${newNewBalance}$`);
    } catch (error) {
        console.log(error);
    }
}

main();
