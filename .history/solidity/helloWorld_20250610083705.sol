pragma solidity ^0.8.0;

contract HelloWorld {
    function helloWorld() public pure returns (string memory) {
        return "Hello World";
    }
}

HelloWorld helloWorld = new HelloWorld();

function helloWorld() public pure returns (string memory) {
    return helloWorld.helloWorld();
}