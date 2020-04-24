$(document).ready(function(){
  $(window).scroll(function(){
      if($(window).scrollTop() > $(window).height()){
          $(".site-header.sticky").css({"background-color":"transparent"});   
      }
      else{
          $(".site-header.sticky").css({"background-color":"white"});
      }

  })
})