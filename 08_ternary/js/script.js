console.log('You are at'+window.location);

const image = document.querySelector('.imageBox');
let answer = prompt('Сколько тебе лет?');
answer = parseInt(answer);

(answer >= 18) ? image.style.backgroundImage = 'url(img/pub.png)' : image.style.backgroundImage = 'url(img/school.png)';