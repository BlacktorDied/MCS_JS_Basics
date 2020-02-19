console.log('You are at'+window.location);

let myText = (element, text) => {
	element.innerHTML = text;
}

const urText = prompt('What do you want to write on the site?');
const par = document.querySelector('.mainText');
const heading = document.querySelector('h1');

/*myText(document.body, 'Hello');*/
myText(heading, 'Hello');
myText(par, urText);

console.log(par, heading);