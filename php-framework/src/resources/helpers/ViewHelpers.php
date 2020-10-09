<?php
use framework\resources\lib\RequestHandler;
use framework\resources\lib\RouteHandler;

function route(string $route, array $urlData = null) {
    echo RouteHandler::getRoute($route);
}

function request() {
    return new RequestHandler();
}