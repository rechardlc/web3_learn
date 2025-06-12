// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
    struct Todo {
        string text;
        bool completed;
    }
// 结构体：描述事物，类似于golang的struct,也像javascript的class
contract Struct {

    Todo[] public todos;
    // 创建todo
    function create(string memory _text) public {
        // 方式1通过对象方式push，可以不按照顺序注入
        todos.push(Todo({
            text: _text,  // text的数据是string类型
            completed: false
        }));
        // 方式2 类似函数接受参数方式，必须保持与结构体声明顺序传入
        todos.push(Todo("call is like function", true));
        // 方式3 声明一个临时变量
        Todo memory todo;
        todo.text = "define a temporary variable";
        todos.push(todo);

    }
    function update(uint _index, string memory _text) public {
        todos[_index].text = _text;
    }
}