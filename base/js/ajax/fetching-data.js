$(function(){
  // fetching data
  $("#code").load("js/script.js");

  $("#code").load("dontexist.php",function(response,status){
    if (status == "error") {
      alert("could not find dontexist.php file");
    }
    console.log(response);
  });
});
