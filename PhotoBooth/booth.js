let video = document.querySelector(".player");
let canvas = document.querySelector(".photo");
let snap = document.querySelector(".snap");
let strip = document.querySelector(".strip");
let ctx = canvas.getContext("2d");
function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      //   console.log(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(e => {
      console.error("Some Locha", e);
    });
}

function videoToCanvas() {
  let width = video.videoWidth;
  let height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;
  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    // removing pixels of the image from the canvas which can be used to create filters...
    let pixels = ctx.getImageData(0, 0, width, height);
    //manipulating the pixels to desired effects...
    //pixels = invertColours(pixels);
    //pixels = rgbSplit(pixels);
    //ctx.globalAlpha = 0.2;

    pixels = greenScreen(pixels);
    //putting back the pixels to the canvas with the applied filter...
    ctx.putImageData(pixels, 0, 0);
  }, 50);
}

function clickPhoto() {
  //sound of click
  snap.currentTime = 0;
  snap.play();
  //getting frame from the canvas
  let data = canvas.toDataURL("Image/jpeg");

  let link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "vishal");
  // link.textContent = "vishal";
  link.innerHTML = `<image src="${data}" />`;
  strip.insertBefore(link, strip.firstChild);
}
function invertColours(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i] = pixels.data[i] ^ 255; // Invert Red
    pixels.data[i + 1] = pixels.data[i + 1] ^ 255; // Invert Green
    pixels.data[i + 2] = pixels.data[i + 2] ^ 255; // Invert Blue
  }
  return pixels;
}
function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll(".rgb input").forEach(input => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();
video.addEventListener("canplay", videoToCanvas);
