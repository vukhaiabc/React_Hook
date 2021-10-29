import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const [todoList,setTodoList] = useState([
        { id: 1, title: 'I love Easy Frontend! 😍 ' },
        { id: 2, title: 'We love Easy Frontend! 🥰 ' },
        { id: 3, title: 'Quang Khai PTIT ! 🚀 ' },
        ])
      function handleToDoClick(todo){
        const indexTodo = todoList.findIndex(item => item.id === todo.id)
        if(indexTodo < 0) {
          return;
        }
        const newTodoList = [...todoList]
        newTodoList.splice(indexTodo,1)
        setTodoList(newTodoList)
      }
      function handleFormSubmit(formValues){
        const newTodoList = [...todoList]
        const newTodo = {
          id: todoList.length + 1,
          ...formValues
        }
        newTodoList.push(newTodo)
        setTodoList(newTodoList)
      }
    return (
        <div>
            <h2>Todos List : </h2> 
            <TodoForm onSubmit={handleFormSubmit} />
            <TodoList todos={todoList} onTodoClick={handleToDoClick} />
        </div>
    );
}

export default TodoFeature;