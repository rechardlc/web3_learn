// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract StusInfo {
    struct Student {
        string name;
        uint age;
        string gender;
        uint score;
        string id;
    }
    
    // 定义一个数组，用于存储学生
    Student[] public students;
    // 定义一个修饰器，用于验证姓名是否为空
    modifier verifyName(string memory _name) {
        // solidity 语法中，判断字符串非空状态，需要转化为bytes类型，通过长度来判断
        require(bytes(_name).length > 0, "Name is required");
        _;
    }

    // 定义一个函数，用于添加学生
    function addStudent(string calldata _name, uint _age, string calldata _gender, uint _score) public verifyName(_name) {
        // abi.encodePacked 函数用于将多个参数打包成一个字节数组
        string memory _id = string(abi.encodePacked(_name, _age, _gender, _score));
        students.push(Student({
            name: _name,
            age: _age,
            gender: _gender,
            score: _score,
            id: _id
        }));
    }
    // 定义一个函数，用于获取学生
    function getStudent(uint _id) public view returns (string memory, uint, string memory, uint, string memory) {
        // 返回值类型为tuple，需要使用return关键字返回
        return (students[_id].name, students[_id].age, students[_id].gender, students[_id].score, students[_id].id);
    }
}