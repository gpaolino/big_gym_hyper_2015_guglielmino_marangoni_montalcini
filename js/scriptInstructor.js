$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    var name = unescape(getNamedParameter('par'));

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://bgym.altervista.org/php/getInstructor.php", //Relative or absolute path to file.php file
        data: {name:name},
        success: function(response) {
            console.log(JSON.parse(response));
            var instructors=JSON.parse(response);
            var el =""; 
            var el2 ="";
            var loading_tweets ="";
            $("title").html("Big Gym - "+instructors[0].full_name);
            el+="<div class='col-sm-10'><h1>"+instructors[0].full_name+"</h1></div>"; 
            el+="<div class='row' style='margin-top:20px'><div class='col-sm-3'><img class='img-column2 rounded-img' src='"+instructors[0].image+"' alt='Generic placeholder image'></div><div class='col-sm-9' style='margin-top: 20px'><p><b>Age: </b>"+calculateAge(instructors[0].birthdate)+"</p><p><b>Sex: </b>"+instructors[0].sex+"</p><p><b>Height: </b>"+instructors[0].height+" cm</p></div></div>";
            el+="<div class='row' style='margin-top:20px'><div class='col-sm-10'><p><b>Bio:</b></p>"+instructors[0].biography +"</div></div>"; 
            el+="<div class='row' style='margin-top:20px'><div class='col-sm-10'>"+instructors[0].prizes_awards +"</div></div>"; 
            $("contenuto").html(el);     

            el2+="<a href='#' class='list-group-item active'>Presentation</a>";
            el2+="<a href='photoGallery.html?par="+name+"&par2=instructor' class='list-group-item'>Photo-Gallery</a><ul style='list-style-type:none; padding:6px;'><li></li></ul>";
            el2+="<a href='teachedCourses.html?par="+name+"' class='list-group-item'>Teached Courses</a>";

            $("connessioni").html(el2);

            loading_tweets+="<h3><span class='glyphicon glyphicon-comment' aria-hidden='true'></span><span style='margin-left:10px'>Latest Tweets</span></h3><p>Loading tweets...</p>";
            $("tweets").html(loading_tweets);

        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });


}

//Retrieve instructor's tweets
$(document).ready(function() {
    var refreshID = setInterval(function() {
        $.getJSON('http://www.bgym.altervista.org/php/twitter/tweets_json.php?count=6',function(data) {
            listTweets(data);
        });
    }, 5000);
});
//Decide what data of the tweet to print
function listTweets(data) {
    var el3 ="<h3><span class='glyphicon glyphicon-comment' aria-hidden='true'></span><span style='margin-left:10px'>Latest Tweets</span></h3><div class='row'><div class='col-sm-10' style='border: 1px solid; border-color: rgb(150, 150, 150); border-radius: 3px; padding-top: 10px'>";
    $.each(data, function(index) {
        //console.log(data[index].text+" "+data[index].created_at+" "+data[index].place+" "+data[index].user.screen_name)
        el3+="<p style='color: rgb(100, 100, 100)'>"+data[index].created_at+"</p>";
        el3+="<p>"+data[index].text+"</p>";
    });
    el3+="</div></div>";
    $("tweets").html(el3);
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

var calculateAge = function(birthday) {
    var now = new Date();
    var past = new Date(birthday);
    var nowYear = now.getFullYear();
    var pastYear = past.getFullYear();
    var age = nowYear - pastYear;

    return age;
};