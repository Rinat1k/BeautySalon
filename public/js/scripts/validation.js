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
        return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
            && /[a-z]/.test(value) // has a lowercase letter 
            && /\d/.test(value) // has a digit
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
        }
    });
});