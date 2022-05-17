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

//MODAL
var modal = document.getElementsByClassName("modal-container")[0];
var btn = document.getElementById("preview");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//fade
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


//SLIDER
var slider = tns({
  container:".photo-slider",
  "slideBy" : 1,
  "speed": 700,
  "nav": false,
  autoplay: true,
  controls: false,
  autoplayButtonOutput: false,
  responsive: {
    1600: {
      items: 3,
      gutter: 20
    },
    1024: {
      items: 2,
      gutter:20
    },
    768: {
      items:2,
      gutter:20
    },
    480: {
      items:1,
    }
  }
})