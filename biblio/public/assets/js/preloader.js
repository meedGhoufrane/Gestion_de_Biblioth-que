(function ($) {
  "use strict";
  /*============= preloader js css =============*/
  var cites = [];
  cites[0] = "Dive into Stories, One Click Away!";
  cites[1] = "Datepress hosts face-to-face events in various cities";
  cites[2] = "Your Next Great Read is Just a Tap Away!";
  cites[3] = "Unlock Worlds, One Book at a Time.";
  var cite = cites[Math.floor(Math.random() * cites.length)];
  $("#preloader p").text(cite);
  $("#preloader").addClass("loading");

  $(window).on("load", function () {
    $("#preloader").fadeOut(500, function () {
      $(this).remove();
    });
  });

  $(document).on("click", "a", function () {
    $("#preloader").fadeIn(500);
  });
})(jQuery);
