$("#boton").click(function (e) { 
    var soli = new XMLHttpRequest();
    soli.onload = ()=>{
        $("#hora").val(soli.responseText);
    }
    soli.open('GET','sleep.php',true)
    soli.send();
    
});