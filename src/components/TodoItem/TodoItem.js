import React, {useState} from "react";
import './TodoItem.css';

const TodoItem = ({todo, updateTodo, deleteTodo}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState('');

    const handleUpdateTodo = () => {
        updateTodo(todo.id,{...todo, title: newTitle});
        setIsEditing(false);
    }
    return(
        <li className="todo-item">
            {isEditing ? (
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e)=> setNewTitle(e.target.value)}>

                </input>
            ) : (
            <span>{todo.title}</span>
            )
            }
            <div className="buttons">
                <button className="delete-btn" onClick={()=> deleteTodo(todo.id)}>Delete</button>
                {isEditing ? (
                    <button className="save-btn" onClick={handleUpdateTodo}>Save</button>
                ) : (
                    <button className="edit-btn" onClick={()=> setIsEditing(true)}>Edit</button>
                )
            }
            </div>
        </li>
    )
}

export default TodoItem;