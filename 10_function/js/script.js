console.log('You are at'+window.location);

function sayHi() {
	return 'Hi student';
	/* Мы бы могли не писать return,
	а сразу сделать так чтобы функция 
	выводил 'Hi student' в консоль: 
		console.log('Hi student'),
	и тогла у меня бы все получилось,
	потому что функция при вызове делала
	бы эту операцию, но я пошел другим путем
	и я назначил возвращаемое значение, зачем 
	я это сделал? Чтобы я мог на выходе определять
	куда мне отправить это значение, например мне 
	интересно отправит это в консоль */
}

console.log(sayHi());
/* кроме "console.log" можно использовать
и другие операции, к примеру: "alert",
"document.body.innerHTML" */

function sayName(name) {
	return 'Hello '+name;
}

console.log(sayName(prompt('Write your name')))