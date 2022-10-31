cardCol = document.querySelectorAll(".col-md-4");

$("#findBar").keypress(function (e) { 
  var findPokemons = [];
  pokedex.forEach((pokemon) => {
    if (pokemon.name.includes($("#findBar").val())) {
      
      findPokemons.push(pokemon);
    }
  });
  cardCol[0].innerHTML = "";
  cardCol[1].innerHTML = "";
  cardCol[2].innerHTML = "";
  nCol = 0;
  for (let i = 0; i < findPokemons.length; i++) {
    createCard(findPokemons[i]);
    nCol++;
    if (nCol > 2) {
      nCol = 0;
    }
  }
  
});


myFetch();
var nCol = 0;

function createCard(pokemon) {
  var card = document.createElement("div");
  var title = document.createElement("h3");
  var img = document.createElement("img");
  card.classList.add("card");
  title.classList.add("card-header");
  title.innerHTML = pokemon.name;
  img.src = pokemon.img;
  card.appendChild(title);
  card.appendChild(img);
  cardCol[nCol].appendChild(card);
}
var pokedex;

async function myFetch() {
  pokedex = await (await fetch("./pokedex.json")).json();
  for (let i = 0; i < pokedex.length; i++) {
    createCard(pokedex[i]);
    nCol++;
    if (nCol > 2) {
      nCol = 0;
    }
  }
}
