'use strict';

document.addEventListener("DOMContentLoaded", function(event) { 
    //Do work
    document.getElementById('name').innerText = 'Зміни цей текст';
});

// import anime from './anime.min.js';

function animateBlock() {
	
	setTimeout(() => {
		anime ({
			targets: '#block1',
			translateX: 0,
			scale: 1,
			rotate: '1turn'
			  });
	}, 1000);	
	anime ({
		targets: '#block1',
		translateX: 500,
		scale: 1,
		rotate: '4turn'
		  });
 }

var textChange = false;
var colorChange = true;
var bool=true;
let selectedColor = 1;
function changeText(){
	textChange = !textChange;
	
	if(textChange)
		document.getElementById('name').innerText = 'ТИ';
	else document.getElementById('name').innerText = 'Я';

}
document.addEventListener("DOMContentLoaded", function(event) {  
	document.getElementById('textData').style.color = '00FF00';
});
const colors = ['#ff0000', '#00ff00', '#0000ff', '#000000'];

function changeColor(){
	animateBlock()
	if (selectedColor < colors.length)
	{
		selectedColor = selectedColor + 1;
	}
	else 
	{
		selectedColor = 1;
	}

	// anime({
	// targets: '#block1',
	// translateX: 500,
	// scale: 1,
	// rotate: '1turn'})

	console.log(`color ${colors[selectedColor-1]} index: ${selectedColor}`);
	document.getElementById('textData').style.color = colors[selectedColor-1];
}	
function showImage(){
	document.getElementById('loadingImage').style.visibility=document.getElementById('loadingImage').style.visibility == 'visible'? 'hidden' : 'visible';
}