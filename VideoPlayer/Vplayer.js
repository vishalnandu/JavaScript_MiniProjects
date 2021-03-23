let player = document.querySelector(".player");
let video = player.querySelector(".viewer");
let skipButtons = player.querySelectorAll("[data-skip]");
let progress = player.querySelector(".progress");
let toggle = player.querySelector(".toggle");
let progressBar = player.querySelector(".progress__filled");
let range = player.querySelectorAll(".player__slider");
let button = player.querySelector(".button");

function togglePlay() {
  let x = video.paused ? "play" : "pause";
  video[x]();
}
function updateButton() {
  let symbol = this.paused ? "►" : "❚ ❚";
  toggle.textContent = symbol;
}
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}
function handleRange() {
  video[this.name] = this.value;
}
function handleProgress() {
  let newTime = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${newTime}%`;
}
function scroll(e) {
  let scroll = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scroll;
}

video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
skipButtons.forEach(skipButton => {
skipButton.addEventListener("click", skip);
});
range.forEach(ran => {
  ran.addEventListener("change", handleRange);
});
video.addEventListener("timeupdate", handleProgress);
let mousedown = false;
progress.addEventListener("click", scroll);
progress.addEventListener("mousemove", e => {
  if (mousedown) {
    scroll();
  }
});
progress.addEventListener("mosuedown", () => (mousedown = true));
progress.addEventListener("mosueup", () => (mousedown = false));
// button.addEventListener("click", () => {
//   video.requestFullscreen();
// });
