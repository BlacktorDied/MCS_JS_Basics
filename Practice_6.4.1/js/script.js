console.log('You are at'+window.location);

const APIKey = 'c32a3b6db987507769c86ed41a6c8f8a';
const form = document.querySelector('form');

form.onsubmit = function(e){
	e.preventDefault();

	const input = document.querySelector('input[name="city"]');
	console.log(input);
	const div = document.querySelector('div');
	let city = input.value;
	const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

	let xhr = new XMLHttpRequest();

	xhr.open('GET', url, false); 

	xhr.send();

	if(xhr.status != 200) {
		console.log(xhr.status + ' '+ xhr.statusText);
	}else {	
		let DATA = JSON.parse(xhr.responseText);
		console.log(DATA);
		div.innerHTML = Math.round(DATA.main.temp - 273)+'°C';
	}
}