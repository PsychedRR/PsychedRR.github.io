// js/init.js

(function($){
  $(function(){

    // Initialize the Sidenav component (already there)
    $('.sidenav').sidenav();

    // --- Scroll Effect for Profile Picture ---
    var profileImg = $('#profile-img'); // Get the profile image element by its ID
    var profileArea = $('.profile-area'); // Get the container area
    var introText = $('.profile-area .flow-text'); // Get the intro paragraph

    var scrollThreshold = 200; // Adjust how many pixels you scroll before the effect triggers
    var scrolledClass = 'scrolled'; // A class we'll add to the body

    // Listen for the scroll event on the window
    $(window).scroll(function() {
      var scrollTop = $(window).scrollTop(); // Get the current vertical scroll position

      // Check if scroll position is beyond the threshold
      if (scrollTop > scrollThreshold) {
        // If scrolled past the threshold, add the 'scrolled' class to the body
        // We add it to the body so we can write CSS rules like 'body.scrolled .profile-picture'
        if (!$('body').hasClass(scrolledClass)) {
          $('body').addClass(scrolledClass);
        }
      } else {
        // If scrolled back above the threshold, remove the 'scrolled' class
        if ($('body').hasClass(scrolledClass)) {
          $('body').removeClass(scrolledClass);
        }
      }
    });

    // Optional: Trigger the scroll function once on page load
    // This ensures the correct state if the page is loaded already scrolled down
     $(window).trigger('scroll');


  }); // end of document ready
})(jQuery); // end of jQuery name space