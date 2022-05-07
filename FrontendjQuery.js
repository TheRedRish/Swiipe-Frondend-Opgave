// Logger at siden er klar når HTML er færdig med at køre
$(document).ready(function (event) {
  console.log("Siden er klar!");
});

var toggle = false;

$(function () {
  // tager input og poster i output så længe alt er indtastet som ønsket.
  $("#my-form").on("submit", function (event) {
    event.preventDefault();

    var firstname = $("#fname").val();
    var lastname = $("#lname").val();
    var status = $("#status").find(":selected").text();

    CheckNames();

    if (firstname !== "" && lastname !== "") {
      $("#submit_answer_fname").html(firstname);
      $("#submit_answer_lname").html(lastname);
      $("#submit_answer_status").html(status);
      $("#submissionAnswers").removeAttr("hidden");
    }

    toggle = true;
  });
});

// Updatere løbende med fejlbeskeder efter Send knappen er trykket på
$(function () {
  $("#fname").change(function (event) {
    event.preventDefault();

    if (toggle) {
      CheckNames();
    }
  });

  $("#lname").change(function (event) {
    event.preventDefault();

    if (toggle) {
      CheckNames();
    }
  });
});

// Checker input fornavn og efternavn igennem om de indeholder tekst. Skriver fejlmeddelelse hvis der mangler tekst.
function CheckNames() {
  var firstname = $("#fname").val();
  var lastname = $("#lname").val();

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

  if (firstname !== "" && lastname !== "") {
    $("#submit").attr("disabled", false);
  }
}
