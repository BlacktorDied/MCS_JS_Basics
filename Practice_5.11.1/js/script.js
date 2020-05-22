console.log('You are at'+window.location);

let names = [
[['куры','гуси','павлины'],
['сокол', 'орел', 'соловей']],
[['собака', 'кошка'],
['обезьяна', 'рысь']]];

/*for(let i=0; i<names[0][0].length; i++){
	console.log(names[0][0][i]);
}

for(name of names[0][1]){
	console.log(name);
}

for(key in names[1][0]){
	console.log(names[1][0][key]);
}

window.onload = () => {
	names[1][1].forEach((name) =>{
		console.log(name)
	})
}*/

names.forEach(group => {
  group.forEach(animals => {
    animals.forEach(animal => {
      console.log(animal)
    })
  })
})