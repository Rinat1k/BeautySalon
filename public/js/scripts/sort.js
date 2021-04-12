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
                        console.log(data); //получение данных от сервера
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
                        console.log(data); //получение данных
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