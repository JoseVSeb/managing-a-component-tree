import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [toDoItem, setToDoItem] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleChange = (event) => {
    setToDoItem(event.target.value);
  };

  const addItem = () => {
    setToDoList((prev) => [...prev, toDoItem]);
    setToDoItem("");
  };

  const deleteItem = (id) => {
    setToDoList((list) => list.filter((_item, index) => index !== id));
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={toDoItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoList.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              name={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
