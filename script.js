//STICKY HEADER------
window.onscroll = function() {sticky_header()};
var header = document.getElementById("header-container");
var sticky = header.offsetTop;

function sticky_header() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//CAROUSEL------
console.log("hi");
var slideIndex = 0;
showSlides(slideIndex);

function showSlides() {
  var slides = document.getElementsByClassName("picture");

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}

//COUNTER------
var finishTime = new Date("May 8, 2049 00:00:01").getTime();

setInterval(function() {
  var now = new Date().getTime();
  var diff = finishTime - now;
  var seconds = Math.floor(diff / 1000);
  var s = seconds.toLocaleString();
  document.getElementById("counter").textContent = s;
}, 1000);

//fade photos
function showImages(el) {
  var windowHeight = jQuery(window).height();
  $(el).each(function() {
    var thisPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (topOfWindow + windowHeight - 200 > thisPos) {
      $(this).addClass("fadeIn");
    }
  });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function() {
  showImages(".photo1");
  showImages(".photo2");
  showImages(".photo3");

});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
  showImages(".photo1");
  showImages(".photo2");
  showImages(".photo3");

});

/*
//dogs moving in header
$(document).ready(function(e) {
    var width = "+=" + $(document).width();
    $(".dogs").animate({
    left: width
  }, 12500, function() {
    // Animation complete.
  });
});
*/