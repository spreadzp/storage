// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract StorageContract {
     string private data ;

    constructor(string memory _initialData) {
        data = _initialData;
    }

    function setData(string memory _newData) public {
        data = _newData;
    }

    function getData() public view returns (string memory) {
        return data;
    }
}
