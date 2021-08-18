$(".myImg").click(function(){
    var imgSrc = $(this).attr("src");
    $("#showImg").attr("src",imgSrc);
});