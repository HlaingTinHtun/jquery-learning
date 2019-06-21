$(function(){
  
  // adding elements in last
  $("ul ul:first").append("<li>last sub-item of first ul tag</li>")
  $("<li>i m gonna be the last item</li>").appendTo("ul ul:first");

  // adding elements in first
  $("ul ul").prepend("<li>first sub-item of first ul tag</li>")
  $("<li>i m gonna be the first item</li>").prependTo("ul ul:first");
  $("<h4>hlaing</h4>").prependTo("#content");

  // adding sibling elements
  $(".red-box").after("<div class='red-box'> Another Red </div>");
  $(".blue-box").before("<div class='blue-box'> Another blue </div>");

    // passing as a function
    $(".blue-box").before(function(){
      return "<div class='blue-box'>Blue box </div>"
    });

  //moving elements right away with own jquery
  $(".blue-box").before($(".red-box"));



});
