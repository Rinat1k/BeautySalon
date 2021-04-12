function ShowNotification(place, message, isError){
    let notificationBlock = $("<div class=\"notification_block\"></div>");
    notificationBlock.css({
        "font-size" : "0.8em",
	    "margin-top" : "20px",
	    "border-radius" : "3px",
	    "padding" : "10px 20px 10px 1em"  
    });
 
    notificationBlock.css({
        "background-color" : (isError ? "#FFDDDD" : "#DFFFE1"),
        "border" : "solid 1px ",
        "border-color" : (isError ? "#AE2B2B" : "#19521C"),
        "color" : (isError ? "#D41A1A" : "#0F3911")   
    });
    
    notificationBlock.text(message);
    $(place).append(notificationBlock);
}

function HideNotification(){
    $(".notification_block").hide();
}


function ShowAuthorizationModal(){
    $("#authorization_modal").fadeIn(100).css("display", "flex");
    $("#form_registration").hide();
    HideNotification();
    $(".modals button:eq(0)").css("background-color", "#F3F3F3");
    $(".modals button:eq(0)").css("color", "#5B5B5B");
    $(".modals button:eq(1)").css("background-color", "#5B5B5B");
    $(".modals button:eq(1)").css("color", "#F3F3F3");
    $("#form_authorization").slideDown( "fast", function() {});
}


function ShowRegistrationModal(){
    $("#authorization_modal").fadeIn(100).css("display", "flex");
    $("#form_authorization").hide();
    HideNotification();
    $(".modals button:eq(1)").css("background-color", "#F3F3F3");
    $(".modals button:eq(1)").css("color", "#5B5B5B");
    $(".modals button:eq(0)").css("background-color", "#5B5B5B");
    $(".modals button:eq(0)").css("color", "#F3F3F3");
    $("#form_registration").slideDown( "fast", function() {});
}

