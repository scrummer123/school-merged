<?php
    include("../processing/dblink.php");

    $stmtNum    = $conn->prepare("SELECT * FROM personeel WHERE Personeelsnummer = :num");
    $stmtNum->bindParam(":num", $num);
    $num        = $_GET["personeelsnummer"];
    $stmtNum->execute();

    if($stmtNum->rowCount() == 1) {
        while ($row = $stmtNum->fetch(PDO::FETCH_BOTH)) {
            if($row[0] == $num) {
                session_start();
                $_SESSION["voorletter"]     = utf8_encode($row[1]);
                $_SESSION["voegsel"]    	= utf8_encode($row[2]);
                $_SESSION["achternaam"]     = utf8_encode($row[3]);
                header("location: ../index.php");
            } else {
                header("location: ../index.php?msg=incorrect");
            }
        }
    } else {
        header("location: ../index.php?msg=incorrect");
    }    
?>