/* SELECTING ELEMENTS */
// const totalImages = document.querySelectorAll(".image");
const largeImage = document.getElementById("image-large");
const smallImage = document.querySelectorAll(".image-small");
const dots = document.querySelectorAll(".footerdot");
const current = document.querySelectorAll(".active");

let imageIndex;

/* STARTING CONDITIONS */
const init = function () {
  imageIndex = 2;
};
init();

/* LARGE IMAGE */
const activeImage = function (imageIndex) {
  // if (imageIndex > smallImage.length) {
  //   imageIndex = 1;
  // }
  // if (imageIndex < 1) {
  //   imageIndex = smallImage.length;
  // }
  // for (let i = 0; i < smallImage.length; i++) {
  largeImage.src = `./images/photo-${imageIndex}.jpg`;
  dots[4].classList.add("active");
  dots[1].classList.remove("active");
  // dots.style.remove("active");
  // this.add("active");
  // }
};

/* PREVIOUS / NEXT */
const moveImage = function () {
  for (let i = 0; i < smallImage.length; i++) {
    current[i];
    if (imageIndex > smallImage.length) {
      imageIndex = 1;
    }
    if (imageIndex < 1) {
      imageIndex = smallImage.length;
    }
  }
};

console.log(current);

/* Main function */
//
// for (i = 0; i < smallImage.length; i++) {
//   smallImage[i].style.display = "none";
// }
// for (i = 0; i < dots.length; i++) {
//   dots[i].className = totalDots[i].className.replace(" active", "");
// }
// smallImage[imageIndex - 1].style.display = "block";
// dots[imageIndex - 1].className += " active";

// var faStroke = document.getElementsByClassName("fa-stroke");
// addEventListener("mouseover", function () {
//   displayStroke(faStroke);
// });

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
