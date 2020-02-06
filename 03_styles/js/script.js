console.log('You are at'+window.location);

const colored = document.querySelector('.colored');
console.log(colored);

console.log(colored.style);

let quest = prompt('what color do you want?');
let quest2 = prompt('what radius do you want?');

/*colored.style.backgroundColor = "blue";*/
colored.style['background-color'] = quest;
colored.style['border-radius'] = quest2;