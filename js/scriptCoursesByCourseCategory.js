$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    var items = getNamedParameter('par');
    items = unescape(items);

    $.ajax({
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://bgym.altervista.org/php/getCoursesByCourseCategory.php?par="+items,  //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var el =""; 
            var el2="";
            el+="<div class='col-sm-12' style='margin-bottom: 20px'><h1>These are the courses related to "+courses[0].ccfn+":</h1></div>";
            el+='<div class="row" style="margin-top: 20px">';
            el+="<div class='col-sm-3' style='margin-bottom: 20px'><img class='media-object rounded-img' src='"+courses[0].img+"' alt='Generic placeholder image'></div>";
            el+="<div class='col-sm-9'>";
            for(var i = 0; i < courses.length; i++) {
                if(courses[i].active == 1) {
                    el+="<li><a href='course.html?par="+courses[i].cfn+"&par2=coursesByCourseCategory&par3="+items+"'>"+courses[i].cfn+"<span class='sr-only'>(current)</span></a></li>";
                } else {
                    el+="<li><a class = 'inactiveLink' href='#'>"+courses[i].cfn+"<span class='sr-only'>(current)</span></a></li>";

                }
            }
            el+="</div>"; 
            el+="</div>";

            el2+="<div class='breadcrumbsdiv'><ol class='breadcrumb'>";
            el2+="<li><a href='courseCategories.html'>Course Categories</a></li>";
            el2+="<li class='active'>Courses By Course Categories - " + items + "</li>";
            el2+="</ol></div>";




            $("contenuto").html(el);   
            $("breadcrumb").append(el2);
            

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

