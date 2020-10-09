<?php
namespace framework\resources\traits;

trait Singleton {
    private static $instance;

    public final static function getInstance(): self {
        if(!self::$instance) self::$instance = new self();
        return self::$instance;
    }
}