$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    var items = $.urlParams('par');
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getCourseCategory.php?par="+items, //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var courseCategories=JSON.parse(response);
            var el =""; 
            el+="<h1>"+courseCategories[0].full_name+"</h1>"; 
            el+="<p><img class='img-column2' src='"+courseCategories[0].image+"' alt='Generic placeholder image'></p>";
            el+="<p>"+courseCategories[0].description +"</p>"; 
        
          
            $("contenuto").html(el);     

        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}

(function($) {


    $.urlParams = function(name){

        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);

        if (!results) { 
            return 0; 
        }

        return results[1] || 0;
    };



})(jQuery);