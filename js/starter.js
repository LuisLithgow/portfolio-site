$(document).ready(function() {
console.log('loaded');

// $(".img-circle").hover(function() {
  // $(".img-circle").addClass('animate bounceIn');
  /* Stuff to do when the mouse enters the element */
// });

  let parallax = document.querySelectorAll(".parallax"),
      speed = 0.5;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

      el.style.backgroundPosition = elBackgrounPos;

    });
  };






})
