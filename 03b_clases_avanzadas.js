// Clases avanzadas

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
        greet = function () {
            console.log(`Hello, ${this.name}`)
        }
    }

const newPerson = new Person('Carlos', 20);

newPerson.greet();

newPerson.sayAge = function () {
    console.log(`I'm ${this.age} years old`)
}

newPerson.sayAge();

// Clases abstractas

class Animals {
    constructor(name){
        if (new.target === Animals){
            throw new Error('You cannot create an instance of an abstract class')
        }
        this.name = name
    }

    makeSound() {
        throw new Error('This metod must be implemented by subclasses')
    }
}

// Error
// const animal = new Animals('Kitty');
// console.log(animal);

// Polimorfismo - Abstracción

class Cat extends Animals {
    makeSound() {
        console.log('Meow');
    }
}

class Dog extends Animals {
    makeSound() {
        console.log('Woof');
    }
}

const cat = new Cat('Kitty');
console.log(cat);

const dog = new Dog('Fido');
console.log(dog);


dog.makeSound();

// Mixins

const FlyMixin = {
    fly() {
        console.log(`${this.name} is flying`);
    }
}

class Bird extends Animals{

}

Object.assign(Bird.prototype, FlyMixin);

const bird = new Bird('Polly');
console.log(bird.name);
bird.fly();

// Patrones de diseño - Singleton (una clase que solo se puede instanciar una sola vez)

class Session {
    constructor(name){
        if (Session.instance) {
            return Session.instance
        }
        this.name = name
        Session.instance = this
    } 
}

const session1 = new Session('Braise');
const session2 = new Session('Pedro');
console.log(session1);
console.log(session2);
console.log(session1 === session2);

// Symbol

const ID = Symbol('id'); // Inmutable, no se puede modificar, es única

class User {
    constructor(name){
        this.name = name
        this[ID] = Math.random();
    }
}

const user = new User('Jorge');
console.log(user.name);
console.log(user[ID]); // Es una propiedad semiprivada, que puedo modificar si conozco el nombre

user[ID] = 10;
console.log(user[ID]);

// Instanceof

class Car {}

const car = new Car();

console.log(car instanceof Car); // Es una instancia de la clase Car? True

const anotherCar = Object.create(Car.prototype);
console.log(anotherCar instanceof Car);

// Proxy 

const proxy = {
    get(target, property){ // target es el objeto (BankAccount = {balance = 100}), property es la propiedad (balance)
        console.log(`Se accede a la propiedad ${property}`);
        return target[property];
    },
    set(target, property, value){ // value es el nuevo valor (200)
        if (property === 'balance' && value < 0) {
            throw new Error('El balance no puede ser negativo');
        }
        target[property] = value
    }
}

class BankAccount {
    constructor(balance){
        this.balance = balance
    }
}

const account = new Proxy(new BankAccount(100), proxy);
console.log(account.balance);

account.balance = 200;
console.log(account.balance);
