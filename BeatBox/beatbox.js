document.addEventListener("keydown", function(e) {
  var audio = document.querySelector(`audio[data-id="${e.keyCode}"]`);
  var key = document.querySelector(`.key[data-id="${e.keyCode}"]`);

  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0; //mulptiple times press n sound
  audio.play();
});
var keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
  console.log(e);
  console.log(this);
}
