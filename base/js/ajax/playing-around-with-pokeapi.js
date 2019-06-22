$(function(){
  var pokeApi = "https://pokeapi.co/api/v2/generation/1";
  var pokemonByName = "https://pokeapi.co/api/v2/pokemon/";

  $.getJSON(pokeApi).done(function(data){
    console.log(data);

    $.each(data.pokemon_species,function(index,pokemon){
      var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      var link = $("<a>").attr("id",pokemon.name).attr("href","#").append($("<strong>").text(name));
      var par = $("<p>").html("Pokemon species no. " + (index+1) + " is ").append(link);

      link.click(function(e){
        e.preventDefault();
        $.getJSON(pokemonByName + pokemon.name).done(function(detail){
          console.log(detail);
          var pokemonDetail = $("#pokemon-detail");
          pokemonDetail.empty();
          pokemonDetail.append("<h2>" + name + "</h2>");
          pokemonDetail.append("<img src='" + detail.sprites.front_default + "'>");

        });
      });

      par.appendTo("#pokemon");
    });
  });
});
