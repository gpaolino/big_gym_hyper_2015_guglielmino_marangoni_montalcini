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
            var courseCategories=JSON.parse(response);
            var el=""; 
            
            for(var i=0; i<courseCategories.length;i++){
                if(i%2==0){
                    //Apro riga e stampo elemento con indice pari
                    el+='<div class="row">';
                    if(courseCategories[i].active == 1) {
                       el+="<div class='col-sm-3'> <h4>"+courseCategories[i].full_name+"</h4> <img class='media-object rounded-img' src='"+courseCategories[i].image+"' alt='Generic placeholder image'></div> <div class='col-sm-3' style='margin-top: 35px'>  <li><a href='courseCategory.html?par="+courseCategories[i].full_name+"'>What is "+courseCategories[i].full_name+"?<span class='sr-only'>(current)</span></a></li> <li><a href='coursesByCourseCategory.html?par="+courseCategories[i].full_name+"'>Courses for "+courseCategories[i].full_name+"<span class='sr-only'>(current)</span></a></li></div>";
                    } else {
                        el+="<div class='col-sm-3'> <h4>"+courseCategories[i].full_name+"</h4> <img class='media-object rounded-img' src='"+courseCategories[i].image+"' alt='Generic placeholder image'></div> <div class='col-sm-3' style='margin-top: 35px'>  <li><a class='inactiveLink' href='#'>What is "+courseCategories[i].full_name+"?<span class='sr-only'>(current)</span></a></li> <li><a class='inactiveLink' href='#'>Courses for "+courseCategories[i].full_name+"<span class='sr-only'>(current)</span></a></li></div>";
                    }

                    //Se l'ultimo elemento è pari chiudo la riga
                    if(i==courseCategories.length-1){
                        el+='</div><!--/row-->';
                    }
                }else{
                    //Stampo elemento con indice dispari e chiudo la riga
                    if(courseCategories[i].active == 1) {
                        el+="<div class='col-sm-3'> <h4>"+courseCategories[i].full_name+"</h4> <img class='media-object rounded-img' src='"+courseCategories[i].image+"' alt='Generic placeholder image'></div> <div class='col-sm-3' style='margin-top: 35px'>  <li><a href='courseCategory.html?par="+courseCategories[i].full_name+"'>What is "+courseCategories[i].full_name+"?<span class='sr-only'>(current)</span></a></li> <li><a href='coursesByCourseCategory.html?par="+courseCategories[i].full_name+"'>Courses for "+courseCategories[i].full_name+"<span class='sr-only'>(current)</span></a></li></div>";
                    } else {
                        el+="<div class='col-sm-3'> <h4>"+courseCategories[i].full_name+"</h4> <img class='media-object rounded-img' src='"+courseCategories[i].image+"' alt='Generic placeholder image'></div> <div class='col-sm-3' style='margin-top: 35px'>  <li><a class='inactiveLink' href='#'>What is "+courseCategories[i].full_name+"?<span class='sr-only'>(current)</span></a></li> <li><a class='inactiveLink' href='#'>Courses for "+courseCategories[i].full_name+"<span class='sr-only'>(current)</span></a></li></div>";
                    }
                    el+='</div><!--/row-->';
                }
            }

            $("contenuto").append(el);     

        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}