$(function(){
  
  // adding click handlers
  $("#btn-click").click(function(e){
    console.log(e);
    alert("clicked");
  });

  $(".red-box").click(function(){
    $(this).fadeTo(500,0.5);
  });

});
