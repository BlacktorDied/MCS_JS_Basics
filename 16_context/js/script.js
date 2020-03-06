console.log(this);

window.onload = function(){
	console.log(this);
}

const button = document.querySelector('.first');
const button2 = document.querySelector('.second');

button.onclick = function() {
	this.innerHTML = 'Pressed';
}

button2.onclick = () => {
	this.innerHTML = 'Pressed';
}
