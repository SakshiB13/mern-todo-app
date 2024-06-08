import React from 'react';
import TodoList from './components/todoList';
import AddTodo from './components/addTodo';

const App = () => {
    return (
        <div>
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
        </div>
    );
};

export default App;
