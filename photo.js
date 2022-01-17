"use strict";

/* SELECTING ELEMENTS */
/* Loop through photo array */
const photos = [
  "photo-0.jpg",
  "photo-1.jpg",
  "photo-2.jpg",
  "photo-3.jpg",
  "photo-4.jpg",
  "photo-5.jpg",
  "photo-6.jpg",
  "photo-7.jpg",
  "photo-8.jpg",
  "photo-9.jpg",
];
for (let i = 0; i < photos.length; i++) {
  document.getElementById(`photo${[i]}`).src = "./images/" + photos[i];
}

const imageLarge = document.getElementById("image-large");
const imageSmall = document.querySelectorAll(".image-small");

let imageIndex, side;

/* STARTING CONDITIONS */
const init = function () {
  imageIndex = 0;
};
init();

/* PREVIOUS / NEXT BUTTONS large image */
const moveImage = function (side) {
  if (side === 1) {
    imageIndex++;
    if (imageIndex >= photos.length) imageIndex = 0;
    imageLarge.src = `./images/photo-${imageIndex}.jpg`;
  } else if (side === -1) {
    imageIndex--;
    if (imageIndex < 0) imageIndex = photos.length - 1;
    imageLarge.src = `./images/photo-${imageIndex}.jpg`;
  }
};

/* IMAGE LINT connect with large image */
const activeImage = function (imageIndex) {
  imageLarge.src = `./images/photo-${imageIndex}.jpg`;
  for (let j = 0; j < imageSmall.length; j++)
    if (j === imageIndex) {
      imageSmall[j].classList.add("active");
    } else {
      imageSmall[j].classList.remove("active");
    }
};

/* SLIDER */
const slider = document.querySelector(".slider");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", (_) => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", (_) => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  // isDown = true;
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const scrollSpeed = 3;
  const walk = (x - startX) * scrollSpeed;
  slider.scrollLeft = scrollLeft - walk;
});
