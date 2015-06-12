$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://bgym.altervista.org/php/getLocationInfo.php", //Relative or absolute path to file.php file
        success: function(response) {
            console.log(JSON.parse(response));
            var info=JSON.parse(response);

            $("contenuto").html("<div id='sec0'><h1>Big Gym Position</h1><h3><span class='glyphicon glyphicon-road' aria-hidden='true'></span><span style='margin-left:10px'>How to get there</span></h3><p>"+info[0].how_to_get+"</p><h3>Map</h3><div id='map' class='map-box'></div><p style='margin-top:10px'>"+info[0].address+"</p></div>");
            $("contenuto").append("<div id='sec1'><h1><span>Contact Us</span></h1><p>"+info[0].contact_info+"</p><br/><div id='menu_laterale_img' class='row row-offcanvas row-offcanvas-right'><div class='col-xs-12 col-sm-12' style='padding-left: 0px'><div class='col-sm-7' style='padding-left: 0px'><img class='rounded-img' style='width:100%;' src='img/call.png' alt='Missing image'></div><div class='col-sm-5' style='padding-left: 0px'><h3><span class='glyphicon glyphicon-envelope' aria-hidden='true'></span><span style='margin-left:10px'>Contact details</span></h3><p>Phone number: "+info[0].phone_number+"</p><p>Fax: "+info[0].fax+"</p><p>Email: <a href='mailto:"+info[0].email+"'>"+info[0].email+"</a></p></div><div class='col-sm-12' style='padding-left: 0px'><h3><span style='cursor: pointer' class='glyphicon glyphicon-print' aria-hidden='true' onclick='window.print()'></span></h3></div></div></div></div>");
            $("#sec1").hide();
            GetLocation(info[0].address);
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}

function GetLocation(addr) {
    var geocoder = new google.maps.Geocoder();
    var address = addr;
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            initialize(latitude, longitude);
            //alert("Latitude: " + latitude + "\nLongitude: " + longitude);
        } else {
            //alert("Request failed.")
        }
    });
};
function initialize(lat, lon) {
    var latlng = new google.maps.LatLng(lat,lon); // centro della mappa
    var myLatlng = new google.maps.LatLng(lat,lon); // segnapunto
    // definizione della mappa
    var myOptions = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR}
    }
    mymap = new google.maps.Map(document.getElementById("map"), myOptions);
    // definizione segnapunto
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: mymap,
        title:"Big Gym"});
}