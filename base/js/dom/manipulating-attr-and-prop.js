$(function(){
  // attr() for attribute value
  // prop() for properties (eg. checked , disable, etc..)
  // val() for element value

  // working with attr
    // retrieving attribute data
    var specialLink = $("#special-link");
    console.log(specialLink.attr("href"));
    // modifying attr value
    specialLink.attr("href","http://google.com");

  // working with prop
    // if we use attr here, this will return string (html) data everytime.
    var checkbox = $("input:checkbox");
    console.log(checkbox.prop("checked")); //this will return true or false.


  // working with val
    var textInput = $("input:text");
    console.log(textInput.val());

    var rangeInput = $("input[type='range']");
    console.log(rangeInput.val());

    // can manipulate the text also
    textInput.val("Hlaing TIn Htun");
});
