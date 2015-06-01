$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://www.bgym.altervista.org/php/getAllCourseCategories.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var courseCategories=JSON.parse(response);
            var el=""; 
            var offset; 
            var insertedCC = 0; 
            var first = 0; 
            var i = 0; 
            if(courseCategories.length%2 == 0) {
                offset = courseCategories.length/2; 
            } else {
                 offset = Math.floor(courseCategories.length/2)+1;
            }
            while (insertedCC < courseCategories.length) {
                    if(first == 0) {
                    //Apro riga e stampo elemento con indice pari
                    el+='<div class="row" style="margin-bottom: 35px">';
                    if(courseCategories[i].active == 1) {
                       el+="<div class='col-sm-3'> <h4>"+courseCategories[i].full_name+"</h4> <img class='media-object rounded-img' src='"+courseCategories[i].image+"' alt='Generic placeholder image'></div> <div class='col-sm-3' style='margin-top: 35px'>  <li><a href='courseCategory.html?par="+courseCategories[i].full_name+"'>What is "+courseCategories[i].full_name+"?<span class='sr-only'>(current)</span></a></li> <li><a href='coursesByCourseCategory.html?par="+courseCategories[i].full_name+"'>Courses for "+courseCategories[i].full_name+"<span class='sr-only'>(current)</span></a></li></div>";
                    } else {
                        el+="<div class='col-sm-3'> <h4>"+courseCategories[i].full_name+"</h4> <img class='media-object rounded-img' src='"+courseCategories[i].image+"' alt='Generic placeholder image'></div> <div class='col-sm-3' style='margin-top: 35px'>  <li><a class='inactiveLink' href='#'>What is "+courseCategories[i].full_name+"?<span class='sr-only'>(current)</span></a></li> <li><a class='inactiveLink' href='#'>Courses for "+courseCategories[i].full_name+"<span class='sr-only'>(current)</span></a></li></div>";
                    }
                    insertedCC++; 
                    first=1; 
                } else {
                    if(courseCategories[i+offset].active == 1) {
                        el+="<div class='col-sm-3'> <h4>"+courseCategories[i+offset].full_name+"</h4> <img class='media-object rounded-img' src='"+courseCategories[i+offset].image+"' alt='Generic placeholder image'></div> <div class='col-sm-3' style='margin-top: 35px'>  <li><a href='courseCategory.html?par="+courseCategories[i+offset].full_name+"'>What is "+courseCategories[i+offset].full_name+"?<span class='sr-only'>(current)</span></a></li> <li><a href='coursesByCourseCategory.html?par="+courseCategories[i+offset].full_name+"'>Courses for "+courseCategories[i+offset].full_name+"<span class='sr-only'>(current)</span></a></li></div>";
                    } else {
                        el+="<div class='col-sm-3'> <h4>"+courseCategories[i+offset].full_name+"</h4> <img class='media-object rounded-img' src='"+courseCategories[i+offset].image+"' alt='Generic placeholder image'></div> <div class='col-sm-3' style='margin-top: 35px'>  <li><a class='inactiveLink' href='#'>What is "+courseCategories[i+offset].full_name+"?<span class='sr-only'>(current)</span></a></li> <li><a class='inactiveLink' href='#'>Courses for "+courseCategories[i+offset].full_name+"<span class='sr-only'>(current)</span></a></li></div>";
                    }
                    el+="</div>"
                    i++;
                    insertedCC++; 
                    first=0; 
                }
            }
            el+="</div>"; 
            $("contenuto").append(el);     

        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}