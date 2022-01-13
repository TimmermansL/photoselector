"use strict";

/* SELECTING ELEMENTS */
const imageLarge = document.getElementById("image-large");
const imageSmall = document.querySelectorAll(".image-small");
const dots = document.querySelectorAll(".footerdot");

let imageIndex, side;

/* STARTING CONDITIONS */
const init = function () {
  imageIndex = 0;
};
init();

/* PREVIOUS / NEXT BUTTONS */ /*for loop nodig? ik krijg de ifs niet samen*/
for (let i = 0; i < imageSmall.length; i++) {
  if (imageIndex[i] >= imageSmall.length) {
    imageIndex = 0;
  } else if (imageIndex[i] < 0) {
    imageIndex = imageSmall.length - 1;
  }
}

const moveImage = function (side) {
  if (side === 1) {
    imageIndex++;
    imageLarge.src = `./images/photo-${imageIndex}.jpg`;
  } else if (side === -1) {
    imageIndex--;
    imageLarge.src = `./images/photo-${imageIndex}.jpg`;
  }
  console.log(imageIndex);
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
