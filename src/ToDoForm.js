import React from "react";

export default function ToDoForm()
{
    const [newItem, setNewItem] = React.useState("");
    const [todos, setTodos] = React.useState([]);


    function handleSubmit(e) {
        e.preventDefault();
    
        setTodos((currentTodos) => {
          return [
            ...currentTodos,
            {
              id: crypto.randomUUID(),
              title: newItem,
              completed: false,
            },
          ];
        });
    
        setNewItem("");
        
      }

    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            id="item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button className="btn">Add Item</button>
      </form>
}