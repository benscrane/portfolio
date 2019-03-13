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
    $("#contactForm").submit(function(event) {
      var name = $("#contactName").val();
      var email = $("#contactEmail").val();
      var message = $("#contactMessage").val();
      $.ajax({
        method: "POST",
        url: "https://maker.ifttt.com/trigger/contact_form/with/key/4Kn78ZqmH8VMwBCcwDDxE",
        data: {
          value1: name,
          value2: email,
          value3: message
        }
      })
        .done(function() {
          $("#contactName").val("");
          $("#contactEmail").val("");
          $("#contactMessage").val("");
        });
      $("#contactNotification").removeClass("hidden");
      event.preventDefault();
    });
  });
});