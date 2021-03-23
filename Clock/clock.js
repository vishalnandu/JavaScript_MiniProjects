let second = document.querySelector(".sec-hand");
let minute = document.querySelector(".min-hand");
let hours = document.querySelector(".hour-hand");
let digi = document.querySelector(".digital");

function transform() {
  let time = new Date();
  let sec = time.getSeconds();
  let sec_var = (sec / 60) * 360;
  second.style.transform = `rotate(${sec_var}deg)`;
  let min = time.getMinutes();
  let min_var = (min / 60) * 360;
  minute.style.transform = `rotate(${min_var}deg)`;
  let hour = time.getHours();
  let hour_var = (hour / 12) * 360;
  hours.style.transform = `rotate(${hour_var}deg)`;
  digi.innerHTML = `${hour}:${min}:${sec}`;
}

setInterval(transform, 1000);
