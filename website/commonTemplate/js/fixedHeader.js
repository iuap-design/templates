/**
 * Created by Administrator on 2016/9/6.
 */
$(document).ready(function () {
   var oheaderHeight=parseFloat($(".header").css("height"));
   var ocontainerHeight=parseFloat($(".container").css("height"));
   var ofooterHeight=parseFloat($(".footer").css("height"));
   var containerPaddingHeight=parseFloat($(".container").css("paddingTop"));
   var clientHeight=$(window).height();
   var showContentHeight=clientHeight-oheaderHeight-ofooterHeight+containerPaddingHeight;

   if(ocontainerHeight<showContentHeight) {
     if(ocontainerHeight==50){
       $(".container").css("height",showContentHeight+"px");
     }else{
       $(".container").css("height",ocontainerHeight+"px");
     }

     $(".footer").addClass("footerFixd");
   }
});
