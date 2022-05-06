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
