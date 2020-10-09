<?php
namespace framework\resources\controllers;

use framework\resources\lib\BaseController as BC;
class HomeController extends BC {
    public function show() {
        $user = queryBuilder()->users->create();
        $user->email = "simon@mail.comadfggadf";
        $user->password = "dsoifajnadfsgadfsg";
        $user->username = "asdf[jhoiiojakosdfjnoks";
        $user->save();

        BC::view('home');
    }
    public function showfake() {
        $user = queryBuilder()->users->update()->findOne("id", 1);
        $user->password = "test";
        $user->email = "test";
        $user->username = "test123";
        $user->save();

        BC::view('home2');
    }
}