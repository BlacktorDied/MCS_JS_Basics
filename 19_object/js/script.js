console.log('You are at'+window.location);

let person = {
	name : 'Maloni',
	surname : 'Bacon',
	age : 18,
	student : true,
	sayHello : function() {
		return 'Hello ' + this.name;
	}
}

console.log(person.name);
console.log(person.sayHello());

// Можно добавлять свойстыв к обьекту //
person.learningHowToCode = true;
console.log(person);

// Свойства обьектов можно перезаписывать //
person.age = 21;
console.log(person);