function renderCatalog(salons){
        salons.forEach(function(){
            $("#catalog").append('<div class="col-lg-6">' +
                '<div class="popular-item">' +
                    '<div class="popular-item-photo">' +
                        '<img src="/img/popular-item.jpg">' +
                        '<p>Рейтинг:' + this.rating + '</p>' +
                    '</div>' +
                    '<div class="popular-item-desc">' +
                        '<h5><b>' + this.name +'</b></h5>' +
                        '<div class="popular-item-desc-text">' +
                            '<p style="color: #A7A7A7">' + this.typeofSalon + '/' + this.occupation + '</p>' +
                            '<br>' +
                            '<p>'+ this.adress + '</p>' +

                            '<p>' + this.phoneNumber + '</p>' +
                            '<br>' +
                            '<p>'+ this.scheldule +'</p>' +
                            '<br>' +
                            '<p>' + this.link + '</p>' +
                            '<br>' +
                        '</div>' +
                        '<button>ЗАПИСАТЬСЯ</button>' +
                    '</div>' +
                '</div>' +
            '</div>'  
        );
    });
}