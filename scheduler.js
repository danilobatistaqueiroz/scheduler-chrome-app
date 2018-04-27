document.getElementById("intervalo").addEventListener("click", intervalo);
document.getElementById("iniciar").addEventListener("click", iniciar);
document.getElementById("parar").addEventListener("click", parar);

window.Timers = [];

function iniciar(){
	parar();
	var t1 = setInterval(play, 1000*60*document.getElementById("txtAlarme").value);
	var t2 = setInterval(ftimer, 1000);
	Timers.push(t1);
	Timers.push(t2);
	document.getElementById("status").innerText = "rodando";
	document.getElementById("status").style.color = "green"
}
function intervalo(){
	parar();
	var t1 = setInterval(play, 1000*60*document.getElementById("txtIntervalo").value);
	var t2 = setInterval(ftimer, 1000);
	Timers.push(t1);
	Timers.push(t2);
	document.getElementById("status").innerText = "intervalo";
	document.getElementById("status").style.color = "orange"
}
function play(){
	var sound;
	if(document.getElementById("status").innerText=="rodando"){
		sound = 'tada.wav';
	} else {
		sound = 'logon.wav';
	}
	var audio = new Audio(sound);
	audio.play();
	for(i=0; i<Timers.length; i++){
		clearInterval(Timers[i]);
	}	
	if(document.getElementById("status").innerText=="rodando"){
		var t1 = setInterval(play, 3000);
		Timers.push(t1);
	}
}
function parar(){
	document.getElementById("status").innerText = "parado";
	document.getElementById("status").style.color = "red"
	document.getElementById("minutos").value = 0;
	document.getElementById("temporal").value = 0;
	document.getElementById("restantes").value = 0;
	for(i=0; i<Timers.length; i++){
		clearInterval(Timers[i]);
	}
}
function ftimer(){
	var cnt = parseInt(document.getElementById("temporal").value) + 1;
	var minutos = Math.round(cnt/60);
	document.getElementById("temporal").value = cnt;
	document.getElementById("minutos").value = minutos;
	var tempo;
	if(document.getElementById("status").innerText=="rodando"){
		tempo = parseInt(document.getElementById("txtAlarme").value);
	} else {
		tempo = parseInt(document.getElementById("txtIntervalo").value);
	}
	document.getElementById("restantes").value = Math.round(tempo-(cnt/60));
	document.title = cnt + ' - ' + minutos;
}
iniciar();