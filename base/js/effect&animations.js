$(function() {
  // sample codes of sliding elements up & down
  $(".blue-box").slideUp(2000);
  $(".blue-box").slideDown(2000);
  $("p").hide();
  $("p").slideDown(1000);

  // sample codes of Moving elements
  $(".blue-box").animate({
    "margin-left": "+=200px"
  }, 1000,"linear");

  // sample codes of creative custom animations
  $(".blue-box").animate({
    marginLeft: "200px",
    opacity: "0",
    height: "50px",
    width: "50px",
    marginTop: "25px"
  }, 1000);

  $("p").animate({
    "font-size": "20px"
  }, 1000)

  // sample codes of delaying & chaining animations
  $(".red-box").fadeTo(1000,0.2);
  $(".green-box").delay(1000).fadeTo(1000,0.5);
  $(".blue-box").fadeTo(1000).fadeTo(1000,0.8).fadeOut().delay(500).fadeIn();

  // sample codes of timing animations using callbacks
  $(".red-box").fadeTo(1000,0,function(){
    $(".green-box").fadeTo(1000,0,function(){
      $(".blue-box").fadeTo(1000,0);
    });
  });
});
