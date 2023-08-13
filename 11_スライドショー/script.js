'use strict';

const list = [
  'images/01.jpg',
  'images/02.jpg',
  'images/03.jpg',
  'images/04.jpg',
  'images/05.jpg',
  'images/06.jpg',
  'images/07.jpg',
  'images/08.jpg',
  'images/09.jpg',
  'images/10.jpg',
];

const img = document.getElementById("main");
const [leftArrow, rightArrow] = document.getElementsByTagName("span");

const p = document.createElement("p");
p.style.color = "lightgray";

const div = document.getElementById("photo");
div.insertBefore(p, img.nextElementSibling);

const setImage = () => {
  img.src = list[imgN];
  p.textContent = `${imgN + 1} / ${list.length}`;
}

let imgN = 0;

document.addEventListener("DOMContentLoaded", () => {
  img.src = list[imgN];
  p.textContent = `${imgN + 1} / ${list.length}`;
});

rightArrow.addEventListener("click", () => {
  imgN += 1;
  if (imgN >= list.length) {
    imgN = list.length - 1;
  }
  setImage();
});

leftArrow.addEventListener("click", () => {
  imgN -= 1;
  if (imgN < 0){
    imgN = 0;
  }
  setImage();
});

/*
let count = 0;
document.body.style.color = "white";

const countID = setInterval(() => {
  document.body.textContent = count;
  count += 1;
  if (count > 5) {
    clearInterval(countID);
    document.body.textContent += " stopped!!"
  }
}, 1000);
*/

const playButton = document.createElement("button");
playButton.textContent = "自動再生する";
div.appendChild(playButton);

let autoplay = false;

playButton.addEventListener("click", () => {
  if (!autoplay) {
    playButton.textContent = "停止"
    autoplay = setInterval(() => {
      imgN += 1;
      if (imgN >= list.length) {
        imgN = 0;
      }
      setImage();
    }, 500);
  } else {
    clearInterval(autoplay);
    autoplay = false;
    playButton.textContent = "自動再生する";
  }
});

/*
const stopButton = document.createElement("button");
stopButton.textContent = "停止する";
div.appendChild(stopButton);

stopButton.addEventListener("click", () => {
  clearInterval(autoplay);
  autoplay = false;
  playButton.textContent = "自動再生する";
});
*/