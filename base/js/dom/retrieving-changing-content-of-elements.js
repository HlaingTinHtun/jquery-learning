$(function(){

  //retrieving data
  var firstPar = $("p:first");
  console.log(firstPar.text());
  console.log(firstPar.html());
  console.log($("p").html());

  firstPar.text("<strong>hello everyone</strong>"); // will not effect as html
  firstPar.html("<strong>hello everyone</strong>"); // this will work as html


});
