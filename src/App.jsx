import React, { useEffect, useState } from 'react'
import Sidebar from './components/sidebar-component/Sidebar'
import TaskCard from './components/TaskCard'
import TaskInput from './components/TaskInput'
import Header from './components/Header'
import './app.css'
// import { Route, Routes } from 'react-router-dom'
// IMPORT PAGES
// import SettingPage from './pages/settingPage'




const App = () => {

  const [tasks, setTasks] =useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


 // Add a new task
 const addTask = (taskName) => {
  const newTask = {
    id:Date.now(),
    name: taskName,
    completed:false,
  }





  setTasks([...tasks, newTask]); // Update the tasks array
};


const taskCompletionCheck=(taskId) =>{
   setTasks((prevTasks) =>
   prevTasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )
    
  );

  console.log('task is completed')
};

const deleteTask = (id) =>{
  setTasks((prevTasks)=>prevTasks.filter((task)=>task.id !==id));
}



  return (
    <div className='App'>
      <Sidebar/>
{/*     
      <Routes>
       <Route path='/' element={<SettingPage />} />
      </Routes> */}
    
      <div className='main-content'>
      <Header tasks={tasks} />
      <TaskInput   addTask={addTask} />
      <TaskCard  tasks={tasks}  taskCompletionCheck={taskCompletionCheck}  deleteTask={deleteTask}/>
      
      
      </div>
      </div>
  )
}

export default App

