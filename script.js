// complete this js code
class Person{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	gteet(){
		console.log(`Hello, my name is ${name}, I am ${age} years old`)
	}
}
class Emploee extends Person {
	constructor(name,age,jobTitle) {
		this.name=name;
		this.age=age;
		this.jobTitle=jobTitle;
	}
	jobGreet(){
		console.log(`Hello, my name is ${name}, I am ${age} years old, and my job title is ${jobTitle}`)
	}
}
function Person(name, age) {}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
    }
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

function Employee(name, age, jobTitle) {}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;



