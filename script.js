$(function(){
    let COUNTER = 1;

    $(".mybutton").on('click', function() {
        $(".mybutton").text("CLICKED " + COUNTER++ + ' TIMES!')
    })
})