$(function(){
  //normal events
  // $("p").click(function(){
  //   $(this).slideUp();
  // });
  // $("#content").append("<p>dynamically added paragraph</p>");

  //delegated events
  $("#content").on("click", "p", function(){
    $(this).slideUp();
  });
  $("#content").append("<p>dynamically added paragraph</p>")

  $("body").on("mouseenter","li",function(){
    $(this).css("color","red");
  })
});
