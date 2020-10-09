<?php
namespace framework\resources\lib;

use framework\resources\lib\RouteTable;
abstract class BaseController {
    public static function view(string $view) {
        router()->newView = $view;
    }
}