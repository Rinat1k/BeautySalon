
$(document).ready(function() {

    // Нажатие на кнопку "Авторизоваться"
    $("#authorization_button, .modals button:eq(0)").on("click", function(){
        ShowAuthorizationModal();
    });

    // Нажатие на кнопку "Зарегистрироваться"
    $("#registration_button, .modals button:eq(1)").on("click", function(){
        ShowRegistrationModal();
    });

    // Обработчик выхода из модального окна
    $("body").on("mousedown", function(e){
        var el = e ? e.target : window.event.srcElement;
        if (el.className === 'modals_wrapper') {
            $(".modals_wrapper").css("display", "none");
        }
    });
});