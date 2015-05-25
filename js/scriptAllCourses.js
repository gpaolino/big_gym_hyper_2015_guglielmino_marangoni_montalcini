$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getAllCourses.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var el="";
            var el1="";
            var el2="";
            for(var i=0;i<10;i+5){
                console.log(courses[i].title);

                    el+="<div class='col-sm-3'> <img class='img-column2' src='"+courses[i].image+"' alt='Generic placeholder image'></div> <div class='col-sm-3'> <h3>"+courses[i].full_name+"</h3> <li><a href='course.html?id="+ courses[i].id+"'>"+courses[i].full_name+"<span class='sr-only'>(current)</span></a></li> <li><a href='course.html?id="+ courses[i+1].id+"'>"+courses[i+1].full_name+"<span class='sr-only'>(current)</span></a></li><li><a href='course.html?id="+ courses[i+2].id+"'>"+courses[i+2].full_name+"<span class='sr-only'>(current)</span></a></li><li><a href='course.html?id="+ courses[i+3].id+"'>"+courses[i+3].full_name+"<span class='sr-only'>(current)</span></a></li><li><a href='course.html?id="+ courses[i+4].id+"'>"+courses[i+4].full_name+"<span class='sr-only'>(current)</span></a></li></div>";
            }
                        for(var i=2;i<4;i++){
                console.log(courses[i].title);

                    el1+="<div class='col-sm-3'> <img class='img-column2' src='"+courses[i].image+"' alt='Generic placeholder image'></div> <div class='col-sm-3'> <h3>"+courses[i].full_name+"</h3> <li><a href='index.html'>What is "+courses[i].full_name+"?<span class='sr-only'>(current)</span></a></li> <li><a href='index.html'>Courses for "+courses[i].full_name+"<span class='sr-only'>(current)</span></a></li></div>";
            }
                        for(var i=4;i<courses.length;i++){
                console.log(courses[i].title);

                    el2+="<div class='col-sm-3'> <img class='img-column2' src='"+courses[i].image+"' alt='Generic placeholder image'></div> <div class='col-sm-3'> <h3>"+courses[i].full_name+"</h3> <li><a href='index.html'>What is "+courses[i].full_name+"?<span class='sr-only'>(current)</span></a></li> <li><a href='index.html'>Courses for "+courses[i].full_name+"<span class='sr-only'>(current)</span></a></li></div>";
            }
            

            $("prova1").html(el);
            $("prova5").html(el1);
            $("prova9").html(el2);
            
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}