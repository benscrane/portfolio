"use strict";

$(function() {

  // nav position
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() >= (0.9 * $(window).height())) {
        $("#nav").fadeIn(400);
      } else {
        $("#nav").fadeOut(400);
      }
    });
  });
});