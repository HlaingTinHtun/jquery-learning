$(function(){
  //handling the submit event
  $("#form").submit(function(e){
    var textarea = $("#message");
    if (textarea.val().trim() == "") {
      textarea.css("box-shadow","0 0 4px #811");
      e.preventDefault();
    }else{
      // form will be submitted
    }
  })
});
