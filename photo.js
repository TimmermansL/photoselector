"use strict";

/* PHOTO ARRAY */
const photos = [
  "photo-0.jpg",
  "photo-1.jpg",
  "photo-2.jpg",
  "photo-3.jpg",
  "photo-4.jpg",
  "photo-5.jpg",
  "photo-6.jpg",
];

for (let i = 0; i < photos.length; i++) {
  document.getElementById(`photo${[i]}`).src = "./images/" + photos[i];
}
/* SELECTING ELEMENTS */
const imageLarge = document.getElementById("image-large");
const imageSmall = document.querySelectorAll(".image-small");

let imageIndex, side;

/* STARTING CONDITIONS */
const init = function () {
  imageIndex = 0;
};
init();

/* PREVIOUS / NEXT BUTTONS */
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

/* CARD LINT */
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

//////////////////////////////////////
// (function ($) {
//   $(function () {
//     var slider = $(".slider").flickity({
//       imagesLoaded: true,
//       percentPosition: false,
//       prevNextButtons: false, //true = enable buttons
//       initialIndex: 3,
//       pageDots: false, //true = enable dots
//       groupCells: 1,
//       selectedAttraction: 0.2,
//       friction: 0.8,
//       draggable: true,
//     });

//     //this enables clicking on cards
//     slider.on(
//       "staticClick.flickity",
//       function (event, pointer, cellElement, cellIndex) {
//         if (typeof cellIndex == "number") {
//           slider.flickity("selectCell", cellIndex);
//         }
//       }
//     );

//     //this resizes the cards and centers the lint-container because it tends to move a few pixels to the right if .resize() and .reposition() aren't used
//     var flkty = slider.data("flickity");
//     /* flkty.selectedElement.classList.add("is-custom-selected"); */
//     /* flkty.resize(); */
//     flkty.reposition();
//     let time = 0;
//     function reposition() {
//       flkty.reposition();
//       if (time++ < 10) {
//         requestAnimationFrame(reposition);
//       } else {
//         $(".flickity-prev-next-button").css("pointer-events", "auto");
//       }
//     }
//     requestAnimationFrame(reposition);

//     // this expands the cards when in focus
//     /* flkty.on("settle", () => {
//             $(".card").removeClass("is-custom-selected");
//             $(".flickity-prev-next-button").css("pointer-events", "none");
//             flkty.selectedElement.classList.add("is-custom-selected");

//             let time = 0;
//             function reposition() {
//               flkty.reposition();
//               if (time++ < 10) {
//                 requestAnimationFrame(reposition);
//               } else {
//                 $(".flickity-prev-next-button").css("pointer-events", "auto");
//               }
//             }
//             requestAnimationFrame(reposition);
//           });
//           */

//     // NO this reveals the lint-container
//     $(".lint-container").addClass("animation-reveal");
//     $(".lint-container").css("opacity", "0");
//     flkty.resize();
//     flkty.reposition();
//     setTimeout(() => {
//       $(".lint-container").removeClass("animation-reveal");
//       $(".lint-container").css("opacity", "1");
//       flkty.resize();
//       flkty.reposition();
//       let time = 0;
//       function reposition() {
//         flkty.reposition();
//         if (time++ < 10) {
//           requestAnimationFrame(reposition);
//         }
//       }
//       requestAnimationFrame(reposition);
//     }, 1000);
//   });
// })(jQuery);
//
