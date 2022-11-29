var cardList = document.getElementById("CardList");
var List = "";

genCard();

function genCard() {
    
} {
  let card = `
<div class="Card">
        <h3 class="Title">TITLE</h3>
        <img class="Portrait" src="" alt="A DESCRIPTION OF AN IMAGE">
        <h4 class="Description">DESCRIPTION</h4>
    </div>
    `;

  for (let i = 0; i < 10; i++) {
    List += card;
  }
  cardList.innerHTML = List
};
