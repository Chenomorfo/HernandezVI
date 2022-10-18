var hide = true;
$('#actionB').click(function (e) { 
    hide = !hide;

    if (hide) {
        $('#sideBar').css('left','-13%');
    }else{
        $('#sideBar').css('left','0');
        
    }
});