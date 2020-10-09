<?php
use framework\resources\lib\QueryBuilder;

function escOutput(string $val) {
    return htmlentities($val, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

function escInput(string $val) {
    return mysqli_real_escape_string(database() ,$val);
}

function queryBuilder() {
    return new QueryBuilder();
}