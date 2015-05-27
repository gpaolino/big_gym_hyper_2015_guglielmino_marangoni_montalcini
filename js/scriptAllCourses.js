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
            var contenuto=$("contenuto");
            var corsi;

            for(var i=0; i<courses.length;i++){
                if(column%4==0){
                    //Apro riga e stampo elemento con indice pari
                    el+='<div class="row">';
                }
                if(oldCourseCat != courses[i].course_cat) {
                    oldCourseCat = courses[i].course_cat;
                    el+="<div class='col-xs-6 col-md-3' style='margin-bottom:2%'><h4>"+courses[i].ccfn+":</h4><img class='media-object' src='"+courses[i].image+"' alt='Generic placeholder image'></div>";    

                    column++;
                    if(courses[i].active == 1) {
                        el+="<div class='col-xs-6 col-md-3' style='margin-bottom:2%; margin-top:5%;'><li><a href='course.html?par="+courses[i].cfn+"'>"+courses[i].cfn+"<span class='sr-only'>(current)</span></a></li>";
                    } else {
                        el+="<div class='col-xs-6 col-md-3' style='margin-bottom:2%; margin-top:5%;'><li><a class='inactiveLink' href='#'>"+courses[i].cfn+"<span class='sr-only'>(current)</span></a></li>";

                    }
                }
                while(i < courses.length -1 && courses[i+1].course_cat == oldCourseCat) {
                    i++;
                    if(courses[i].active == 1) {
                        el+="<li><a href='course.html?par="+courses[i].cfn+"'>"+courses[i].cfn+"<span class='sr-only'>(current)</span></a></li>";
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

        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}