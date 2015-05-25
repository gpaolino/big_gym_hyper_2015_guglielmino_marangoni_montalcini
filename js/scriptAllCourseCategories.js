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

            $("contenuto").html('<div class="row row-offcanvas row-offcanvas-right"><div class="col-xs-12 col-sm-9">');

            for(var i=0; i<courses.length;i++){
                if(i%2==0){
                    //Apro riga e stampo elemento con indice pari
                    $("contenuto").append('<div class="row">');

                    $("contenuto").append("<div class='col-sm-3'> <img class='img-column2' src='"+courses[i].image+"' alt='Generic placeholder image'></div> <div class='col-sm-3'> <h3>"+courses[i].full_name+"</h3> <li><a href='index.html'>What is "+courses[i].full_name+"?<span class='sr-only'>(current)</span></a></li> <li><a href='index.html'>Courses for "+courses[i].full_name+"<span class='sr-only'>(current)</span></a></li></div>");
                    //Se l'ultimo elemento è pari chiudo la riga
                    if(i==courses.length-1){
                        $("contenuto").append('</div><!--/row-->');
                    }
                }else{
                    //Stampo elemento con indice dispari e chiudo la riga
                    $("contenuto").append("<div class='col-sm-3'> <img class='img-column2' src='"+courses[i].image+"' alt='Generic placeholder image'></div> <div class='col-sm-3'> <h3>"+courses[i].full_name+"</h3> <li><a href='index.html'>What is "+courses[i].full_name+"?<span class='sr-only'>(current)</span></a></li> <li><a href='index.html'>Courses for "+courses[i].full_name+"<span class='sr-only'>(current)</span></a></li></div>");
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