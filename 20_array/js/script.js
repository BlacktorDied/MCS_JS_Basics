console.log('You are at'+window.location);

let people = ['Vasya', 'Petya', 'Sasha'];
console.log(people);
console.log(people[2]);

let bigArray = [
	[1, 2, 3],
	[true, false],
	['a', 'b', 'c']
]
console.log(bigArray);
console.log(bigArray[0]);
console.log(bigArray[0][1]);

let bigObject = {
	names : ['Vasya', 'Petya', 'Sasha'],
	grades : [
		{
			intern : 1,
			junior : 2
		},
		{
			middle : 3,
			senior : 4
		}
	]
}
console.log(bigObject.names);
console.log(bigObject.names[1]);
console.log(bigObject.grades);
console.log(bigObject.grades[1]);
console.log(bigObject.grades[1].middle);