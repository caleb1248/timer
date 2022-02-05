import './style.css'
function handlePlayButtonClick() {
  this.innerHTML = '<span class="material-icons">stop</span>'
  this.onclick = handleStopButtonClick;
}
function handleStopButtonClick() {
  this.innerHTML = '<span class="material-icons">play_arrow</span>'
  this.onclick = handlePlayButtonClick;
}
document.querySelector('button.toggle').onclick = handlePlayButtonClick;