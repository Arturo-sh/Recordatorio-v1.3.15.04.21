function myFunc()  {
	var ahora = new Date();
	dia = ahora.getDay();
	horas = ahora.getHours();
	minutos = ahora.getMinutes();
	segundos = ahora.getSeconds();
	if (horas < 10) horas = "0" + horas;
	if (minutos < 10) minutos = "0" + minutos;
	if (segundos < 10) segundos = "0" + segundos;
	var tiempo = horas + ":" + minutos + ":" + segundos;
	document.getElementById('mostrarHora').innerHTML = tiempo;

	switch(dia){
		case 0: document.getElementById('diaSemana').innerHTML = 'Domingo'; break;
		case 1: document.getElementById('diaSemana').innerHTML = 'Lunes'; break;
		case 2: document.getElementById('diaSemana').innerHTML = 'Martes'; break;
		case 3: document.getElementById('diaSemana').innerHTML = 'Miércoles'; break;
		case 4: document.getElementById('diaSemana').innerHTML = 'Jueves'; break;
		case 5: document.getElementById('diaSemana').innerHTML = 'Viernes'; break;
		case 6: document.getElementById('diaSemana').innerHTML = 'Sábado'; break;
	}

	if (dia == 0) {
		document.getElementById('materiaActual').innerHTML = "Momento de hacer tareas pendientes :)";
		materiaActual.style.background = "red";
	}

	if (dia == 1) {
		switch(horas){
			case 13:
			case 14: document.getElementById('materiaActual').innerHTML = "HORAS LIBRES :)";
				 	 materiaActual.style.background = "mediumorchid"; break;
			case 15: 
			case 16: document.getElementById('materiaActual').innerHTML = "FUNDAMENTOS DE BASE DE DATOS";
					 materiaActual.style.background = "crimson"; break;
			case 17: 
			case 18: document.getElementById('materiaActual').innerHTML = "MÉTODOS NUMÉRICOS";
					 materiaActual.style.background = "chocolate"; break;
			case 19: 
			case 20: document.getElementById('materiaActual').innerHTML = "TÓPICOS AVANZADOS DE PROGRAMACIÓN";
					 materiaActual.style.background = "orange"; break;

			default: document.getElementById('materiaActual').innerHTML = "Horas fuera de clases :)";
				 	 materiaActual.style.background = "#CD3737"; break;
		}
	}

	if (dia == 2) {
		switch(horas){
			case 13:
			case 14: document.getElementById('materiaActual').innerHTML = "INGLÉS";
					 materiaActual.style.background = "orchid"; break;
			case 15: 
			case 16: document.getElementById('materiaActual').innerHTML = "FUNDAMENTOS DE BASE DE DATOS";
					 materiaActual.style.background = "crimson"; break; 
			case 17: 
			case 18: document.getElementById('materiaActual').innerHTML = "TALLER DE SISTEMAS OPERATIVOS";
					 materiaActual.style.background = "limegreen"; break;
			case 19: 
			case 20:document.getElementById('materiaActual').innerHTML = "TÓPICOS AVANZADOS DE PROGRAMACIÓN";
					 materiaActual.style.background = "orange"; break;

			default: document.getElementById('materiaActual').innerHTML = "Horas fuera de clases :)";
				 	 materiaActual.style.background = "#CD3737"; break;
		}
	}

	if (dia == 3) {
		switch(horas){ 
			case 13:
			case 14: document.getElementById('materiaActual').innerHTML = "MÉTODOS NUMÉRICOS";
					 materiaActual.style.background = "chocolate"; break;
			case 15: document.getElementById('materiaActual').innerHTML = "FUNDAMENTOS DE BASE DE DATOS";
					 materiaActual.style.background = "crimson"; break;
			case 16: 
			case 17: document.getElementById('materiaActual').innerHTML = "ECUACIONES DIFERENCIALES";
					 materiaActual.style.background = "darkturquoise"; break;
			case 18: 
			case 19: document.getElementById('materiaActual').innerHTML = "HORAS LIBRES :)";
				 	 materiaActual.style.background = "mediumorchid"; break;
			case 20: document.getElementById('materiaActual').innerHTML = "TÓPICOS AVANZADOS DE PROGRAMACIÓN";
					 materiaActual.style.background = "orange"; break;

			default: document.getElementById('materiaActual').innerHTML = "Horas fuera de clases :)";
				 	 materiaActual.style.background = "#CD3737"; break;
		}
	}

	if (dia == 4) {
		switch(horas){
			case 13:
			case 14: document.getElementById('materiaActual').innerHTML = "INGLÉS";
					 materiaActual.style.background = "orchid"; break;
			case 15: document.getElementById('materiaActual').innerHTML = "ECUACIONES DIFERENCIALES";
					 materiaActual.style.background = "darkturquoise"; break;
			case 16:
			case 17:
			case 18: document.getElementById('materiaActual').innerHTML = "PRINCIPIOS ELÉCTRICOS Y APLICAIONES DIGITALES";
					 materiaActual.style.background = "darkorchid"; break;
			case 19:
			case 20: document.getElementById('materiaActual').innerHTML = "TALLER DE SISTEMAS OPERATIVOS";
					 materiaActual.style.background = "limegreen"; break;

			default: document.getElementById('materiaActual').innerHTML = "Horas fuera de clases :)";
				 	 materiaActual.style.background = "#CD3737"; break;
		}	
	}

	if (dia == 5) {
		switch(horas){
			case 13: 
			case 14: 
			case 15: document.getElementById('materiaActual').innerHTML = "HORAS LIBRES :)";
				 	 materiaActual.style.background = "mediumorchid"; break;
			case 16: 
			case 17: document.getElementById('materiaActual').innerHTML = "ECUACIONES DIFERENCIALES";
					 materiaActual.style.background = "darkturquoise"; break;
			case 18: document.getElementById('materiaActual').innerHTML = "MÉTODOS NUMÉRICOS";
					 materiaActual.style.background = "chocolate"; break;
			case 19: 
			case 20: document.getElementById('materiaActual').innerHTML = "PRINCIPIOS ELÉCTRICOS Y APLICAIONES DIGITALES";
					 materiaActual.style.background = "darkorchid"; break;

			default: document.getElementById('materiaActual').innerHTML = "Horas fuera de clases :)";
					 materiaActual.style.background = "#CD3737"; break;
		}
	}

	if (dia == 6) {
		document.getElementById('materiaActual').innerHTML = "🎉 FIN DE SEMANA 🥳";
		materiaActual.style.background = "peru";
	}

}
	
setInterval(myFunc, 1000);
