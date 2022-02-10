const time = document.getElementById('time');

let interval = null,
	fDate = null,
	userTime = [0,0,0];

const getTimePart = part => part < 10 ? `0${part}` : part;

document.querySelector("button#timeSelector").onclick = function(){
	userTime = [
		parseInt(window.prompt('Enter number of hours')),
		parseInt(window.prompt('Enter number of minutes')),
		parseInt(window.prompt('Enter number of seconds'))
	];
	var [hours, minutes, seconds] = userTime;
	time.innerHTML = `${getTimePart(hours)}:${getTimePart(minutes)}:${getTimePart(seconds)}`;
}

document.querySelector("button#pause").onclick = function(){
	if(interval) clearInterval(interval);
}

document.querySelector("button#start").onclick = function(){
	if(!userTime){
		alert('select a time');
		return;
	}
	
	fDate = addDates(userTime, new Date());
	if(interval) clearInterval(interval);
	
	interval = setInterval(() => {
		userTime = subtractDates(fDate, new Date());
		
		if(userTime === 'timesup'){
			clearInterval(interval);
			alert('Times up!');
		}
		else
		{
			var [hours, minutes, seconds] = userTime;
			time.innerHTML = `${getTimePart(hours)}:${getTimePart(minutes)}:${getTimePart(seconds)}`;
		}
	}, 1000)
}
