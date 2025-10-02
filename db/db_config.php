<?php
    $db_name = "test";
    $db_user = "root";
    $db_password = "";
    $db_host = "localhost";

    $connect = new mysqli($db_host, $db_user, $db_password, $db_name);

    if ($connect->connect_error) {
        die('Connection error: ' . $connect->connect_error);
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connessione DB</title>
</head>
<body>
    <?php echo "Connessione al database riuscita!"; ?>
</body>
</html>
