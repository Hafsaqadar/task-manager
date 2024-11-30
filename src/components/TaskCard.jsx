import React from 'react'
import { FaRegCircle,FaCheckCircle } from 'react-icons/fa'
import { FaRegTrashCan } from 'react-icons/fa6'


function TaskCard({tasks, taskCompletionCheck, deleteTask }) {

  // const tasks =[

  // ]
  return (
    <div className='task-item'>
      {
    tasks.length>0 ? (
      tasks.map((task,index) =>(
        <div key={task.id} className='task-cards'>
            <span className="dot" style={{ backgroundColor: '#FF6384' }}></span>

            <span  className={task.completed ? 'completed-text ' : ''}>
            {task.name}          
            </span>
         




          <div className='circle-icons' onClick={()=>taskCompletionCheck(task.id)}>
            {
              task.completed? (
                <FaCheckCircle size={24} color="#8F00FF" /> 
              ) :(
                <FaRegCircle size={25 } />
              )
            }
           </div>

           <div className='delete-icon' onClick={() => deleteTask(task.id)}>
            <FaRegTrashCan size={30} color='#B197FC'/>

            </div>
         
            </div>
       
       
      ))
    ) : (
      <p>no taks yet. add new task</p>
    )
      }
   

    </div>

    
  )
}

export default TaskCard
