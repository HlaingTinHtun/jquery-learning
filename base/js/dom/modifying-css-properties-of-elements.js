$(function(){
  //modifying css properties of elements

    // $("p").css("display","none"); //.hide()

    var redBox = $(".red-box");
    console.log(redBox.css("width"));
    console.log(redBox.width());

    redBox.css("background-color","orange");
    $("p").css("font-size","18px");
    redBox.css("width","+=20px");

    var properties = $("p").css(["font-size","line-height","color"]);
    console.log(properties);

    redBox.css("user-select","none"); // make disable to select
    
    //same with direct value in above.
    redBox.css("user-select",function(){
      return "none";
    });


});
