import "./App.css";
import React from "react";
import ToDoForm from "./ToDoForm";

function App() {
  
  const [todos, setTodos] = React.useState([]);

  

  function toggleTodo(id, completed)
  {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id)
        {
          console.log(todos);

          return {
            ...todo, completed
          }
        }
        
        return todo
      })
    })
  }

  function deleteItem(id)
  {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    })
  }

  return (
    <div>
      < ToDoForm />
      <h1 className="header">To-Do List:</h1>
      <ul className="list">
        {todos.length === 0 && "All Done For Now :)"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button onClick={() => deleteItem(todo.id)} className="btn btn-danger">Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
