$(document).ready(function(event){
    console.log('Siden er klar!')
});

$(function(){
    $('#my-form').on('submit', function(event){
    event.preventDefault();

    var firstname = $('#fname').val();
    var lastname = $('#lname').val();
    var status = $('#status').val();

    $('#submit-answer').html(firstname+lastname+status);
    });
})


$(function(){
    $('#my-form').on('submit', function(){
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var succes = false;

        if (fname == '') {
            $("#fname_error_message").html("Should contain only Characters");
            $("#fname_error_message").show();
        }
        else {
            $("#fname_error_message").hide();
        }
        if (lname == '') {
            $("#lname_error_message").html("Should contain only Characters");
            $("#lname_error_message").show();
        }    
        else {
            $("#lname_error_message").hide();
        }    
        
    })
    
})
/*
$("#fname").focusout(function(){
    if (fname !== '') {
       $("#fname_error_message").hide();
    } else {
       $("#fname_error_message").html("Should contain only Characters");
       $("#fname_error_message").show();
    }
});

$("#lname").focusout(function(){
    if (lname !== '') {
        $("#lname_error_message").hide();
    } else {
        $("#lname_error_message").html("Should contain only Characters");
        $("#lname_error_message").show();
    }
});*/