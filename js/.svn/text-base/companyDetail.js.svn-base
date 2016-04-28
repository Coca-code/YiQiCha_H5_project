$(document).ready(function() {

    //获取元素
    var oBox = $(".box");
    var oDownload = $(".download");
    var oPopwin = $(".popwin-wrapper");
    var oCorpname = $(".scroll_content");

    //滚动公司名
    var buttons = $(".button");
    marquee.stop(buttons);
    marquee.fly(buttons);


    //AJAX
    $.ajax({

    });

    //动态创建角标

    var l = oBox.length;
    for (var i = 0; i < l; i++) {
        (function(index) {

            // var oFragment = document.createDocumentFragment();
            // var oImg = document.createElement("img");
            // var ("oImg_" + index).src = "../img/hot-icon.png";



            // ("oImg_" + index).style.cssText = "position: absolute;display: block;width: 0.5867rem;height: 0.3467rem;top: 0;left: 0;";
            // ("oFragment_" + index).appendChild("oImg_" + index);
            // oBox.append(oFragment_1);



        })(i);
    }










    //点击body弹出层
    $("body").on("tap", function() {
        oPopwin.fadeIn(500);

        //Shaking animate
        setTimeout(function() {
            oDownload.addClass("shake");
        }, 1500);

        return false;
    });

    //下载按钮点击
    oDownload.on("tap", function() {
        window.location = "http://www.baidu.com/";
    });

});
