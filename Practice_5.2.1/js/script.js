window.addEventListener('load', function(){
	function random(n){
		let degree = Math.floor(Math.random()*(10-1)+1);
		console.log('Degree ='+' '+degree);
		console.log('Number ='+' '+n);
		return Math.abs(n**degree);
	}

	console.log(random(2));
})