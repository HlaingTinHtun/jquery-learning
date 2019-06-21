$(function(){
  // keypress() - not too good for some concerns like cross browser and complex user inputs
  $("html").keydown(function(e){
    console.log(e.which); //reading the key code
  });

  var arrowRight = 39;
  $("html").keydown(function(e){
    if (e.which == arrowRight) {
      $(".blue-box").stop().animate({
        marginLeft: "+=10px"
      },50);
    }
  })

});
