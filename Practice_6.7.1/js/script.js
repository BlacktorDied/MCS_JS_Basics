class Customer {
	constructor(name){
		this.name = name;
	}
	sayHi() {
		return 'Куплено';
	}
}

class childCustomer extends Customer{
	getPresent(){
		return 'Шарик в подарок'
	}
}

const Parent = new Customer('Viktor');
console.log(Parent);
console.log(Parent.sayHi());

const Child = new childCustomer('Sasha');
console.log(Child);
console.log(Child.sayHi());
console.log(Child.getPresent());