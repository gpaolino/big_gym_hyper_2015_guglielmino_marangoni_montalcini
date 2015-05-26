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

            el+='<div class="row row-offcanvas row-offcanvas-right"><div class="col-xs-12 col-sm-12">';

          
            
         
        
            for(var i=0; i<courses.length;i++){
                if(column%4==0){
                    //Apro riga e stampo elemento con indice pari
                    el+='<div class="row">';
                }
                if(oldCourseCat != courses[i].course_cat) {
                    oldCourseCat = courses[i].course_cat;
                    el+="<div class='col-sm-2'><img class='img-column2' src='"+courses[i].image+"' alt='Generic placeholder image'></div>";    
                    column++; 
                    el+="<div class='col-sm-4' style='margin-top:3%'><li><a href='index.html'>"+courses[i].cfn+"<span class='sr-only'>(current)</span></a></li>";
                    }

                    while(i < courses.length -1 && courses[i+1].course_cat == oldCourseCat) {
                        i++; 
                        el+="<li><a href='index.html'>"+courses[i].cfn+"<span class='sr-only'>(current)</span></a></li>";
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
        $("contenuto").append('</div><!--/.col-xs-12.col-sm-12--></div><!--/row-->');     

    },
           error: function(request,error) 
    {
        console.log("Error");
    }
});

}