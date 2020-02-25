console.log('You are at'+window.location);

var a = 'hi';

function myFunc() {
	a = 'hello'
	return a;
}

console.log(a);

function myFunc2() {
	var b =3;
	console.log(b);
}

myFunc2();

if(true) {
	var c = 5;
	let d = 6;
}

console.log(c);
console.log(d); // ошибка

/*
{} - определяют зоны видимости
var - это глобальная переменная (она видна из условных блоков, исключение function)
let - не глобальная переменая (не видна из условных блоков)
*/