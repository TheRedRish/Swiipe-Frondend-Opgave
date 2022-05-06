$(document).ready(function(){
    console.log('Siden er klar!')
});

$(document).ready(function(){
    $('input').eq(2).on('click', function(){
        console.log('input clicked')
        $('this').val('')
    })
});