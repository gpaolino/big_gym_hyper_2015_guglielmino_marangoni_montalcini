$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getCoursesByCourseCategory.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var el =""; 
            el+='<div class="row">';
            el+="<div class='col-xs-6 col-md-3' style='margin-bottom:2%; margin-top:5%;'><img class='media-object' src='"+courses[0].img+"' alt='Generic placeholder image'></div>";
            el+="<div class='col-xs-6 col-md-3' style='margin-bottom:2%; margin-top:5%;'>";
            for(var i = 0; i < courses.length; i++) {
                if(courses[i].active == 1) {
                    el+="<li><a href='course.html?par="+courses[i].cfn+"'>"+courses[i].cfn+"<span class='sr-only'>(current)</span></a></li>";
                } else {
                    el+="<li><a class = 'inactiveLink' href='course.html?par="+courses[i].cfn+"'>"+courses[i].cfn+"<span class='sr-only'>(current)</span></a></li>";

                }
            }
            el+="</div>"; 
            el+="</div>";



            $("contenuto").html(el);     

        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}