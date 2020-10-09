<?php
namespace framework\resources\lib;

use framework\resources\traits\Singleton;
use framework\resources\lib\RouteHandler;
final class BaseRouter {
    use Singleton;

    /*
     * @return controller function
     * */
    public static function get(string $url, string $controllerFunction) {
        $method = $_SERVER['REQUEST_METHOD'];
        if($method !== 'GET') throw dd("Used a wrong method");
        if(!router()->isStored($url)) router()->storeRoute($url, $controllerFunction);
        $route = router()::getRoute($url);
        if($url === $_GET['url']) router()->execRoute($route);
        return new RouteHandler();
    }

    public static function post(string $url, string $controllerFunction) {
        $method = $_SERVER["REQUEST_METHOD"];
        if($method !== "POST") throw dd("Used a wrong method");
        if(!router()->isStored($url)) router()->storeRoute($url, $controllerFunction);
        $route = router()::getRoute($url);
        if($url === $_GET['url'] && self::$instance !== null) router()->execRoute($route);
        return new RouteHandler();
    }
}