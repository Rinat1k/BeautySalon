$(document).ready(function() {
    $("#sort-select").on("change", function(){            
        $.ajax({    
            url: "/catalog?sort=" + this.value,
            type: 'GET',
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