<?php
namespace framework\resources\traits\modelHandler;

trait MagicFunctions {
    public function __set($name, $value)
    {
        if(self::$type === "create" || self::$type === "update") self::generateRow($name, $value);
        if($name === "type") self::$type = $value;
        if(self::$type === "update") return self::getInstance();
    }

    public function __get($name)
    {
        if($name === "type") return self::$type;
    }
}