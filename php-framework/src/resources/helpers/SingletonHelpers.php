<?php
use framework\resources\lib\Core;
use framework\resources\lib\RouteTable;
use framework\resources\lib\Database;

function router() {
    return RouteTable::getInstance();
}
global $router;
$router = router();

function database() {
    return Database::getInstance()->connection;
}