$(function(){

  //changing the data of an element
  var boxes = $(".box");
  var boxData = [
    "redBox",
    "greenBox",
    "blueBox",
  ];

  boxes.data("availableBoxes",boxData);
  console.log(boxes.data("availableBoxes"));

  boxes.data("newBox","greyBox");
  console.log(boxes.data());

  //can remove the data back also
  boxes.removeData("newBox");
  console.log(boxes.data());

  // calling the build-in data inside html
  var par = $("p:first");
  console.log(par.data("param"));

});
