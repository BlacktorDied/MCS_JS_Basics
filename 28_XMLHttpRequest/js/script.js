console.log('You are at'+window.location);

const APIKey = 'c32a3b6db987507769c86ed41a6c8f8a';
/*const city = 'Miami';*/
const city = 'Moscow';
const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;

let xhr = new XMLHttpRequest();

xhr.open('GET', url, false); 

xhr.send();

if(xhr.status != 200) {
	console.log(xhr.status + ' '+ xhr.statusText);
}else {
	/*console.log(JSON.parse((xhr.responseText)));*/	
	let DATA = JSON.parse(xhr.responseText);
	console.log(DATA);
	document.write(DATA.main.temp - 273);
}
