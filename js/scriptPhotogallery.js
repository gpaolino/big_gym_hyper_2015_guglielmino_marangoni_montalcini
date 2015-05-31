$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    var items = getNamedParameter('par');
    items = unescape(items);
    var items2 = getNamedParameter('par2');
    items2 = unescape(items2);


    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getPhotogallery.php?par="+items +"&par2="+items2, //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response)  {
            if(items2 == 'courseCategory') {
                console.log(JSON.parse(response));
                var photo=JSON.parse(response);
                var el ="";
                var el2="";
                var el3="";
                el+='<div class="row" style="text-align:left; padding:0 0 20px 0; margin-bottom:40px;"><h3 style="font-family:arial; font-weight:bold; font-size:30px;">'+photo[0].full_name+' - Photo Gallery</h3></div>';


                el+='<div id="links">';

                for(var i=0; i<photo.length;i++){

                    el+='<a style="margin-right:10px;" href="'+photo[i].img_full+'" title="'+photo[i].full_name+'" data-gallery><img style="margin-bottom:10px;" src="'+photo[i].img_red+'" alt="'+photo[i].full_name+'"></a>';

                }


                el+='</div>';

                $("contenuto").html(el);  

                el2+="<a href='courseCategory.html?par="+items+"' class='list-group-item'>"+items+" Description</a>";
                el2+="<a href='courseCategoryHistory.html?par="+items+"' class='list-group-item'>History of "+items+"</a>";
                el2+="<a href='#' class='list-group-item active'>"+items+" Photo-Gallery</a>";
                el2+="<a href='coursesByCourseCategory.html?par="+items+"' class='list-group-item'>"+items+" Courses</a>";
                
                el3+="<div class='breadcrumbsdiv'><ol class='breadcrumb'>";
                el3+="<li><a href='courseCategories.html'>Course Categories</a></li>";
                el3+="<li class='active'>"+items+" - Photogallery</li>";
                el3+="</ol></div>";

                $("connessioni").html(el2);
                $("breadcrumb").append(el3);

            } else {

                console.log(JSON.parse(response));
                var photo=JSON.parse(response);
                var el ="";
                var el2 ="";
                
                el+='<div class="row" style="text-align:left; padding:0 0 20px 0; margin-bottom:40px;"><h3 style="font-family:arial; font-weight:bold; font-size:30px;">'+photo[0].full_name+' - Photo Gallery</h3></div>';


                el+='<div id="links">';

                for(var i=0; i<photo.length;i++){

                    el+='<a style="margin-right:10px;" href="'+photo[i].img_full+'" title="'+photo[i].full_name+'" data-gallery><img style="margin-bottom:10px;" src="'+photo[i].img_red+'" alt="'+photo[i].full_name+'"></a>';

                }


                el+='</div>';

                $("contenuto").html(el);  

                el2+="<a href='instructor.html?par="+items+"' class='list-group-item'>Presentation</a>";
                el2+="<a href='#' class='list-group-item active'>Photo-Gallery</a>";
                el2+="<a href='teachedCourses.html?par="+items+"' class='list-group-item'>Teached Courses</a>";
                
                $("connessioni").html(el2);
            }

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