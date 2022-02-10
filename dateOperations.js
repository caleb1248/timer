function subtractDates(date1, date2){
	var hours = date1.getHours()-date2.getHours(),
		minutes = date1.getMinutes()-date2.getMinutes(),
		seconds = date1.getSeconds()-date2.getSeconds();
	if(seconds < 0){
		minutes--;
		seconds = 60 - Math.abs(seconds)
	}
	if(minutes < 0){
		hours--;
		minutes = 60 - Math.abs(minutes)
	}
	if(hours < 0){
		return 'timesup';
	}
	return [hours, minutes, seconds];
}
function addDates([aHours, aMinutes, aSeconds], date1){
	var hours = date1.getHours() + aHours,
		minutes = date1.getMinutes() + aMinutes,
		seconds = date1.getSeconds() + aSeconds;
	var currentDate = new Date();
	if(seconds > 60){
		minutes++
		seconds = seconds - 60;
	}
	if(minutes > 60){
		hours++;
		minutes = minutes - 60
	}
	return new Date(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		currentDate.getDay(),
		hours,
		minutes,
		seconds
	)
}
