$(document).ready(function(){
    $("#button-filter-catalog").on("click", function(){
        let valueOfFilter1 = $("#catalog-filter-1").val() == "default" ? "default" : $("#catalog-filter-1 option:selected").text();
        let valueOfFilter2 = $("#catalog-filter-2").val() == "default" ? "default" : $("#catalog-filter-2 option:selected").text();
        //let valueOfFilter3 = $("#catalog-filter-3").val() == null ? null : $("#catalog-filter-3 option:selected").text();

        $.ajax({    
            url: "/catalog?sort=" + $("#sort-select").val() + "&filter1=" + valueOfFilter1 + "&filter2=" + valueOfFilter2 + "&search=" + $("#input-search").val(),
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

    $("#button-search").on("click", function(){
        let valueOfFilter1 = $("#catalog-filter-1").val() == "default" ? "default" : $("#catalog-filter-1 option:selected").text();
        let valueOfFilter2 = $("#catalog-filter-2").val() == "default" ? "default" : $("#catalog-filter-2 option:selected").text();

        $.ajax({    
            url: "/catalog?sort=" + $("#sort-select").val() + "&filter1=" + valueOfFilter1 + "&filter2=" + valueOfFilter2 + "&search=" + $("#input-search").val(),
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