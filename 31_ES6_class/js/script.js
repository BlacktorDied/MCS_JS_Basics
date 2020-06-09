console.log('You are at'+window.location);

class User {
	constructor(name, email, password){
		this.name = name;
		this.email = email;
		this.password = password;
	}
	sayHi() {
		return 'Hello'+this.name;
	}
}

class Female extends User {
	sayHi(){
		return 'Hi '+this.name+' You are join!';
	}
}

const Man = new User('someone', '123@dfg.com', '1234567');
console.log(Man);

const Girl = new Female('Girl', 'Girl@dfg.com', 'Girl1234567');
console.log(Girl);