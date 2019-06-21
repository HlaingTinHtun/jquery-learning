$(function(){
  //modularizing the handlers - just for complex codes
  function logEvent(){
    console.log("moues was clicked or key was pressed");
  }

  $("html").on("click keydown",logEvent);

});
