<?php
namespace framework\resources\lib;
// Traits
use framework\resources\traits\Singleton;
use framework\resources\traits\modelHandler\MagicFunctions;

final class ModelHandler {
    use Singleton, MagicFunctions;

    public static $type;
    public static $modelNamespace;
    public static $modelDatabaseName;
    public static array $columns;
    public static array $newValues;
    public static string $updateColumn;
    public static $updateColumnValue;

    /*
     * @param $name => check if this string exists in the models folder
     * @return => true if the model exists, else return false
     * */
    public static function modelExists(string $name) {
        self::$modelDatabaseName = $name;
        $capatalizedName = ucfirst($name);
        $model = "framework\\resources\\models\\${capatalizedName}";
        // Check if model exists
        if(!class_exists($model)) return false;
        // If it exists, save an instance to query on
        self::$modelNamespace = new $model();
        $databaseName = getenv("DB_DATABASE");
        // Database table name is always decapatalized.
        $cols = database()->query("SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '${name}' AND TABLE_SCHEMA = '${databaseName}'");
        $i = 0;
        while($col = $cols->fetch_row()) {
            if($col[0] !== "id") self::$columns[$i] = $col[0];
            $i++;
        }
        return true;
    }

    /*
     * save to database, forget row info so data is less likely to be accessed
     * */
    public function save() {
        if(self::$type === "create") self::saveRow();
        if(self::$type === "update") self::updateRow();
        self::$instance = null;
    }

    private static function saveRow() {
        $columns = implode(", ", self::$columns);
        ksort(self::$newValues);
        $newValues = implode(", ", self::$newValues);
        $sql = "INSERT INTO ". self::$modelDatabaseName ."($columns) VALUES($newValues)";
        if(database()->query($sql)) {
            return "Query succeeded";
        } else {
            dd(database()->error);
        }
    }

    private static function updateRow() {
        // Preparing query setters (new column values)
        $setters = "";
        $first = false;
        foreach(self::$columns as $key=>$column) {
            $newValue = self::$newValues[$key];
            if($first === false) {
                $setters .= "SET $column=$newValue";
                $first = true;
            } else $setters .= ", $column=$newValue";
        }
        database()->query("UPDATE ". self::$modelDatabaseName . " " . $setters . " WHERE " . self::$updateColumn . " = " . self::$updateColumnValue);
    }

    /*
     * @param $name => column name in database
     * @param
     * */
    private static function generateRow(string $name, $value) {
        if(in_array($name, self::$columns)) {
            $key = array_search($name, self::$columns);
            if(is_string($value)) {
                self::$newValues[$key] = "'${value}'";
            } else self::$newValues[$key] = $value;
        }
    }

    /*
     * @param $column => Check in database if the column is unique
     * */
    public static function isUnique(string $column) {
        $res = database()->query("SELECT COUNT(*)
            FROM `INFORMATION_SCHEMA`.`COLUMNS`
            WHERE `TABLE_SCHEMA`='framework'
                AND `TABLE_NAME`='users'
                AND `COLUMN_KEY` IN ('UNI', 'PRI')
                AND `COLUMN_NAME`='$column';");
        return $res->fetch_row()[0];
    }

    public static function setUpdateRow(string $column, $value) {
        if(is_string($value)) $value = "'$value'";
        $row = database()->query("SELECT $column FROM " . self::$modelDatabaseName . " WHERE $column=$value");
        self::$updateColumn = $column;
        $rowValue = $row->fetch_row()[0];
        self::$updateColumnValue = is_numeric($rowValue) ? $rowValue : "'$rowValue'";
        return self::getInstance();
    }
}