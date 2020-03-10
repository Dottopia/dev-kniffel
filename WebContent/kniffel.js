var newS;
var neues_spiel = false;
var init = true;
var number_of_dice = 0;
function wuerfeln(){
    
    if (init === true){
        for(var i = 0; i < 5; i++){
            newS = document.createElement('span');
            document.body.appendChild(newS);
            newS.style.color = 'white';
            newS.id="w"+i;
            newS.className = 'wuerfel';
            init=false;
        }
    }
    
    if (neues_spiel === true){
        number_of_dice = 0;
        document.getElementById('button_wuerfeln').style.visibility = "visible";
        document.getElementById("nochmal_spielen").style.visibility = "hidden";
        for(var i = 0; i < 5; i++){
            document.getElementById('w'+i).innerHTML ="";
            
        }
        neues_spiel=false;
    }
    else{
        
        for(var i = 0; i < 5; i++){
            document.getElementById('w'+i).innerHTML = (Math.floor(Math.random() * 6+1));
        }
	
        number_of_dice++;
    
        
	
        if(number_of_dice > 0){
            document.getElementById('button_wuerfeln').innerHTML = 'Nochmal w&uuml;rfeln';
        }
	
        if(number_of_dice === 3){
            document.getElementById('button_wuerfeln').style.visibility = "hidden";
            document.getElementById("nochmal_spielen").style.visibility = "visible";
            neues_spiel=true;
            
        }
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
