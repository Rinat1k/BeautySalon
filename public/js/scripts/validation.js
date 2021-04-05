$(document).ready(function(){
    // Валидация формы авторизации
    $.validator.addMethod("customEmail", 
        function(value, element) {
            return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
        },
        "Проверьте корректность email"
    );
    $.validator.addMethod("birth", 
        function (value, element) {
            var year = value.split('.');
            if ( value.match(/^\d\d?\.\d\d?\.\d\d\d\d$/) && parseInt(year[2]) <= 2002 )
                return true;
            else
                return false;
        }, 
        "Проверьте корректность даты рождения"
    );
    $.validator.addMethod("pwcheck", function(value) {
        return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) 
            && /[a-z]/.test(value) 
            && /\d/.test(value) 
     });
    
    $("#form_authorization").validate({
        rules: {
            email: {
                required: true,
                customEmail: true
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 200
            }
        },
        messages: {
            email: {
                required: "Это поле обязательно для заполнения",
            },
            password: {
                required: "Это поле обязательно для заполнения",
                minlength: "Минимальная длина пароля должна быть 8 символов",
                maxlength: "Пароль должен быть до 200 символов"
            }
        },
        submitHandler: function(form) {
            console.log("Запрос  об авторизации отослан");
            $.ajax({    
                url: $("#form_authorization").attr('action'),
                data: $("#form_authorization").serialize(),
                type: 'POST',
                success: function(res){
                    console.log(`Ошибка ли это? => ${res.isError}`);
                    console.log(`Сообщение от сервера => ${res.message}`);
                    // Действие при отсутствии нужного пользователя
                    if(res.isError){
                        $(".notifications_block").slideDown( "fast", function() {});
                        $(".notifications_block").text(res.message);
                    } else {
                        $(".notifications_block").hide();
                        $(".modals_wrapper").hide();
                    }  
                },
                error: function(){
                    console.log("Ошибка сервера");
                }
            });
        }
    });
    // Валидация формы регистрации
    $("#form_registration").validate({
        rules: {
            name: {
                required: true,
                minlength: 3,
                maxlength: 200
            },
            surName: {
                required: true,
                minlength: 3,
                maxlength: 200
            },
            email: {
                customEmail: true,
                required: true,
                maxlength: 200
            },
            phoneNumber: {
                required: true
            },
            birthday: {
                required: true,
                birth: true
            },
            gender: {
                required: true
            },
            password: {
                required: true,
                pwcheck: true,
                minlength: 8,
                maxlength: 200
            },
            password2: {
                required: true, 
                equalTo: '#mainpassword' 
            }
        },
        messages: {
            name: {
                required: "Это поле обязательно для заполнения",
                minlength: "В имени должно быть не менее 3-х символов",
                maxlength: "В имени должно быть менее 200 символов"
            },
            surName: {
                required: "Это поле обязательно для заполнения",
                minlength: "В фамилии должно быть не менее 3-х символов",
                maxlength: "В фамилии должно быть менее 200 символов"
            },
            email: {
                required: "Это поле обязательно для заполнения",
                customEmail: "Проверьте корректность email",
                maxlength: "В email должно быть менее 200 символов"
            },
            phoneNumber: {
                required: "Это поле обязательно для заполнения",
            },
            birthday: {
                required: "Это поле обязательно для заполнения",
            },
            gender: {
                required: "Пожалуйста выберите пол"
            },
            password: {
                required: "Это поле обязательно для заполнения",
                pwcheck: "Требования к паролю:<br><ul style=\"padding-left: 1em\"><li>• Минимальная длина - 8 символов</li><li>• Содержит минимум один строчный символ</li><li>• Содержит минимум одну цифру</li>• Допустимые символы: A-Z a-z 0-9 @ * _ - . !</ul>",
                minlength: "Минимальная длина пароля должна быть 8 символов",
                maxlength: "В email должно быть менее 200 символов"
            },
            password2: {
                required: "Это поле обязательно для заполнения",
                equalTo: "Введённые пароли не совпадают"
            }
        },
        submitHandler: function(form) {
        
            console.log("запрос об регистрации отослан");
            $.ajax({    
                url: $("#form_registration").attr('action'),
                data: $("#form_registration").serialize(),
                type: 'POST',
                success: function(res){
                    console.log(`Ошибкаа ли это? => ${res.isError}`);
                    console.log(`Сообщение от сервера => ${res.message}`);
                    if(res.isError){
                        $(".notifications_block").slideDown( "fast", function() {});
                        $(".notifications_block").text(res.message);
                    } else {
                        $(".notifications_block").hide();
                        $(".modals_wrapper").hide();
                    }
                },
                error: function(){
                    console.log("Ошибка сервера");
                }
            });
            
        }
    });
});