<?php
namespace framework\resources\lib;

use framework\resources\traits\Singleton;
use framework\resources\traits\routeTable\MagicFunctions;
final class RouteTable {
    use Singleton, MagicFunctions;

    // Needed for saving / executing routes
    private static $controllerNamespace = "framework\\resources\\controllers\\";

    private static array $routes = [];
    private static $newView = null;
    private static $execRoute = null;
    private static array $callableVariables;

    public static function storeRoute(string $routeUrl, string $controllerFunction): void {
        $controllerFunction = explode("@", $controllerFunction);
        $namespace = self::$controllerNamespace;
        self::$routes[$routeUrl] = [
            "controller" => "{$namespace}{$controllerFunction[0]}",
            "function" => "$controllerFunction[1]"
        ];
    }

    public function execRoute(string $url): void {
        $route = self::$routes[$url];
        $controller = new $route["controller"]();
        $function = $route["function"];
        $controller->$function();
    }

    public static function attachNameToRoute(string $name) {
        $route = end(self::$routes);
        $routeUrl = array_key_last(self::$routes);
        array_pop(self::$routes);
        $route["name"] = $name;
        self::$routes[$routeUrl] = $route;
    }

    public static function getRoute(string $nameOrUrl) {
        // Url value is found, send back with url
        if(array_key_exists($nameOrUrl, self::$routes)) return $nameOrUrl;
        foreach (self::$routes as $key=>$route) {
            // Return route key (the actual url)
            if($route["name"] === $nameOrUrl) return $key;
        }
    }
}