/* SELECTING ELEMENTS */
const largeImage = document.getElementById("image-large");
const smallImage = document.querySelectorAll(".image-small");
const dots = document.querySelectorAll(".footerdot");
const current = document.querySelectorAll(".active");

let imageIndex, side;

/* STARTING CONDITIONS */
const init = function () {
  imageIndex = 1;
};
init();

/* LARGE IMAGE */
const activeImage = function (imageIndex) {
  largeImage.src = `./images/photo-${imageIndex}.jpg`;

  // `activeImage(${imageIndex})`
  //   ? dots.className.add(" active")
  //   : dots.classList.remove(" active");
};
// console.log(activeImage(3));

/* PREVIOUS / NEXT BUTTONS */
const moveImage = function (side) {
  for (let i = 0; i < smallImage.length; i++) {
    // if (i > smallImage.length) {
    //   imageIndex = 1;
    // }
    // if (i < 1) {
    //   imageIndex = smallImage.length;
    // }
    if (side === 1) {
      largeImage.src = `./images/photo-${imageIndex++}.jpg`;
    } else if (side === -1) {
      largeImage.src = `./images/photo-${imageIndex--}.jpg`;
    }
  }
};

console.log(moveImage(1));
console.log(imageIndex);

// /* CARD LINT */

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

//     // NO this expands the cards when in focus
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

//     //this reveals the lint-container
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
