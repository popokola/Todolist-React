import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    };
    const updatedTodo = (id, text) => {
        if(!text.text || /^\s*$/.test(text.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === id ? text : item)));
    };
           

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    return (
        <div className='todo-list'>
            <h1 className='typing-demo'>Todo List React</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
            todos={todos} 
            completeTodo={completeTodo} 
            removeTodo={removeTodo}
            updateTodo={updatedTodo}
            />
        </div>
    )
}

export default TodoList;