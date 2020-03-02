var newS;
var number_of_dice = 0;
function wuerfeln(){
	if (number_of_dice==0){
		for(var i = 0; i < 5; i++){
			newS = document.createElement('span');
			document.body.appendChild(newS);
			newS.style.color = 'white';
			newS.id="w"+i;
			newS.className = 'wuerfel';
		}
	}
	for(var i = 0; i < 5; i++){
		document.getElementById('w'+i).innerHTML = (Math.floor(Math.random() * 6+1));
	}
	
	number_of_dice++;
	
	if(number_of_dice > 0){
		document.getElementById('button_wuerfeln').innerHTML = 'Nochmal w&uuml;rfeln';
	}
	
	if(number_of_dice == 3){
		document.getElementById('button_wuerfeln').disabled = 'true';
		document.getElementById('button_wuerfeln').style.backgroundColor = 'grey';
	}
}

/*
		current_anzahl_karten_spieler = current_anzahl_karten_spieler - 1;
		current_anzahl_karten_dealer = current_anzahl_karten_dealer - 1;
		for(var i = 2; i <= current_anzahl_karten_spieler; current_anzahl_karten_spieler--){
			var elementC = document.getElementById('karte'+current_anzahl_karten_spieler);
			var elementS = document.getElementById('zahl'+current_anzahl_karten_spieler);
			elementC.parentNode.removeChild(elementC);
			elementS.parentNode.removeChild(elementS);
		}
*/
