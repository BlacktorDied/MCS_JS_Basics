console.log('You are at'+window.location);

const numbers = document.querySelector('p');
console.log(numbers);
let counter = 1;

while(counter<100000) {
	if(counter%6==0) {
		numbers.innerHTML += counter + '\n';
		counter++;
	}else {
		counter++;
	}
}