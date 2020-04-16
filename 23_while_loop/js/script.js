console.log('You are at'+window.location);

const items = document.getElementsByTagName('li');
console.log(items);
let counter = 0;


//как это звучит на псевдо языке: индекс элемента меньше длины массива//
while(counter < items.length) {
	items[counter].innerHTML = counter + 1;
	counter++;
}