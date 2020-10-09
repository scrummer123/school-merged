<?php
namespace framework\resources\traits\routeTable;


trait MagicFunctions {
    public function __get($name) {
        if($name === "getRoutes") return self::$routes;
        if($name === "newView") return self::$newView !== null ? self::$newView : "home";
        if($name === "execRoute") return self::$newView;
    }

    public function __set($name, $value)
    {
        if($name === "newView") self::$newView = $value; require_once __DIR__."/../../bootstrap.php";
    }

    public function __call($name, $args) {
        if($name === "isStored") if(self::$routes[$args[0]] !== null) return true; else return false;
    }

    public static function __callStatic($name, $args) {
        if($name === "getUrlVariable") if (preg_match("/{(.*?)}/", $args[0], $match) === 1) return $match[1];
    }
}