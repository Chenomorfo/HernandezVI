$(document).ready(async function () {
  await fetch("./conn.php");

  setTimeout(async () => {
    const query = await fetch("./query.php");

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


    $("#jsGrid").jsGrid({
      width: "100%",
      height: "600px",
  
      inserting: true,
      editing: true,
      sorting: true,
      paging: true,
  
      data: List,
  
      fields: [
        { name: "Name", type: "text", width: 150},
        { name: "ID", type: "number", width: 50 },
       
      ],
    });


  }, 1000);


});
