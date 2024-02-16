import React, { useState } from "react";
import "./App.css";

function App() {
  const [TodoList, setTodoList] = useState([]);
  const [newTask, setReadTask] = useState("");

  const ReadTask = (event) => {
    setReadTask(event.target.value); /* read the input */
  };
  const AddTask = () => {
    const list = [...TodoList, newTask]; /* insert data in list */
    setTodoList(list);
  };

  const DeleteTask=(taskName)=>{
    const list=TodoList.filter((task)=>{
 return task===taskName? false:true
    })
    setTodoList(list);
  }
  return (
    <div className="container">
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={ReadTask} placeholder="Type the task you want to Add" />
        <button  onClick={AddTask}>
          Add Task
        </button>
      </div>
      <div className="list">
        {TodoList.map((task) => {
          return (
            <div className="task">
              <h1><li>{task}</li> </h1>
              <button onClick={()=>DeleteTask(task)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default App;
