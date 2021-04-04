
$(document).ready(function() {
<<<<<<< HEAD
    $("#authorization_button").on("click", function(){
        $("#authorization_modal").css("display", "flex");
=======

    // Нажатие на кнопку "Авторизоваться"
    $("#authorization_button, .modals button:eq(0)").on("click", function(){
        $("#authorization_modal").css("display", "flex");
        $("#form_registration").css("display", "none");
        $("#form_authorization").css("display", "block");
        $(".modals button:eq(0)").css("background-color", "#5B5B5B");
        $(".modals button:eq(1)").css("background-color", "#A7A7A7");
>>>>>>> 8bc975b8b7a8ea40cb8c9c3eb647153a8e48a28d
    });

    // Нажатие на кнопку "Зарегистрироваться"
    $("#registration_button, .modals button:eq(1)").on("click", function(){
        $("#authorization_modal").css("display", "flex"); 
        $("#form_registration").css("display", "block");
        $("#form_authorization").css("display", "none");
        $(".modals button:eq(1)").css("background-color", "#5B5B5B");
        $(".modals button:eq(0)").css("background-color", "#A7A7A7");
    });

    // Обработчик выхода из модального окна
    $("body").on("click", function(e){
        var el = e ? e.target : window.event.srcElement;
        if (el.className === 'modals_wrapper') $(".modals_wrapper").css("display", "none");
    });
    /*
    $("body").on("click", ".authorization_form", function(){
        alert(2);
    });
    */


  
});