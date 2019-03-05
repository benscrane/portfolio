"use strict";

$(function() {

  // nav position
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() >= $(window).height()) {
        $("#nav").fadeIn(400);
      } else {
        $("#nav").fadeOut(400);
      }
    });
  });
});