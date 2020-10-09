<?php
namespace framework\resources\traits\queryBuilder;

use framework\resources\lib\ModelHandler;
trait MagicFunctions {
    public function __get($name)
    {
        if(ModelHandler::modelExists($name)) return $this;
        dd("Model doesn't exist (same name as database table starting with capital letter)");
    }
}