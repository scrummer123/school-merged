<?php
namespace framework\resources\lib;

use framework\resources\traits\Singleton;

final class Core {
    use Singleton;

    public function __construct()
    {
        // Everything constructs from the BaseRouter
        BaseRouter::getInstance();
        RouteTable::getInstance();
        Database::getInstance();
    }

    public function __get($name)
    {
        if($name === "baseRouter") return BaseRouter::getInstance();
        if($name === "router") return RouteTable::getInstance();
        if($name === "database") return Database::getInstance();
    }
}