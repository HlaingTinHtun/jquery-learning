$(function(){
  //passing additional data to events
  $("#btn-click").click({
    user: "hlaing",
    age: "22"
  },function(e){
    greetUser(e.data);
  });

  function greetUser(userdata){
    username = userdata.user || "anonymous";
    age = userdata.age || "unknown";

    alert("welcome back " + username +" who is "+ age + " years old "+ "!");
  }
});
