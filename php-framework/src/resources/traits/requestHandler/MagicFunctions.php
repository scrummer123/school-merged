<?php
namespace framework\resources\traits\requestHandler;

trait MagicFunctions {
    public function __get($name)
    {
        if($_GET[$name] !== null) echo escOutput($_GET[$name]);
    }
}