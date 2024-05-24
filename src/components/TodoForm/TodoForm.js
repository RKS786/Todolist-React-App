import React,{ useState } from "react";
import axios from "axios";
import './TodoForm.css';

const TodoForm = ({addTodo}) => {
    const [title, setTitle] = useState('');

    const hanldeSubmit = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/todos',{title:title, completed: false})
        .then(response => {
            addTodo(response.data);
            setTitle('');
        })
        .catch(error => console.log("Error adding todo:",error));
    };

    return(
        <form className="todo-form" onSubmit={hanldeSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                placeholder="Add a new todo"
                required
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm;