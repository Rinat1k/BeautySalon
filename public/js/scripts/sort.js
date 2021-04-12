$(document).ready(function() {
    $("#sort-select").on("change", function(){
        switch(this.value){
            case "sortByRating":
                
                $.ajax({    
                    url: "/catalog?sort=" + this.value,
                    type: 'GET',
                    dataType: "json",
                    success: alert(1),
                    error: alert("error")
                });

                break;
            
            case "sortByName":
            
                $.ajax({    
                    url: "/catalog?sort=" + this.value,
                    type: 'GET',
                    dataType: "json",
                    success: alert(1),
                    error: alert("error")
                });

                break;
                          
        }
    });
});