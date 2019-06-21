$(function() {
  // sample codes of css selectors
  $("p").css("background-color","rgba(180,180,30,0.8)");
  $(".red-box").css("background-color","rgba(180,180,30,0.8)");

  // sample codes for method of traversal
  $("#list").find("li").css("background-color","rgba(180,180,30,0.8)");
  $("#list").children("li").css("background-color","rgba(180,180,30,0.8)");
  $("#list").parents("body").css("background-color","rgba(180,180,30,0.8)");
  $("#list").parent().css("background-color","rgba(180,180,30,0.8)");
  $("#list").siblings(":header").css("background-color","rgba(180,180,30,0.8)");
  $("#list").prev().css("background-color","rgba(180,180,30,0.8)");
  $("#list").next().css("background-color","rgba(180,180,30,0.8)");

    // sample codes for method of filterings
    $("#list").children("li").filter(":even").css("background-color","rgba(180,180,30,0.8)");

    $("li").filter(function(index){
      return index % 3 === 2;
    }).css("background-color","rgba(180,180,30,0.8)");

    $("li").eq(4).css("background-color","rgba(180,180,30,0.8)");
    $("li").eq(-2).css("background-color","rgba(180,180,30,0.8)");

    $("li").first().css("background-color","rgba(180,180,30,0.8)");
    $("li").last().css("background-color","rgba(180,180,30,0.8)");

    $("li").not(function(index){
      return index % 3 === 2;
    }).css("background-color","rgba(180,180,30,0.8)");
});
