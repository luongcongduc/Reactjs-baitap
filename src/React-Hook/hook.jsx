import React,{ useState } from 'react'
import Form from './reactHook'

export const StatelessComponent = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    }
    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }
    return (
        <div>
            <Form addTodo={addTodo} />
            <div>
                {todos.map((todo, index) => (
                        <div key={index} onClick={() => deleteTodo(index)}>
                            <span>{text}</span>
                        </div>
                ))}
            </div>
        </div>
    )
}
