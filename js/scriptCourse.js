$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    var items = getNamedParameter('par'); 
    items = unescape(items); 
    var items2 = getNamedParameter('par2'); 




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


            if(items2 == 'allCourses') {

                var previous = -1; 
                var next = -1; 
                for(var i = 0; i < courses.length; i ++) {
                    if(courses[i].cfn == items) {

                        for(j = i+1; j < courses.length; j++) {

                            if(courses[j].active == 1) {
                                next = j; 
                                break;
                            }
                        }
                        if(i==0) {

                            for(j = courses.length - 1; j >= 0; j --) {

                                if(courses[j].active == 1) {
                                    previous = j; 
                                    break; 
                                }
                            }
                        } else {

                            for(j = i-1; j >= 0; j--) {

                                if(courses[j].active == 1) {
                                    previous = j; 
                                    break; 
                                }
                            }
                        }
                        if(next == -1) {
                            for(j = 0; j < courses.length; j ++) {
                                if(courses[j].active == 1) {
                                    next = j; 
                                    break; 
                                }
                            }
                        }

                    }
                }


                el+="<li><a href='course.html?par="+courses[previous].cfn+"&par2="+items2+"'>Previous<span class='sr-only'>(current)</span></a></li>";
                el+="<li><a href='course.html?par="+courses[next].cfn+"&par2="+items2+"'>Next<span class='sr-only'>(current)</span></a></li>";

            }
            $("prevnext").append(el);   

        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });


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
            if(items2 == 'coursesByLevel') {

                var previous = -1; 
                var next = -1; 
                for(var i = 0; i < courses.length; i ++) {
                    if(courses[i].full_name == items) {
                        
                        for(j = i+1; j < courses.length; j++) {
                            
                            if(courses[j].active == 1 && courses[i].level == courses[j].level) {
                                next = j; 
                                break;
                            }
                        }
                        if(i==0) {

                            for(j = courses.length - 1; j >= 0; j --) {

                                if(courses[j].active == 1 && courses[i].level == courses[j].level) {
                                    previous = j; 
                                    break; 
                                }
                            }
                        } else {

                            for(j = i-1; j >= 0; j--) {

                                if(courses[j].active == 1 && courses[i].level == courses[j].level) {
                                    previous = j; 
                                    break; 
                                }
                            }
                        }
                        if(next == -1) {
                            for(j = 0; j < courses.length; j ++) {
                                if(courses[j].active == 1 && courses[i].level == courses[j].level) {
                                    next = j; 
                                    break; 
                                }
                            }
                        }
                        if(previous == -1) {
                            for(j = courses.length - 1; j >= 0; j --) {

                                if(courses[j].active == 1 && courses[i].level == courses[j].level) {
                                    previous = j; 
                                    break; 
                                }
                            }
                        }

                    }
                }


                el+="<li><a href='course.html?par="+courses[previous].full_name+"&par2="+items2+"'>Previous<span class='sr-only'>(current)</span></a></li>";
                el+="<li><a href='course.html?par="+courses[next].full_name+"&par2="+items2+"'>Next<span class='sr-only'>(current)</span></a></li>";

            }
            $("prevnext").append(el);   

        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getCourse.php?par="+items, //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var el =""; 
            el+="<h1>"+courses[0].full_name+"</h1>"; 
            el+="<p><img class='img-column2' src='"+courses[0].image+"' alt='Generic placeholder image'></p>";
            el+="<p>"+courses[0].description +"</p>"; 

            $("contenuto").html(el);     

        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getCourseInstructors.php?par="+items, //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var instructors=JSON.parse(response);
            var el =""; 
            for(var i = 0; i < instructors.length; i++) {
                if(instructors[i].active==1) {
                    el+="<li><a href='instructor.html?par="+instructors[i].full_name+"'>Staff - "+instructors[i].full_name+"<span class='sr-only'>(current)</span></a></li>";
                } else {
                    el+="<li><a class='inactiveLink' href='#'>Staff - "+instructors[i].full_name+"<span class='sr-only'>(current)</span></a></li>";

                }
            }
            $("connessioni").html(el);     

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