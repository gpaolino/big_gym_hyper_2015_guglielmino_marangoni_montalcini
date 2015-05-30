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
            var column = 0; 
            var oldCourseCat = -1; 
            var el="";
            var el2="";
            var contenuto=$("contenuto");

            for(var i=0; i<courses.length;i++){
                if(column%4==0){
                    //Apro riga e stampo elemento con indice pari
                    el+='<div class="row" style="margin-bottom: 35px">';
                }
                if(oldCourseCat != courses[i].course_cat) {
                    oldCourseCat = courses[i].course_cat;
                    el+="<div class='col-sm-3'><h4>"+courses[i].ccfn+":</h4><img class='media-object rounded-img' src='"+courses[i].image+"' alt='Generic placeholder image'></div>";    

                    column++;
                    if(courses[i].active == 1) {
                        el+="<div class='col-sm-3' style='margin-top: 35px'><li><a href='course.html?par="+courses[i].cfn+"&par2=allCourses'>"+courses[i].cfn+"<span class='sr-only'>(current)</span></a></li>";
                    } else {
                        el+="<div class='col-sm-3' style='margin-top: 35px'><li><a class='inactiveLink' href='#'>"+courses[i].cfn+"<span class='sr-only'>(current)</span></a></li>";

                    }
                }
                while(i < courses.length -1 && courses[i+1].course_cat == oldCourseCat) {
                    i++;
                    if(courses[i].active == 1) {
                        el+="<li><a href='course.html?par="+courses[i].cfn+"&par2=allCourses'>"+courses[i].cfn+"<span class='sr-only'>(current)</span></a></li>";
                    } else {
                        el+="<li><a class='inactiveLink' href='#'>"+courses[i].cfn+"<span class='sr-only'>(current)</span></a></li>";
                    }
                }
                el+="</div>";
                column++; 
                if(column%4==0){
                    el+='</div><!--/row-->';
                }             //Se l'ultimo elemento chiudo la riga
                else if(i==courses.length-1){
                    el+='</div><!--/row-->';
                }

            }

            $("contenuto").html(el); 
            $("contenuto").append('</div><!--/row-->');   
            
            el2+="<ul class='nav nav-tabs'>";
            el2+="<li role='presentation' class='active'><a href='allCourses.html'>All Courses</a></li>";
            el2+="<li role='presentation'><a href='coursesByLevel.html'>Courses by Level</a></li>";
            el2+="</ul>";
            //el2+="<a href='#' class='list-group-item'>All Courses</a>";
            //el2+="<a href='coursesByLevel.html?' class='list-group-item'>Courses By Level</a>";
            $("connessioni").html(el2);

        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}