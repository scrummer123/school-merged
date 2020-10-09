<?php
namespace framework\resources\lib;

use framework\resources\lib\RouteTable;
class RouteHandler
{
    public static function getRoute(string $route): string {
        return RouteTable::getRoute($route);
    }

    public function name(string $routeName): void {
        $routeTable = RouteTable::getInstance();
        $routeTable::attachNameToRoute($routeName);
    }
}