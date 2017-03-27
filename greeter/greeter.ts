interface Person {
	firstName : string;
	lastName : string;
}

function greeting(person : Person) {
	return `Hello, ${person.firstName} ${person.lastName}`;
}

var user = {firstName : 'Jane', lastName : 'User'};

class Greeter {
	constructor(public greeting: string) {}
	
	greet() {
		return `<h1>${this.greeting}</h1>`;
	}
}

let greeter = new Greeter('hello, world !');

document.body.innerHTML = greeter.greet();

document.body.innerHTML = greeting(user);