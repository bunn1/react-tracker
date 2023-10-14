// Behövs när man jobbar med classes
// import React from 'react';
import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [ tasks, setTasks ] = useState( []);

  useEffect(() =>{
    
  })

// Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) +1
  console.log(id);
  const newTask = {id, ...task}
  setTasks([...tasks, newTask]) 
}

// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}


// Toggle reminder
const toggleReminder = (id) => {
setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}




  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No task to show'}
    </div>
  );
}

export default App;
