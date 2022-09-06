import { useState } from 'react';

const TodoForm = (props) => {

    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);


    const handleNewToDoSubmit = (event) => {
        event.preventDefault();

        const todoItem = {
            text: newTodo,
            complete: false
        }

        // takes all todos and copies them into new array and adds the new todo to the array
        setTodos([...todos, todoItem])
        setNewTodo("");
        console.log(todos)
    };

    const handleTodoDelete = (index) => {
        const filteredTodos = todos.filter((todo, i) => {
            // doesnt add the index to the new array
            return i !== index;
        })
        setTodos(filteredTodos)
    };

    const handleToggleComplete = (index) => {
        const updatedTodos = todos.map((todo, i) => {
            if (i === index) {
                todo.complete = !todo.complete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    };

    return (
        <div>
            <div>
                <form onSubmit={handleNewToDoSubmit}>
                    <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
                    <button>Add</button>
                </form>
            </div>

            <div>
                {todos.map((todo, i) => {
                    return (
                        <div key={i}>
                            <p>{todo.text}
                                <input onChange={(event) => {
                                    handleToggleComplete(i);
                                }} checked={todo.complete} type="checkbox"></input>
                                <button onClick={(event) => {
                                    handleTodoDelete(i);
                                }}> Delete</button>
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default TodoForm;