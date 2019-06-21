$(function(){

  //adding hover handlers
  $("#btn-hover").hover(function(){
    alert("hovered.");
  });

  $(".green-box").hover(function(){
    $(this).text("I was hovered")
  });
});
