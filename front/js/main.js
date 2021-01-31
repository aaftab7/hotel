jQuery(document).ready(function ($) {

    var jssor_1_SlideshowTransitions = [
      {$Duration:1200,$Opacity:2}
    ];

    var jssor_1_options = {
      $AutoPlay: 1,
      $SlideshowOptions: {
        $Class: $JssorSlideshowRunner$,
        $Transitions: jssor_1_SlideshowTransitions,
        $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*#region responsive code begin*/

    // var MAX_WIDTH = 980;

    // function ScaleSlider() {
    //     var containerElement = jssor_1_slider.$Elmt.parentNode;
    //     var containerWidth = containerElement.clientWidth;

    //     if (containerWidth) {

    //         var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

    //         jssor_1_slider.$ScaleWidth(expectedWidth);
    //     }
    //     else {
    //         window.setTimeout(ScaleSlider, 30);
    //     }
    // }

    // ScaleSlider();

    // $(window).bind("load", ScaleSlider);
    // $(window).bind("resize", ScaleSlider);
    // $(window).bind("orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
});

// main slider

const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 5000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  // slideshowImages[currentImageCounter].style.display = "none";
  slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

  // slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;
}




// bar image scroll
$(window).scroll(function(){
  var sPos = $(this).scrollTop();
  $(".theBarpara").css({
    'right' : sPos/4 + '%'
  });
});