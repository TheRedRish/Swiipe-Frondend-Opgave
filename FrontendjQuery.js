$(document).ready(function (event) {
  console.log("Siden er klar!");
});

var toggle = false;

$(function () {
  $("#my-form").on("submit", function (event) {
    event.preventDefault();

    var firstname = $("#fname").val();
    var lastname = $("#lname").val();
    var status = $("#status").val();

    if (firstname !== "" && lastname !== "") {
      $("#submit_answer_fname").html(firstname);
      $("#submit_answer_lname").html(lastname);
      $("#submit_answer_status").html(status);
      $("#submissionAnswers").removeAttr("hidden");
      console.log("Completed");
    }

    if (firstname == "") {
      $("#fname_error_message").text("Indtast venligst et fornavn");
      $("#fname_error_message").show();
      $("#submit").attr("disabled", true);
    } else {
      $("#fname_error_message").hide();
    }
    if (lastname == "") {
      $("#lname_error_message").text("Indtast venligst et efternavn");
      $("#lname_error_message").show();
      $("#submit").attr("disabled", true);
    } else {
      $("#lname_error_message").hide();
    }

    toggle = true;
  });
});

$(function () {
  $("#fname").change(function (event) {
    event.preventDefault();

    var firstname = $("#fname").val();
    var lastname = $("#lname").val();

    if (toggle) {
      if (firstname == "") {
        $("#fname_error_message").text("Indtast venligst et fornavn");
        $("#fname_error_message").show();
        $("#submit").attr("disabled", true);
      } else {
        $("#fname_error_message").hide();
      }

      if (firstname !== "" && lastname !== "") {
        $("#submit").attr("disabled", false);
      }
    }
  });

  $("#lname").change(function (event) {
    event.preventDefault();

    var firstname = $("#fname").val();
    var lastname = $("#lname").val();

    if (toggle) {
      if (lastname == "") {
        $("#lname_error_message").text("Indtast venligst et efternavn");
        $("#lname_error_message").show();
        $("#submit").attr("disabled", true);
      } else {
        $("#lname_error_message").hide();
      }

      if (firstname !== "" && lastname !== "") {
        $("#submit").attr("disabled", false);
      }
    }
  });
});
