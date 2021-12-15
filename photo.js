/* LARGE IMAGE */

var imageIndex = 1;
    displayImage(imageIndex);
   
    function moveImages(n) {
        displayImage(imageIndex += n);
    }
   
    function activeImage(n) {
        displayImage(imageIndex = n);
    }
   
    /* Main function */
    function displayImage(n) {
        var i;
        var totalImages = 
            document.getElementsByClassName("image");
        var totalDots = 
            document.getElementsByClassName("footerdot");
          
        if (n > totalImages.length) {
            imageIndex = 1;
        }
          
        if (n < 1) {
            imageIndex = totalImages.length;
        }
        for (i = 0; i < totalImages.length; i++) {
            totalImages[i].style.display = "none";
        }
        for (i = 0; i < totalDots.length; i++) {
            totalDots[i].className = 
            totalDots[i].className.replace(" active", "");
        }
        totalImages[imageIndex - 1].style.display = "block";
        totalDots[imageIndex - 1].className += " active";
    }

    var faStroke = document.getElementsByClassName("fa-stroke");
      addEventListener("mouseover", function () {
        displayStroke(faStroke);
      } );



    /* CARD LINT */

    (function ($) {
        $(function () {
          var slider = $(".slider").flickity({
            imagesLoaded: true,
            percentPosition: false,
            prevNextButtons: false, //true = enable buttons
            initialIndex: 3,
            pageDots: false, //true = enable dots
            groupCells: 1,
            selectedAttraction: 0.2,
            friction: 0.8,
            draggable: true
          });
      
          //this enables clicking on cards
          slider.on(
            "staticClick.flickity",
            function (event, pointer, cellElement, cellIndex) {
              if (typeof cellIndex == "number") {
                slider.flickity("selectCell", cellIndex);
              }
            }
          );
      
          //this resizes the cards and centers the lint-container because it tends to move a few pixels to the right if .resize() and .reposition() aren't used
           var flkty = slider.data("flickity");
          /* flkty.selectedElement.classList.add("is-custom-selected"); */
          /* flkty.resize(); */
          flkty.reposition();
          let time = 0;
          function reposition() {
            flkty.reposition();
            if (time++ < 10) {
              requestAnimationFrame(reposition);
            } else {
              $(".flickity-prev-next-button").css("pointer-events", "auto");
            }
          }
          requestAnimationFrame(reposition);
      
          //this expands the cards when in focus
          /* flkty.on("settle", () => {
            $(".card").removeClass("is-custom-selected");
            $(".flickity-prev-next-button").css("pointer-events", "none");
            flkty.selectedElement.classList.add("is-custom-selected");
      
            let time = 0;
            function reposition() {
              flkty.reposition();
              if (time++ < 10) {
                requestAnimationFrame(reposition);
              } else {
                $(".flickity-prev-next-button").css("pointer-events", "auto");
              }
            }
            requestAnimationFrame(reposition);
          });
          */
      
          //this reveals the lint-container
          $(".lint-container").addClass("animation-reveal");
          $(".lint-container").css("opacity", "0");
          flkty.resize();
          flkty.reposition();
          setTimeout(() => {
            $(".lint-container").removeClass("animation-reveal");
            $(".lint-container").css("opacity", "1");
            flkty.resize();
            flkty.reposition();
            let time = 0;
            function reposition() {
              flkty.reposition();
              if (time++ < 10) {
                requestAnimationFrame(reposition);
              }
            }
            requestAnimationFrame(reposition);
          }, 1000);
        });
      })(jQuery);
      