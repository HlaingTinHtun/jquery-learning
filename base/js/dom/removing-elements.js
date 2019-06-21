$(function(){
    //removing elements
    $("li").remove();
    $("form").children().not("input:text, textarea, br").remove();

    // detaching (can reappend elements not like removing)
    var detachedListItem = $("li").detach();
    $("#content").append(detachedListItem);

    // empty (empty all the child elements and also its element inside but not the tag)
    $("p:first").empty();
    $(".red-box, .green-box, .blue-box").empty();
});
