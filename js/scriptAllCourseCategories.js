$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getAllCourseCategories.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var el="";
            for(var i=0;i<courses.length;i++){
                console.log(courses[i].title);

                if(courses[i].id =="1" || courses[i].id =="3" || courses[i].id =="6") {
                    el+="<div class='col-sm-3'> <img class='img-column2' src='"+courses[i].image+"' alt='Generic placeholder image'></div> <div class='col-sm-3'> <h3>"+courses[i].full_name+"</h3> <li><a href='index.html'>What is "+courses[i].full_name+"?<span class='sr-only'>(current)</span></a></li> <li><a href='index.html'>Courses for "+courses[i].full_name+"<span class='sr-only'>(current)</span></a></li></div>";
                }else {
                    el+="<div class='col-sm-3'> <img class='img-column2' src='"+courses[i].image+"' alt='Generic placeholder image'></div> <div class='col-sm-3'> <h3>"+courses[i].full_name+"</h3> <li><a href='#' class='not-active'>What is "+courses[i].full_name+"?<span class='sr-only'>(current)</span></a></li> <li><a href='#' class='not-active'>Courses for "+courses[i].full_name+"<span class='sr-only'>(current)</span></a></li></div>";}
            }

            $("prova").html(el);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}