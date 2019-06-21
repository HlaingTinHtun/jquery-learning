$(function(){

  //adding or removing css classes.
  $("a").addClass("fancy-link");
  $("p:first").addClass("large emphasize");

  $("li li").addClass(function(index){
    $(this).addClass("item-" + index);
  });

  $("div").addClass(function(index, currentClass){
    if (currentClass === "blue-box") { //only add for the blue-box class
      return "red-box";
    }
  });

  $(".red-box").removeClass("red-box").addClass("blue-box"); //removing and adding class
  
});
