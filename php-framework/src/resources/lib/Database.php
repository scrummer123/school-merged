<?php
namespace framework\resources\lib;

use framework\resources\traits\Singleton;
use framework\resources\traits\database\MagicFunctions;

final class Database {
    use Singleton, MagicFunctions;

    private static $database = null;
    private static $databaseCredentials = null;

    /*
     * @param array self::$databaseCredentials => the array to check for all credentials;
     * @return bool => return true if all credentials are validated
     */
    private static function validateArrayKeys(array $databaseCredentials): bool {
        $required = ['host', 'user', 'password', 'db', 'port'];
        foreach($required as $key=>$requiredValue) {
            if(!array_key_exists($requiredValue, $databaseCredentials)) {
                return false;
            } else {
                if($key === 4) return true; else if($key > 4) return false;
            }
        }
    }

    public static function open() {
        $host = self::$databaseCredentials['host'];
        $user = self::$databaseCredentials['user'];
        $password = self::$databaseCredentials['password'];
        $db = self::$databaseCredentials['db'];
        $port = self::$databaseCredentials['port'];
        self::$database = mysqli_connect($host, $user, $password, $db, $port);
    }
}