$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    var name = unescape(getNamedParameter('par'));

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://bgym.altervista.org/php/getTeachedCourses.php",  //Relative or absolute path to file.php file
        data: {name:name},
        success: function(response) {
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var el ="";
            var el2="";
            $("title").html("Big Gym - Courses hold by "+courses[0].ifn);
            el+='<div class="row">';
            el+="<div class='col-sm-3'><h4>"+courses[0].ccfn+"</h4><img class='media-object rounded-img' src='"+courses[0].image+"' alt='Generic placeholder image'></div>";
            el+="<div class='col-sm-9' style='margin-top:35px;'>";
            for(var i = 0; i < courses.length; i++) {
                if(courses[i].active == 1) {
                    el+="<li><a href='course.html?par="+courses[i].full_name+"&par3="+name+"'>"+courses[i].full_name+"<span class='sr-only'>(current)</span></a></li>";
                } else {
                    el+="<li><a class = 'inactiveLink' href='#'>"+courses[i].full_name+"<span class='sr-only'>(current)</span></a></li>";

                }
            }
            el+="</div>"; 
            el+="</div>";

            el2+="<div class='breadcrumbsdiv'><ol class='breadcrumb'>";
            el2+="<li><a href='instructor.html?par="+name+"'>"+name+"</a></li>";
            el2+="<li class='active'>"+name+" - Teached Courses</li>";
            el2+="</ol></div>";


            $("contenuto").html(el);     
            $("breadcrumb").html(el2);

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

