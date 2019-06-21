$(function(){

  //adding hover handlers
  $("#btn-hover").hover(function(){
    alert("hovered.");
  });

  $(".green-box").hover(function(){
    $(this).text("I was hovered")
  });

  // controlling with mouseenter & mouseleave
  var blueBox = $(".blue-box");
  blueBox.mouseenter(function(){
    $(this).stop().fadeTo(500,0.7);
  });
  blueBox.mouseleave(function(){
    $(this).stop().fadeTo(500,1);
  });

  //hover (hanlderIn, handlerOut) //shorthand for mouseenter and leave
  blueBox.hover(function(){
    $(this).stop().fadeTo(500,0.7);
  },function(){
    $(this).stop().fadeTo(500,1);
  });

  //same handler for multiple events
  $("html").on("click keydown",function(){
    console.log("moues was clicked or key was pressed");
  });
  
});
