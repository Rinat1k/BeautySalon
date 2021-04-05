
$(document).ready(function() {

    // Нажатие на кнопку "Авторизоваться"
    $("#authorization_button, .modals button:eq(0)").on("click", function(){
        $("#authorization_modal").fadeIn(100).css("display", "flex");
        $("#form_registration").hide();
        $("#form_authorization").show();
        $(".notifications_block").hide();
        $(".modals button:eq(0)").css("background-color", "#F3F3F3");
        $(".modals button:eq(0)").css("color", "#5B5B5B");
        $(".modals button:eq(1)").css("background-color", "#5B5B5B");
        $(".modals button:eq(1)").css("color", "#F3F3F3");
    });

    // Нажатие на кнопку "Зарегистрироваться"
    $("#registration_button, .modals button:eq(1)").on("click", function(){
        $("#authorization_modal").fadeIn(100).css("display", "flex"); 
        $("#form_registration").show();
        $("#form_authorization").hide();
        $(".notifications_block").hide();
        $(".modals button:eq(1)").css("background-color", "#F3F3F3");
        $(".modals button:eq(1)").css("color", "#5B5B5B");
        $(".modals button:eq(0)").css("background-color", "#5B5B5B");
        $(".modals button:eq(0)").css("color", "#F3F3F3");
    });

    // Обработчик выхода из модального окна
    $("body").on("click", function(e){
        var el = e ? e.target : window.event.srcElement;
        if (el.className === 'modals_wrapper') {
            $(".modals_wrapper").css("display", "none");
        }
    });
});