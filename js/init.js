// js/init.js

(function($){
  $(function(){

    // Initialize the Sidenav component (already there)
    $('.sidenav').sidenav();
	
    // Initialize the Carousel component
    // Target the div with class 'carousel' and our custom class 'profile-carousel'
    $('.carousel.profile-carousel').carousel();

  }); // end of document ready
})(jQuery); // end of jQuery name space