$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getAllCoursesByLevel.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var level= -1; 
            var el=""; 

            
            el+='<div class="row row-offcanvas row-offcanvas-right"><div class="col-xs-12 col-sm-9">';

            for(var i=0; i<courses.length;i++){
                if(courses[i].level != level) {
                    level = courses[i].level;
                    if(i!=0) { 
                    el+="</div>";
                    el+='</div>';
                    }
                el+='<div class="row">';

                el+="<div class='col-sm-6'> <img class='img-column2' src='"+courses[i].image+"' alt='Generic placeholder image'></div>"; 
                el+="<div class='col-sm-6'><li><a href='index.html'>"+courses[i].full_name+"<span class='sr-only'>(current)</span></a></li>"; 
                } else {
                   el+="<li><a href='index.html'>"+courses[i].full_name+"<span class='sr-only'>(current)</span></a></li>"; 
                }
        }
        $("contenuto").html(el); 
        $("contenuto").append('</div><!--/.col-xs-12.col-sm-9--></div><!--/row-->');     

        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}