<?php
namespace Classes;
use Classes\Simon\Greet;

class User extends Greet {
    private $firstname;
    private $lastname;
    private $password;
    private $email;
    private $phone;

    public function create() {
        $greet = new Greet();
        $hello = $greet->hello();
        return $hello;
    }
}