$(function(){

    //Replacing elements

    $("li").replaceWith("<li>Replaced.</li>");

    $("li").replaceWith(function(){
      return "<li>Replaced with function.</li>";
    });

    var firstListItem = $("li:first");
    $("p").replaceWith(firstListItem);

    $(".red-box, .blue-box").replaceWith("<div class='green-box'>More Green</div>");
    $("<div class='green-box'>More Green!</div>").replaceAll(".red-box, .blue-box");

});
