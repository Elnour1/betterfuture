$(document).ready(function(){
    $(".search").click(function(){
     $("input").toggle();
           
});
   $(".team").hover(function(){
    $(".soicel_hid").toggle();
});
//scroll and navbar
$(window).on("scroll",function(){
    var scro = $(window).scrollTop();
    if(scro = 300){
        $(".navbar").css("position","fixed");
        $(".navbar").css("z-index","9999");
    }
});


})

         
        

   
   
