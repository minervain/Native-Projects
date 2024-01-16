import React, { useState } from 'react'
import { Todo } from './Type';

// interface Todo {
//     id: number;
//     text: string;
// }



const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [newTodo, setNewTodo] = useState<string>('')

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            const newTodoItem: Todo = {
                id: todos.length + 1,
                text: newTodo,
            }

            setTodos([...todos, newTodoItem])
            setNewTodo('')
        }
    }

    const deletTodo = (id: number) => {
        const updateTodos = todos.filter(todo => todo.id !== id);
        setTodos(updateTodos)
    }
    return (
        <div>
            <div>
                <div><input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder='Yeni Todo Ekle' /></div>
                <button onClick={addTodo}>ekle</button>
            </div>

            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}s
                    <button onClick={() => deletTodo(todo.id)}>SİL</button>

                </li>
            ))}


        </div>)



}

export default TodoApp