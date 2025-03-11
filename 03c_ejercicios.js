// Agrega una función al prototipo de un objeto

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

function greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
}

Person.prototype.greet = greet;

const person = new Person('John', 30);

person.greet();

// Crea un objeto que herede de otro

class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }

    sayCourse() {
        console.log(`I'm studying ${this.course}`);
    }
}

const student = new Student('Jane', 25, 'JavaScript');

student.greet();
student.sayCourse();

// Define un método de instancia en un objeto ?¿?¿

// Haz uso de get y set en un objeto

const personn = {
    name: 'John',
    age: 30,

    get name() {
        return this._name;
    },

    set name(value) {
        this._name = value;
    }
};

personn.name = 'Jane';

console.log(personn.name);

// Utiliza la operación assing en un objeto

// Crea una clase abastracta

// Utiliza polimorfismo en dos clases diferentes

// Implementa un Mixin

// Crea un Singleton

// Desarrolla un Proxy

