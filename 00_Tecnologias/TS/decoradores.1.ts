
function course(target) {
	Object.defineProperty(
		target.prototype, 
		'course', 
		{value: () => "Angular 2"}
	)
}

@course
class Person {
	firstName;
	lastName;
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

let oPersona = new Person("Pepe", "Pérez");
console.log(oPersona.course()); // Angular 2