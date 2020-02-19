console.log('You are at'+window.location);

let myFunc = function(element, color) {
	element.style['background-color'] = color;
}

const heading = document.querySelector('h1');
const par = document.querySelector('p');
const main = document.querySelector('h2');
let myColor = prompt('what color do you want?');

myFunc(heading, 'blue');
myFunc(par, 'black');
myFunc(main, myColor);