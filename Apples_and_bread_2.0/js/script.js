let money = prompt('How much money you have?');
let apples = prompt('How many apples you want to buy?');
let bread = prompt('How many loaves of bread you want to buy?');
let apple = prompt('how much does one apple cost?');
let bread2 = prompt('How much does one loaf of bread cost?');

function haveEnough(money, apples, bread, apple, bread2){
	let total = (money-(apples*apple)-(bread*bread2));
	document.body.innerText = (total>=0);
	(total >= 0) ? console.log('You have enough') : console.log('You haven`t got enough');	
}

haveEnough(money, apples, bread, apple, bread2);