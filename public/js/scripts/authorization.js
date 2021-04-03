
$(document).ready(function() {
    $("#authorization_button").on("click", function(){
        $("#authorization_modal").css("display", "flex"); 
    });
    $("#registration_button").on("click", function(){
        $("#registration_modal").css("display", "flex"); 
    });

    $(".close_modal").on("click", function(){
        $(".modal").css("display", "none");
    });
    /*
    $("body").on("click", ".background_wrapper", function(){
        alert(1);
    });
    $("body").on("click", ".authorization_form", function(){
        alert(2);
    });
    */


  
});