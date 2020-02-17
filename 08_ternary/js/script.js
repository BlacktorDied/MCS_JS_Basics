console.log('You are at'+window.location);

const image = document.querySelector('.imageBox');
let answer = prompt('Сколько тебе лет?');
answer = parseInt(answer);

if(answer<18) {
	image.style['background-image'] = 'url(img/school.png)';
}else if(answer<=25) {
	image.style['background-image'] = 'url(img/party.jpg)';
}else if(answer<=50) {
	image.style['background-image'] = 'url(img/pub.png)';
}else {
	image.style['background-image'] = 'url(img/home.png)';
}