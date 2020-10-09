<?php
namespace framework\resources\traits\database;

trait MagicFunctions {
    /*
     * New database connection being made from env file DB variables
     * */
    private function __construct()
    {
        self::$databaseCredentials = [
            'host' => getenv('DB_HOST'),
            'user' => getenv('DB_USER'),
            'password' => getenv('DB_PASSWORD'),
            'db' => getenv('DB_DATABASE'),
            'port' => getenv('DB_PORT')
        ];

        if(self::validateArrayKeys(self::$databaseCredentials)) {
            $host = self::$databaseCredentials['host'];
            $user = self::$databaseCredentials['user'];
            $password = self::$databaseCredentials['password'];
            $db = self::$databaseCredentials['db'];
            $port = self::$databaseCredentials['port'];
            self::$database = mysqli_connect($host, $user, $password, $db, $port);
        } else {
            throw dd('No database set up yet! Please do so in the env file...');
        }
    }

    public function __get($name)
    {
        if($name === "connection") return self::$database;
    }
}