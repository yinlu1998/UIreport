$(document).ready(function(){
    $(".step-title").click(function(){
        $(this).next(".step-content").slideToggle();
    });
});