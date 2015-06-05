$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    var items = getNamedParameter('par'); 
    items = unescape(items); 
    var items2 = getNamedParameter('par2'); 
    var items3 = getNamedParameter('par3');
    items3 = unescape(items3);



    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://bgym.altervista.org/php/getAllCourses.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var column = 0; 
            var oldCourseCat = -1; 
            var el="";
            var el2="";
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
                        for(j = i-1; j >= 0; j--) {
                            if(courses[j].active == 1) {
                                previous = j; 
                                break;
                            }
                        }
                        if(next == -1) {
                            for(j = 0; j < courses.length; j++) {
                                if(courses[j].active == 1) {
                                    next = j; 
                                    break;
                                }
                            }
                        }
                        if(previous == -1) {
                            for(j = courses.length - 1; j >= 0; j--) {
                                if(courses[j].active == 1) {
                                    previous = j; 
                                    break;
                                }
                            }
                        }


                    }
                }



                el+="<a href='course.html?par="+courses[previous].cfn+"&par2="+items2+"'><span class='glyphicon glyphicon-backward' aria-hidden='true'></span> Prev</a>";
                el+=" (All courses) ";
                el+="<a href='course.html?par="+courses[next].cfn+"&par2="+items2+"'>Next <span class='glyphicon glyphicon-forward' aria-hidden='true'></span></a>";

                el2+="<div class='breadcrumbsdiv'><ol class='breadcrumb'>";
                el2+="<li><a href='allCourses.html'>All Courses</a></li>";
                el2+="<li class='active'>"+items+"</li>";
                el2+="</ol></div>";
            }
            $("prevnext").append(el);   
            $("breadcrumb").append(el2);


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
        url: "http://www.bgym.altervista.org/php/getAllCoursesByLevel.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var level= -1; 
            var el=""; 
            var el2="";
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
                        for(j = i-1; j >= 0; j--) {
                            if(courses[j].active == 1 && courses[i].level == courses[j].level) {
                                previous = j; 
                                break;
                            }
                        }
                        if(next == -1) {
                            for(j = 0; j < courses.length; j++) {
                                if(courses[j].active == 1 && courses[i].level == courses[j].level) {
                                    next = j; 
                                    break;
                                }
                            }
                        }
                        if(previous == -1) {
                            for(j = courses.length - 1; j >= 0; j--) {
                                if(courses[j].active == 1 && courses[i].level == courses[j].level) {
                                    previous = j; 
                                    break;
                                }
                            }
                        }


                    }
                }


                var lev_vector = ["Beginner", "Intermediate", "Advanced"];

                el+="<a href='course.html?par="+courses[previous].full_name+"&par2="+items2+"'><span class='glyphicon glyphicon-backward' aria-hidden='true'></span> Prev</a>";
                el+=" ("+lev_vector[courses[previous].level]+" courses) ";
                el+="<a href='course.html?par="+courses[next].full_name+"&par2="+items2+"'>Next <span class='glyphicon glyphicon-forward' aria-hidden='true'></span></a>";

                el2+="<div class='breadcrumbsdiv'><ol class='breadcrumb'>";
                el2+="<li><a href='coursesByLevel.html'>Courses By Level</a></li>";
                el2+="<li class='active'>"+items+"</li>";
                el2+="</ol></div>";

            }
            $("prevnext").append(el); 
            $("breadcrumb").append(el2);


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
        url: "http://www.bgym.altervista.org/php/getCoursesByCourseCategory.php?par="+items3, //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var level= -1; 
            var el=""; 
            var el2="";

            if(items2 == 'coursesByCourseCategory') {

                var previous = -1; 
                var next = -1; 
                for(var i = 0; i < courses.length; i ++) {
                    if(courses[i].cfn == items) {
                        for(j = i+1; j < courses.length; j++) {
                            if(courses[j].active == 1 && courses[i].cc == courses[j].cc) {
                                next = j; 
                                break;
                            }
                        }
                        for(j = i-1; j >= 0; j--) {
                            if(courses[j].active == 1 && courses[i].cc == courses[j].cc) {
                                previous = j; 
                                break;
                            }
                        }
                        if(next == -1) {
                            for(j = 0; j < courses.length; j++) {
                                if(courses[j].active == 1 && courses[i].cc == courses[j].cc) {
                                    next = j; 
                                    break;
                                }
                            }
                        }
                        if(previous == -1) {
                            for(j = courses.length - 1; j >= 0; j--) {
                                if(courses[j].active == 1 && courses[i].cc == courses[j].cc) {
                                    previous = j; 
                                    break;
                                }
                            }
                        }


                    }
                }



                el+="<a href='course.html?par="+courses[previous].cfn+"&par2="+items2+"&par3="+items3+"'><span class='glyphicon glyphicon-backward' aria-hidden='true'></span> Prev</a>";
                el+=" ("+courses[previous].ccfn+" courses) ";
                el+="<a href='course.html?par="+courses[next].cfn+"&par2="+items2+"&par3="+items3+"'>Next <span class='glyphicon glyphicon-forward' aria-hidden='true'></span></a>";

                el2+="<div class='breadcrumbsdiv'><ol class='breadcrumb'>";
                el2+="<li><a href='courseCategories.html'>Course Categories</a></li>";
                el2+="<li><a href='coursesByCourseCategory.html?par="+items3+"'>Courses By Course Category - " +items3 +"</a></li>";
                el2+="<li class='active'>"+items+"</li>";
                el2+="</ol></div>";

            }
            $("prevnext").append(el); 
            $("breadcrumb").append(el2);

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
        url: "http://www.bgym.altervista.org/php/getCourse.php?par="+items, //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var courses=JSON.parse(response);
            var el =""; 
            el+="<h1>"+courses[0].full_name+"</h1>"; 
            el+="<p><img class='img-column2 rounded-img' src='"+courses[0].image+"' alt='Generic placeholder image'></p>";
            el+="<p>"+courses[0].description +"</p>"; 
            el+="<h3>Time table:</h3>"; 
            el+="<div class='table-responsive'><table class='table table-bordered'><thead></thead><tr><th>"+courses[0].first_day+"</th><th>"+courses[0].second_day+"</th></tr></thead><tbody><tr><td>"+courses[0].first_time+"</td><td>"+courses[0].second_time+"</td></tr></tbody></table></div>";
            $("title").html("Big Gym - "+courses[0].full_name);
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
        url: "http://www.bgym.altervista.org/php/getCourseInstructors.php?par="+items, //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {
            console.log(JSON.parse(response));
            var instructors=JSON.parse(response);
            var el =""; 
            for(var i = 0; i < instructors.length; i++) {
                if(instructors[i].active==1) {
                    //Active list group item
                    el+="<a href='instructor.html?par="+instructors[i].full_name+"' class='list-group-item'>Staff - "+instructors[i].full_name+"</a>";
                    //el+="<li><a href='instructor.html?par="+instructors[i].full_name+"'>Staff - "+instructors[i].full_name+"<span class='sr-only'>(current)</span></a></li>";
                } else {
                    //Inactive list group item
                    el+="<a href='#' class='list-group-item disabled'>Staff - "+instructors[i].full_name+"</a>";
                    //el+="<li><a class='inactiveLink' href='#'>Staff - "+instructors[i].full_name+"<span class='sr-only'>(current)</span></a></li>";
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