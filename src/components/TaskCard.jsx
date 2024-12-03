import React from 'react'
import { FaRegCircle,FaCheckCircle } from 'react-icons/fa'
import { FaRegTrashCan } from 'react-icons/fa6'


function TaskCard({tasks, taskCompletionCheck, deleteTask }) {

 
  return (
   <div className=''>
      {
    tasks.length>0 ? (
      tasks.map((task,index) =>(
        <div key={task.id} className='

        w-full bg-white rounded-lg mt-4 flex gap-4 p-3 relative md:text-2xl lg:w-1/2 md:w-3/2 md:mt-10
       
        '>
            <span className="w-3 h-3 bg-pink-500 rounded-full mt-2 md:mt-4 "></span>
            <span  className={task.completed ? 'line-through text-green-600 text-2xl relative' : ''}>
            {task.name}          
            </span>
         




          <div className=' absolute right-14 top-4 sm:right-10 sm:top-2 md:mr-5 md:mt-1' onClick={()=>taskCompletionCheck(task.id)}>
            {
              task.completed? (
                <FaCheckCircle size={24} color="#8F00FF" /> 
              ) :(
                <FaRegCircle size={25 }/>
              )
            }
           </div>

           <div className='absolute right-3 top-4 sm:right-2 sm:top-2' onClick={() => deleteTask(task.id)}>
            <FaRegTrashCan size={30} color='#B197FC'/>

            </div>
         
            </div>
       
       
      ))
    ) : (
      <p className='mt-3 text-xl'>no taks yet. add new task</p>
    )
      }
   

    </div>

    
  )
}

export default TaskCard
