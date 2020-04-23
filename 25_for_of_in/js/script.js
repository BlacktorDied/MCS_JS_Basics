console.log('You are at'+window.location);

const buttons = document.querySelectorAll('button');
console.log(buttons);

/*for(button of buttons) {
	button.style.backgroundColor = 'lightblue';
}*/

let person = {
	name: 'Sasha',
	surname: 'patlukh',
	teacher: true
}

/*for(key in buttons) {
	buttons[key].style.backgroundColor = 'lightblue';
}*/

for(key in person) {
	console.log(person[key]);
}