var newS;
function wuerfeln(){
	
	for(var i = 0; i < 5; i++){
		newS = document.createElement('span');
		document.body.appendChild(newS);
		newS.style.color = 'white';
		newS.id="w"+i;
		newS.className = 'wuerfel';
		document.getElementById('w'+i).innerHTML = (Math.floor(Math.random() * 6+1));;
	}
	
	document.getElementById('button_wuerfeln').disabled = true;
	document.getElementById('button_wuerfeln').style.backgroundColor = 'grey';
}
