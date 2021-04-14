
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



    $.ajax({    
        url: "/catalog?sort=" + $("#sort-select").val() + "&filter1=" + valueOfFilter1 + "&filter2=" + valueOfFilter2 + "&search=" + $("#input-search").val(),
        type: 'POST',
        dataType: "JSON",
        success: (data)=>
        {
            $("#catalog").empty();
            renderCatalog(data);  
        },
        error: (data)=>
        {
            console.log("Ошибка: ");
            console.log(data);
        }
    });

});

});

$(document).ready(()=>
{
    if (getCookie('authToken')!=undefined)
    {
        $.ajax({    
            url: "/login",
            type: 'GET',
            dataType: "text",
            success: (data)=>
            {
                 console.log("Полученные данные " + data); //данные
            },
            error: (data)=>
            {
                console.log("Ошибка: ");
                console.log(data);
            }
        });
    };
});

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

