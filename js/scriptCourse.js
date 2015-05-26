$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    var items = $.urlParams('par');

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getCourse.php?par="+items, //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var el =""; 
            el+="<h1>"+courses[0].full_name+"</h1>"; 
            el+="<p><img class='img-column2' src='"+courses[0].image+"' alt='Generic placeholder image'></p>";
            el+="<p>"+courses[0].description +"</p>"; 


            $("contenuto").html(el);     

        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getCourseInstructors.php?par="+items, //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var instructors=JSON.parse(response);
            var el =""; 
            for(var i = 0; i < instructors.length; i++) {
                if(instructors[i].active==1) {
                    el+="<li><a href='instructor.html?par="+instructors[i].full_name+"'>Staff - "+instructors[i].full_name+"<span class='sr-only'>(current)</span></a></li>";
                } else {
                    el+="<li><a class='inactiveLink' href='#'>Staff - "+instructors[i].full_name+"<span class='sr-only'>(current)</span></a></li>";

                }
            }
            $("connessioni").html(el);     

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