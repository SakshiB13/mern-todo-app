import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, deleteTodo, updateTodo } from '../features/todos/todoSlice';

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);
    const status = useSelector(state => state.todos.status);
    const error = useSelector(state => state.todos.error);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTodos());
        }
    }, [status, dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleToggleComplete = (todo) => {
        dispatch(updateTodo({ id: todo._id, todo: { ...todo, completed: !todo.completed } }));
    };

    if (status === 'loading') {
        return <div className="loading">Loading...</div>;
    }

    if (status === 'failed') {
        return <div className="error">{error}</div>;
    }

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo._id}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleToggleComplete(todo)}
                    />
                    <div>
                        <span className={todo.completed ? 'completed' : ''}>{todo.title}</span>
                        <p>{todo.description}</p>
                    </div>
                    <button onClick={() => handleDelete(todo._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
