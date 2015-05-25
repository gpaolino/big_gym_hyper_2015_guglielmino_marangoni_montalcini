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
            
            $("contenuto").append("<div>"); 
            for(var i = 0; i < courses.length; i++) {
                $("contenuto").append(""+ courses[i].cfn); 
                $("contenuto").append("<br>");
            }
            $("contenuto").append("</div>"); 
              
            $("contenuto").append('<div class="row row-offcanvas row-offcanvas-right"><div class="col-xs-12 col-sm-9">');

            for(var i=0; i<courses.length;i++){
                if(column%4==0){
                    //Apro riga e stampo elemento con indice pari
                    $("contenuto").append('<div class="row">');
                }
                if(oldCourseCat != courses[i].course_cat) {
                    oldCourseCat = courses[i].course_cat;
                    $("contenuto").append("<div class='col-sm-3'><img class='img-column2' src='"+courses[i].image+"' alt='Generic placeholder image'></div>");    
                    column++; 
                    $("contenuto").append("<div class='col-sm-3'><li><a href='index.html'>"+courses[i].cfn+"<span class='sr-only'>(current)</span></a></li>");
                    }
                    
                    while(i < courses.length -1 && courses[i+1].course_cat == oldCourseCat) {
                        i++; 
                        $("contenuto").append("<li><a href='index.html'>"+courses[i].cfn+"<span class='sr-only'>(current)</span></a></li>");
                    }
                    $("contenuto").append("</div>");
                    column++; 
                if(column%4==0){
                     $("contenuto").append('</div><!--/row-->')
                }             //Se l'ultimo elemento chiudo la riga
                else if(i==courses.length-1){
                    $("contenuto").append('</div><!--/row-->');
                }
               
            }

            $("contenuto").append('</div><!--/.col-xs-12.col-sm-9--></div><!--/row-->');     

        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}