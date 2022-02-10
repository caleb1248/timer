const time = document.getElementById('time');

let interval = null,
	fDate = null,
	userTime = null;

const getTimePart = part => part < 10 ? `0${part}` : part;
const timeSelector = document.querySelector("button#timeSelector"),
	pause = document.querySelector("button#pause"),
	start = document.querySelector("button#start");

timeSelector.onclick = function(){
	if(interval) clearInterval(interval);
	
	userTime = [
		parseInt(window.prompt('Enter number of hours')),
		parseInt(window.prompt('Enter number of minutes')),
		parseInt(window.prompt('Enter number of seconds'))
	];
	
	var [hours, minutes, seconds] = userTime;
	
	time.innerHTML = `${getTimePart(hours)}:${getTimePart(minutes)}:${getTimePart(seconds)}`;
}

pause.onclick = function(){
	if(interval) clearInterval(interval);
}

start.onclick = function(){
	if(!userTime){
		alert('Please select a time');
		return;
	}
	
	if(interval) clearInterval(interval);
	
	fDate = addDates(userTime, new Date());
	
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
