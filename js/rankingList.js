$(document).ready(function(){

	
	  //Get elem
    var oDownload = $(".download");
    var oPopwin = $(".popwin-wrapper");

    //AJAX
    $.ajax({

    });

    //Show model layer after tapping the body
    $("body").on("tap", function() {
        oPopwin.fadeIn(500);

        //Shaking animate
        setTimeout(function() {
            oDownload.addClass("shake");
        }, 1000);

         return false;
    });



    //Download button tap
    oDownload.on("tap", function() {
        window.location = "http://www.baidu.com/";
    });
});