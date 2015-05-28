$(document).ready(ready);

function ready(){
    console.log("I'm ready!");
    var id=1;

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "php/getPhotogalleryKickBoxing.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response)  {
            console.log(JSON.parse(response));
            var photo=JSON.parse(response);
            var el ="";
            
            el+='<div class="row" style="text-align:center; padding:0 0 20px 0; margin-bottom:40px;"><h3 style="font-family:arial; font-weight:bold; font-size:30px;">'+photo[0].full_name+' - Photo Gallery</h3></div>';
            
            
            el+='<div id="links">';
            
            for(var i=0; i<photo.length;i++){
                
                el+='<a style="margin-right:10px;" href="'+photo[i].img_full+'" title="'+photo[i].full_name+'" data-gallery><img style="margin-bottom:10px;" src="'+photo[i].img_red+'" alt="'+photo[i].full_name+'"></a>';
                
            }
            
            
            el+='</div>';
            
            $("contenuto").html(el);    

        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}