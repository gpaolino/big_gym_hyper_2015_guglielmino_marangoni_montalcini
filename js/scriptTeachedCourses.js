$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    var items = getNamedParameter('par');

    $.ajax({
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getTeachedCourses.php?par="+items,  //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var el =""; 
            el+='<div class="row">';
            el+="<div class='col-xs-6 col-md-3' style='margin-bottom:2%; margin-top:5%;'><img class='media-object' src='"+courses[0].img+"' alt='Generic placeholder image'></div>";
            el+="<div class='col-xs-6 col-md-3' style='margin-bottom:2%; margin-top:5%;'>";
            for(var i = 0; i < courses.length; i++) {
                if(courses[i].active == 1) {
                    el+="<li><a href='course.html?par="+courses[i].full_name+"&par2=coursesByCourseCategory&par3="+items+"'>"+courses[i].full_name+"<span class='sr-only'>(current)</span></a></li>";
                } else {
                    el+="<li><a class = 'inactiveLink' href='#'>"+courses[i].full_name+"<span class='sr-only'>(current)</span></a></li>";

                }
            }
            el+="</div>"; 
            el+="</div>";



            $("contenuto").html(el);     

        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}

function getNamedParameter(paramName){
    var url = ""+window.location.href;
    var allParams = url.split("?");
    var allParamsString = ""+allParams[1];
    var singleParamsWithNames = allParamsString.split("&");
    var paramsNames = new Array();
    var paramsValues = new Array();

    for(var i=0; i!==singleParamsWithNames.length; i++){
        var tempString = ""+singleParamsWithNames[i];
        var couple = tempString.split("=");
        paramsNames[i]=couple[0];
        paramsValues[i]=couple[1];
    }
    for(var j=0; j!==paramsNames.length; j++){
        if(paramName===paramsNames[j]){
            return paramsValues[j];
        }
    }
    return "";
}

