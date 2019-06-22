$(function(){
  // changing events
  $("#checkbox").change(function(){
    var isChecked = $(this).is(":checked"); //can use .prop("checked") as an alternative
    if (isChecked) {
      $(this).add("label[for='cb']").css("box-shadow","0 0 4px #181");
    }else{
      $(this).add("label[for='cb']").css("box-shadow","0 0 4px #811");
    }
  });

  $(".select").change(function(){
    var selectedOption = $(this).find(":selected").text();
    alert(selectedOption);
  })
});
