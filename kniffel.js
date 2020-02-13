var newS;
var number_of_dice = 0;
function wuerfeln(){
	
	for(var i = 0; i < 5; i++){
		newS = document.createElement('span');
		document.body.appendChild(newS);
		newS.style.color = 'white';
		newS.id="w"+i;
		newS.className = 'wuerfel';
		document.getElementById('w'+i).innerHTML = (Math.floor(Math.random() * 6+1));;
	}
	
	number_of_dice++;
	
	if(number_of_dice > 1){
		document.getElementById('button_wuerfeln').innerHTML = 'Nochmal w&uuml;rfeln';
	}
	
	if(number_of_dice == 3){
		document.getElementById('button_wuerfeln').disabled = 'true';
		document.getElementById('button_wuerfeln').style.backgroundColor = 'grey';
	}
}