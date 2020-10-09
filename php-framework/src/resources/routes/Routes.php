<?php
use framework\resources\lib\BaseRouter as Route;

Route::get('home', 'HomeController@show')->name("home");
Route::get('home2', 'HomeController@showfake')->name("fakehome");