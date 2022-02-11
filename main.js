const time = document.getElementById('time');

let interval = null,
	fDate = null,
	userTime = null;

const getTimePart = part => part < 10 ? `0${part}` : part;
const timeSelector = document.querySelector("#timeSelector"),
	togglePlay = document.querySelector("#togglePlay"),
	beep = document.querySelector('audio');

timeSelector.onclick = function(){
	if(interval) clearInterval(interval);
	var hours = window.prompt('Enter number of hours');
	if(hours == null){
		return;
	}else{
		hours = parseInt(hours);
		if(isNaN(hours)){
			hours = 0;
		}
	}
	var minutes = window.prompt('Enter number of minutes');
		if(minutes == null){
		return;
	}else{
		minutes = parseInt(minutes);
		if(isNaN(minutes)){
			minutes = 0;
		}
	}
	var seconds = window.prompt('Enter number of seconds');
	if(seconds == null){
		return;
	}else{
		seconds = parseInt(seconds);
		if(isNaN(seconds)) seconds = 0;
	}
	
	userTime = [hours, minutes, seconds];
	
	time.innerHTML = `${getTimePart(hours)}:${getTimePart(minutes)}:${getTimePart(seconds)}`;
}

function handlePauseClick(){
	if(interval) clearInterval(interval);
	showStart();
}

function handleStartClick(){
	if(!userTime){
		alert('Please select a time');
		return;
	}
	
	showStop();
	
	if(interval) clearInterval(interval);
	
	fDate = addDates(userTime, new Date());
	
	interval = setInterval(() => {
		userTime = subtractDates(fDate, new Date());
		
		if(userTime === 'timesup'){
			beep.play();
			setTimeout(() => {
				beep.pause();
				beep.currentTime = 0;
			}, 3000);
			showStart();
			clearInterval(interval);
		}
		else
		{
			var [hours, minutes, seconds] = userTime;
			time.innerHTML = `${getTimePart(hours)}:${getTimePart(minutes)}:${getTimePart(seconds)}`.replace('NaN', '00').replace('NaN', '00').replace('NaN', '00');
		}
	}, 1000)
}

function showStop(){
	togglePlay.innerHTML = "stop";
	togglePlay.style.backgroundColor = "red";
	togglePlay.onclick = handlePauseClick;
}
function showStart(){
	togglePlay.innerHTML = "play_arrow";
	togglePlay.style.backgroundColor = "green";
	togglePlay.onclick = handleStartClick;
}

togglePlay.onclick = handleStartClick;