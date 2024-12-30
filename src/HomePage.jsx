import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import TaskCard from './components/TaskCard'
import TaskInput from './components/TaskInput'
import Header from './components/Header'
import './app.css'





const HomePage = () => {
 


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


  
  <div className="w-full min-h-screen bg-purple-500 relative">
 
  
  {/* Flex container for Sidebar and Main Content */}
  <div className="flex  w-full min-h-screen overflow-auto">
    {/* Sidebar - Hidden on small screens */}
    <Sidebar  className="hidden sm:block"/>
     
      

            <div className="flex-1 m-5 sm:m-10 lg:m-20 px-4 lg:px-16">
              <Header tasks={tasks} />
              <TaskInput addTask={addTask} />
              <TaskCard
                tasks={tasks}
                taskCompletionCheck={taskCompletionCheck}
                deleteTask={deleteTask}
               
              />
               
            </div>
            

          
        
       
      </div>
      </div>


 


);
}
export default HomePage
