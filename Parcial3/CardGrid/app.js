var cardList = document.getElementById("CardList");
var cards = "";

genCard();

async function genCard() 
{
  const query = await fetch("./php/query.php");
  
  setTimeout(async () => {
    

    const data = await query.json();
    
    var List = [];

    for (let i = 0; i < data.length; i++) {

      object = {
        ID:data[i][0],
        Name:data[i][1],
        Pic:data[i][2],
      }
      List.push(object);
    }

    for (let i = 0; i < List.length; i++) {
      let card = `
      <div class="Card">
              <img class="Portrait" src="${List[i].Pic}" alt="A DESCRIPTION OF AN IMAGE">
              <h3 class="Title">${List[i].Name}</h3>
          </div>
          `;
      
          cards += card;
      
    }

  cardList.innerHTML = cards;

  },1000)


}
