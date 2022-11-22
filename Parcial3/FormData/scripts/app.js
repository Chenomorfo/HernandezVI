const findUser = `
<form id="findForm" action="#" class="RegisterPokemon">
<div id="id">
  <label for="idInput">ID</label><br />
  <input name="id" id="idInput" type="text" />
</div>
<div id="name">
  <label for="nameInput">Nombre</label><br />
  <input name="name" id="nameInput" type="text" />
</div>
<div id="type1">
  <label for="type1Input">Type 1</label><br />
  <input name="type1" id="type1Input" type="text" />
</div>
<div id="type2">
  <label for="type2Input">Type 2</label><br />
  <input name="type2" id="type2Input" type="text" />
</div>
<div id="region">
  <label for="regionInput">Region</label><br />
  <input name="region" id="regionInput" type="text" />
</div>

  <div id="picture">
    <label for="pictureInput">Image</label><br />
    <input name="pic" id="pictureInput" type="text" />
  </div>
<div class="buttons">
  <button id="findBtn" type="button">FIND</button>
</div>
</form>

<div id="Pics" class="Pics">
<img
  id="principal"
  src=""
  alt=""
/>
</div>
`;

const registerUser = `
<form id="regForm" class="RegisterPokemon">
<div id="id">
  <label for="idInput">ID</label><br />
  <input name="id" id="idInput" type="text" />
</div>
<div id="name">
  <label for="nameInput">Nombre</label><br />
  <input name="name" id="nameInput" type="text" />
</div>
<div id="type1">
  <label for="type1Input">Type 1</label><br />
  <input name="type1" id="type1Input" type="text" />
</div>
<div id="type2">
  <label for="type2Input">Type 2</label><br />
  <input name="type2" id="type2Input" type="text" />
</div>
<div id="region">
  <label for="regionInput">Region</label><br />
  <input name="region" id="regionInput" type="text" />
</div>

  <div id="picture">
    <label for="pictureInput">Image</label><br />
    <input name="pic" id="pictureInput" type="text" />
  </div>

<div class="buttons">
  <button type="button" id="submitBtn">Register</button>
</div>
</form>

<div id="Pics" class="Pics">
<img
  id="principal"
  src=""
  alt=""
/>
<button id="picUrl">Preview Image</button>
</div>`;


const userDiv = document.getElementById("userDiv");

const reg = document.getElementById("reg");
const all = document.getElementById("all");
const find = document.getElementById("find");

find.addEventListener("click", () => {
  userDiv.innerHTML = findUser;
  const findBtn = document.getElementById("findBtn");

  findBtn.addEventListener("click", async () => {
    var formData = new FormData(document.getElementById("findForm"));
    var query = await fetch("./php/find.php", {
      method: "POST",
      body: formData,
    });

    var json = await query.json();
    document.getElementById("idInput").value = json[0][0]
    document.getElementById("nameInput").value =json[0][1]
    document.getElementById("type1Input").value =json[0][3]
    document.getElementById("type2Input").value =json[0][4]
    document.getElementById("regionInput").value =json[0][2]
    document.getElementById("pictureInput").value =json[0][5]
    document.getElementById("principal").src =json[0][5]
  });
});

//register Section
reg.addEventListener("click", () => {
  userDiv.innerHTML = registerUser;
  const submitBtn = document.getElementById("submitBtn");
  const prevImg = document.getElementById("picUrl");

  prevImg.addEventListener("click", () => {
    document.getElementById("principal").src =
      document.getElementById("pictureInput").value;
  });

  submitBtn.addEventListener("click", async () => {
    var formData = new FormData(document.getElementById("regForm"));
    await fetch("./php/register.php", {
      method: "POST",
      body: formData,
    });

    location.reload();

  });
});

all.addEventListener("click", async () => {
  var cards = "";

  var query = await fetch("./php/all.php");

  var json = await query.json();

  json.forEach((item) => {
    var card = `<div class="card">
    <img src="${item[2]}" alt="">
    <h3>#${item[0]} - ${item[1]}</h3>
  </div>`;

    cards += card;
  });

  var allUsers = `
<div id="allUsers" class="allUsers">
${cards}
</div>
`;

  userDiv.innerHTML = allUsers;
});

//animation: zoom 0.5s alternate;
