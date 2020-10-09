<?php
use framework\resources\lib\Core;

Core::getInstance();
session_start();
require_once __DIR__."/../resources/routes/Routes.php";
require_once __DIR__."/../resources/views/{$router->newView}.php";