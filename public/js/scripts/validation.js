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
    $.validator.addMethod("pwcheck",
        function(value, element) {
            return /^[A-Za-z0-9\d=!\-@._*]+$/.test(value);
        }
    );
    
    $("#form_authorization").validate({
        rules: {
            email: {
                required: true,
                customEmail: true
            },
            password: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            email: {
                required: "Это поле обязательно для заполнения",
            },
            password: {
                required: "Это поле обязательно для заполнения",
                minlength: "Минимальная длина пароля должна быть 8 символов"
            }
        }
    });
    // Валидация формы регистрации
    $("#form_registration").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            surName: {
                required: true,
                minlength: 3
            },
            email: {
                customEmail: true,
                required: true
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
                minlength: 8
            },
            password2: {
                required: true, 
                equalTo: '#mainpassword'  
            }
        },
        messages: {
            name: {
                required: "Это поле обязательно для заполнения",
                minlength: "В имени должно быть не менее 3-х символов"
            },
            surName: {
                required: "Это поле обязательно для заполнения",
                minlength: "В фамилии должно быть не менее 3-х символов"
            },
            email: {
                required: "Это поле обязательно для заполнения",
                customEmail: "Проверьте корректность email"
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
                minlength: "Минимальная длина пароля должна быть 8 символов"
            },
            password2: {
                required: "Это поле обязательно для заполнения",
                equalTo: "Введённые пароли не совпадают"
            }
        }
    });
});