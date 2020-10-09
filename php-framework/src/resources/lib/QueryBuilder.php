<?php
namespace framework\resources\lib;
// Classes
use framework\resources\lib\Database;
use framework\resources\lib\ModelHandler;
// Traits
use framework\resources\traits\queryBuilder\MagicFunctions;

final class QueryBuilder {
    use MagicFunctions;
    private ModelHandler $modelHandler;

    public function __construct() {
        // Save modelhandler instance
        $this->modelHandler = ModelHandler::getInstance();
    }

    /*
     * @return => modelhandler, user is now able to change values in the class
     * */
    public function create() {
        $this->modelHandler->type = "create";
        return $this->modelHandler;
    }

    /*
     * @return $this, before updating a record, it needs to be found first (see findOne())
     * */
    public function update() {
        $this->modelHandler->type = "update";
        return $this;
    }

    /*
     * @return $this, before deleting a record, it needs to be found first (see findOne())
     * */
    public function delete() {
        $this->modelHandler->type = "delete";
        return $this;
    }

    /*
     * @param $column => column to search for in database
     *
     * @param $value => value in database to find in column $column
     *
     * @return 1 => instantly fetch result if no type is set
     * @return 2 => get row in database ready to update with setters (see class ModelHandler __set())
     * @return 3 => instantly delete row
     * */
    public function findOne(string $column, $value) {
        if($this->modelHandler->type === "create") throw dd("Can't find a record which hasn't been made yet!");
        // User want to find one record, so the column must be unique...
        if(!$this->modelHandler::isUnique($column)) throw dd("Column not unique (findOne clause)");
        // User doesn't want to change something in the DB, fetch the user and return it
        if(!$this->modelHandler->type) return $this->modelHandler::fetchModelRow($column, $value);
        // User requests to update, prepare the model to be updated
        if($this->modelHandler->type === "update") return $this->modelHandler::setUpdateRow($column, $value);
        // User requests to delete, just delete the database record
        if($this->modelHandler->type === "delete") return $this->modelHandler::deleteRow($column, $value);
    }
}