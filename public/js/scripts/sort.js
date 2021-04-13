$(document).ready(function() {
    $("#sort-select").on("change", function(){
        //event.preventDefault();
        switch(this.value){
            case "sortByRating":
                
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
                break;
            case "sortByRatingDesc":
                
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
                break;
            
            case "sortByName":
            
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
                break;
            case "sortByNameDesc":
        
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
            break;
                          
        }
    });
});