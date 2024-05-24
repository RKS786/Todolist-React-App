import React, {useState, useEffect} from "react";
import axios from "axios";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";



const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => setTodos(response.data))
        .catch(error => console.log("Error:",error));
    },[])

    console.log("todos",todos);

    const handleAddTodo =(newTodo)=>{
        // Generating a unique ID for the new todo
        const newId = todos.length + 1;
        // Creating a new todo object with the generated ID
        const todoWithId = { ...newTodo, id: newId };
        // Adding the new todo to the list
        setTodos([...todos, todoWithId]);
    }

    const deleteTodo = (id) => {
        axios.delete('https://jsonplaceholder.typicode.com/todos/${id')
        .then(() => {
            setTodos(todos.filter(todo => todo.id !== id))
        })
        .catch(error => console.log("Error deleting todo:",error));
    }

    const updateTodo = (id, updatedTodo) => {
        axios.put('https://jsonplaceholder.typicode.com/todos/${id}', {updatedTodo})
        .then(response => {
            setTodos(todos.map(todo => todo.id === id ? response.data : todo))
        })
        .catch(error => console.log("Error updating todo:", error))
    }

    return (
        <div className="todo-list">
            <h1>Todo React App</h1>
            <TodoForm addTodo={handleAddTodo}/>
            <ul>
                {todos.map(todo => {
                    return(
                    <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList;