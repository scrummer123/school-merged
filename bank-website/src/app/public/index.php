<?php
    require __DIR__ . '/../../vendor/autoload.php';
    use Classes\User;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>
        <?php
            $user = new User();
            echo $user->create();
        ?>
    </h1>
</body>
</html>