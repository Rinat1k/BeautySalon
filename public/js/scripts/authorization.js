
$(document).ready(function() {

    // Нажатие на кнопку "Авторизоваться"
    $("#authorization_button, .modals button:eq(0)").on("click", function(){
        $("#authorization_modal").fadeIn(100).css("display", "flex");
        $("#form_registration").hide();
        $("#form_authorization").show();
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

    $(() => {
        $("#login").on("click",(event) => {
            event.preventDefault();
            console.log("запрос  об авторизации отослан");
            $.ajax({    
                url: $("#form_authorization").attr('action'),
                data: $("#form_authorization").serialize(),
                type: 'POST',
                success: function(res){
                        console.log(`Ошибкаа ли это? => ${res.isError}`);
                        console.log(`Сообщение от сервера => ${res.message}`);
                },
                error: function(){
                    console.log("Ошибка сервера");
                }
            });
        });
    });
    $(() => {
        $("#register").on("click",(event) => {
            event.preventDefault();
            console.log("запрос об регистрации отослан");
            $.ajax({    
                url: $("#form_registration").attr('action'),
                data: $("#form_registration").serialize(),
                type: 'POST',
                success: function(res){
                        console.log(`Ошибкаа ли это? => ${res.isError}`);
                        console.log(`Сообщение от сервера => ${res.message}`);
                },
                error: function(){
                    console.log("Ошибка сервера");
                }
            });
        });
    });
  
});