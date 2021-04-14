function renderCatalog(salons){
        $.each(salons, function(index,value) {
            $("#catalog").append('<div class="col-lg-6">' +
                '<div class="popular-item">' +
                    '<div class="popular-item-photo">' +
                        '<img src="/img/popular-item.jpg">' +
                        '<p>Рейтинг: ' + value['rating'] + '/5</p>' +
                    '</div>' +
                    '<div class="popular-item-desc">' +
                        '<h5><b>' + value['name'] +'</b></h5>' +
                        '<div class="popular-item-desc-text">' +
                            '<p style="color: #A7A7A7">' + value['typeofSalon'] + '/' + value['occupation'] + '</p>' +
                            '<br>' +
                            '<p>'+ value['address'] + '</p>' +

                            '<p>' + value['phoneNumber'] + '</p>' +
                            '<br>' +
                            '<p>'+ value['schedule'] +'</p>' +
                            '<br>' +
                            '<p>' + value['link'] + '</p>' +
                            '<br>' +
                        '</div>' +
                        '<button>ЗАПИСАТЬСЯ</button>' +
                    '</div>' +
                '</div>' +
            '</div>'  
        );
    });
}

function renderAuthbar(){
    $("#authbar").empty();
    $("#authbar").append(
        
    );
}