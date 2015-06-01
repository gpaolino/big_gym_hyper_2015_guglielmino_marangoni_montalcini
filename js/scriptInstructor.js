$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    var items = getNamedParameter('par');

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getInstructor.php?par="+items, //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var el =""; 
            var el2 ="";
            el+="<h1>"+courses[0].full_name+"</h1>"; 
            el+="<p><img class='img-column2' src='"+courses[0].image+"' alt='Generic placeholder image'></p>";
            el+="<p>"+courses[0].biography +"</p>"; 
            el+="<p>"+courses[0].prizes_awards +"</p>"; 
            $("contenuto").html(el);     

            el2+="<a href='#' class='list-group-item active'>Presentation</a>";
            el2+="<a href='photoGallery.html?par="+items+"&par2=instructor' class='list-group-item'>Photo-Gallery</a><ul style='list-style-type:none; padding:6px;'><li></li></ul>";
            el2+="<a href='teachedCourses.html?par="+items+"' class='list-group-item'>Teached Courses</a>";
            
            
            $("connessioni").html(el2);

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