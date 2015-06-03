$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://bgym.altervista.org/php/getAllCoursesByLevel.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var level= -1; 
            var el=""; 
            var el2="";
            var lev_vector = ["Beginner", "Intermediate", "Advanced"];

            //el+='<div class="row row-offcanvas row-offcanvas-right"><div class="col-xs-12 col-sm-9">';

            for(var i=0; i<courses.length;i++){
                if(courses[i].level != level) {
                    level = courses[i].level;
                    if(i!=0) { 
                        el+="</div>";
                        el+='</div>';
                    }
                    el+='<div class="col-sm-10"><h1>Select your favorite course:</h1></div><div class="row" style="margin-bottom: 35px">';

                    el+="<div class='col-sm-3'><h4>"+lev_vector[level]+"</h4><img class='img-column2 rounded-img' src='img/courses/level"+courses[i].level+".png' alt='Generic placeholder image'></div>";
                    el+="<div class='col-sm-9' style='margin-top: 35px'>"; 
                    if(courses[i].active == 1) {
                        el+="<li><a href='course.html?par="+courses[i].full_name+"&par2=coursesByLevel'>"+courses[i].full_name+"<span class='sr-only'>(current)</span></a></li>";
                    } else {
                        el+="<li><a class='inactiveLink' href='#'>"+courses[i].full_name+"<span class='sr-only'>(current)</span></a></li>";
                    }
                }else {
                    if(courses[i].active == 1) {
                        el+="<li><a href='course.html?par="+courses[i].full_name+"&par2=coursesByLevel'>"+courses[i].full_name+"<span class='sr-only'>(current)</span></a></li>";
                    } else {
                        el+="<li><a class='inactiveLink' href='#'>"+courses[i].full_name+"<span class='sr-only'>(current)</span></a></li>";
                    }
                }
            }
            $("contenuto").html(el); 
            $("contenuto").append('</div><!--/row-->');     

            el2+="<ul class='nav nav-tabs'>";
            el2+="<li role='presentation'><a href='allCourses.html'>All Courses</a></li>";
            el2+="<li role='presentation' class='active'><a href='coursesByLevel.html'>Courses by Level</a></li>";
            el2+="</ul>";
            $("connessioni").html(el2);

        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}