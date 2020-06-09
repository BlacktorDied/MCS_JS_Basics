window.onload = () => {
	const APIKey = 'c32a3b6db987507769c86ed41a6c8f8a';
	const city = 'Moscow';
	const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
	
	let xhr = new XMLHttpRequest();
	
	xhr.open('GET', url, false);
	xhr.send();
	
	let DATA = JSON.parse(xhr.responseText);
	let temp = DATA.main.temp - 273;
	
	class Person {
		constructor(name){
			this.name = name;
			this.happiness = 0;
		}
		﻿hasCat(){
			return this.happiness = this.happiness + 1;
		}
		hasRest(){
			return this.happiness = this.happiness + 1;
		}
		hasMoney(){
			return this.happiness = this.happiness + 1;
		}
		isSunny(){
			if(temp >= 15) {
				return this.happiness = this.happiness + 1;
			}else{
				return this.happiness;
			}
		}
	}
		const form = document.querySelector('form');
		form.onsubmit = function(e) {
			e.preventDefault();

			const inputName = document.querySelector('input[name="name"]');
			const ﻿inputHasCat = document.querySelectorAll('input[name="cat"]');
			const inputHasRest = document.querySelectorAll('input[name="rest"]');
			const inputHasMoney = document.querySelectorAll('input[name="money"]');

			
			const User = new Person(inputName.value);
			

			if(﻿inputHasCat[0].checked == true){
				console.log(User.﻿hasCat());
			}else{

			}

			if(inputHasRest[0].checked == true){
				console.log(User.﻿hasRest());
			}else{

			}

			if(inputHasMoney[0].checked == true){
				console.log(User.﻿hasMoney());
			}else{

			}

			console.log(User.isSunny());
			/*console.log(User.happiness);*/

			const Name = document.querySelector('.personName');
			Name.innerHTML = User.name;
			const icon = document.querySelector('.icon');

			if(User.happiness == 4){
				icon.innerHTML = '😁';
			}else if(User.happiness >= 2){
				icon.innerHTML = '😐';
			}else{
				icon.innerHTML = '☹️';
			}

		}		
}