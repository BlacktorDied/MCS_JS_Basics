console.log('You are at'+window.location);

const divs = document.querySelectorAll('.diagram');
let browser = document.documentElement.clientWidth

let crypto = [
{    
name : "Bitcoin",    
price: 1388.37  
},  
{    
name : "Ethereum",    
price: 716  
},  
{    
name : "Litecoin",    
price: 140  
}
]

for(let i = 0; i<divs.length; i++) {
	if(browser>1100){
		divs[i].style.width = crypto[i].price /2 + 'px';
	}if(browser>992){
		divs[i].style.width = crypto[i].price /4 + 'px';
	}else{
		divs[i].style.width = crypto[i].price /6 + 'px';
	}	
}