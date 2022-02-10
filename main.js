import './style.css'
import subtractTime from '../dateSubracter/api';
const time = document.getElementById('time');
var oldDate = new Date();
setInterval(() => {
  var [hours, minutes, seconds] = subtractTime(new Date(), oldDate)
  time.innerHTML = `${hours}:${minutes}:${seconds}`
}, 1000)