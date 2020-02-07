console.log('You are at'+window.location);

const page = document.querySelector('body');
const text = document.querySelector('div.page');
const name = document.querySelector('.name');
const img = document.querySelector('img');
const bio = document.querySelector('.shortBio');

console.log(page, text, name, img, bio);

let background = prompt('Какого цвета будет задний фон?');
page.style['background-color'] = background;
let color = prompt('Какого цвета будет текст на странице?');
text.style['color'] = color;
let name2 = prompt('Как зовут человека, который вас вдохновляет?');
name.innerHTML = name2;
let foto = prompt('Введите адрес картинки?');
img.setAttribute('src', foto);
/*https://thumbs.filmix.co/posters/orig/roditeli-serial-2015_99814_0.jpg*/
let info = prompt('Введите текст страницы?');
bio.innerHTML = info;
bio.className += ' animated'