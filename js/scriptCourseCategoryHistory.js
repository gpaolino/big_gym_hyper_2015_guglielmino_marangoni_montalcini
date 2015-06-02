$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    var items = getNamedParameter('par');
    items = unescape (items);
    
    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://www.bgym.altervista.org/php/getCourseCategory.php?par="+items, //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var courseCategories=JSON.parse(response);
            var el =""; 
            var el2="";
            var el3="";
            $("title").html("Big Gym - "+courseCategories[0].full_name+" - History");
            el+="<h1>History of "+courseCategories[0].full_name+"</h1>"; 
            el+="<p><img class='img-column2 rounded-img' src='"+courseCategories[0].img_history+"' alt='Generic placeholder image'></p>";
            el+="<p>"+courseCategories[0].history +"</p>"; 
          
            $("contenuto").html(el);
            //Active list group item
            el2+="<a href='courseCategory.html?par="+courseCategories[0].full_name+"' class='list-group-item'>"+courseCategories[0].full_name+" Description</a>";
            el2+="<a href='#' class='list-group-item active'>History of "+courseCategories[0].full_name+"</a>";
            el2+="<a href='photoGallery.html?par="+courseCategories[0].full_name+"&par2=courseCategory' class='list-group-item'>"+courseCategories[0].full_name+" Photo-Gallery</a><ul style='list-style-type:none; padding:6px;'><li></li></ul>";
            el2+="<a href='coursesByCourseCategory.html?par="+courseCategories[0].full_name+"' class='list-group-item'>"+courseCategories[0].full_name+" Courses</a>";
            
            el3+="<div class='breadcrumbsdiv'><ol class='breadcrumb'>";
            el3+="<li><a href='courseCategories.html'>Course Categories</a></li>";
            el3+="<li class='active'>"+items+" - History</li>";
            el3+="</ol></div>";
            
            //el2+="<li><a href='photoGalleryKickBoxing.html?par="+courseCategories[0].full_name+"'>"+courseCategories[0].full_name +" Photo-Gallery<span class='sr-only'>(current)</span></a></li>";
            $("connessioni").html(el2);
            $("breadcrumb").append(el3);
            
            

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