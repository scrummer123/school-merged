<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1fd812a30a5a7d5d0315e0a6f3f6b11a
{
    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Classes\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Classes\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app/classes',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit1fd812a30a5a7d5d0315e0a6f3f6b11a::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit1fd812a30a5a7d5d0315e0a6f3f6b11a::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}