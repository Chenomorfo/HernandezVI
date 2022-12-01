<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <?php

    if (isset($_COOKIE["SendingCookie"])) {
        echo "Updating cookie";
        setcookie("SendingCookie", date("m.d.y"), time() + 3600);
    } else {
        setcookie('SendingCookie', date('m.d.y'));
        echo "Cookie created";
    }
    ?>


</body>

</html>