var loop = false;
var nInterval;
$(document).ready(function () {
    console.log('Estoy vivo')

    $('#evento').click(function () {
        loop = !loop
        if (!loop) {
            clearInterval(nInterval);
            $('#myBug').text("")
        } else {
            nInterval = setInterval(myBug, 50);

        }
    })

})


function myBug() {
    var result="";
    var characters = 'ABCDEFGHIJKLMNOPQRS1000fghijklmnopqrstuvwxyz0123456789';
    for (let index = 0; index < 2000; index++) {
        result += (' ' + characters.charAt(Math.floor(Math.random() * characters.length)))
    }
    $('#myBug').text(result)
}