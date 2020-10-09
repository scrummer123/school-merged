<?php
namespace framework\resources\lib;

use framework\resources\traits\requestHandler\MagicFunctions;
class RequestHandler
{
    use MagicFunctions;

    public function session(string $selectedData = "test.data") {
        dd("not functioning");
        if($selectedData === null) return new $this();
        $_SESSION["test"] = [
            "test" => "bami"
        ];
        $selected = explode(".", $selectedData);
        $session = "_SESSION[\"appel\"]";
        return $this->recursiveArraySearch(end($selected), $session);
    }

    public function set() {
        dd("not functioning");
    }

    private function recursiveArraySearch(string $needle, array $haystack)
    {
        foreach ($haystack as $key => $value) {
            if ($key === $needle) {
                return $value;
            } elseif (is_array($value)) {
                $check = $this->recursiveArraySearch($needle, $value);
                if($check)
                    return $check;
            }
        }
        return false;
    }
}