$(function(){
  var flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

  $.getJSON(flickrApiUrl,{
    //options param
    tags: "moon, beach",
    tagmode: "any",
    format: "json"
  }).done(function(data){
    //success
    console.log(data);
    $.each(data.items,function(index,value){
      console.log(value);
      $("<img>").attr("src",value.media.m).appendTo("#flickr");

      if (index == 4) { //will stop at 5th image.
        return false;
      }
    });
  }).fail(function(){
    //failure
    alert("Ajax call failed.");
  })
});
