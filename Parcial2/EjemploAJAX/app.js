$("#boton").click(async function (e) {
  /* var req = new XMLHttpRequest();
    if (req.readyState == 4 && req.status == 200) {

    } */
  /* 
    var data = $.ajax({
      type: "GET",
      url: "./data.json",
      data: "myData",
      dataType: "json",
      success: function (response) {
        console.log(response)
      }
    });
    console.log(data) */

  /* await fetch("./data.json")
    .then((res) => res.json())
    .then((data) => console.log(data)); */

    const {nombre,apellido,edad,hobbies} = await fetch('./data.json')
    $('#nombre').html(nombre);
    $('#apellido').html(apellido);
    $('#edad').html(edad);
    $('#hobbies').html(hobbies);

});
