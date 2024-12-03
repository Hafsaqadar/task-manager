import React,  { useState } from 'react'


function TaskInput({addTask}) {

  const[input, setInput] = useState("");

 


  const handleInput =(e)=>{
    setInput(e.target.value); 

  }

    const handleEnterKey = (e) =>{
      if(e.key === "Enter" && input.trim()){
       addTask(input)
        setInput("")
      }

    

  }

  return (
   
   
   <div className="px-2 p-1 w-full  bg-white rounded lg:w-1/2 relative">
     
     <div className="absolute flex gap-1 top-5 left-2">
        <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
      </div>
    <input type="text" placeholder='what is your next task?'
    value={input}
    onChange={handleInput} 
    onKeyDown={handleEnterKey}
    className=' w-42 md:px-2 p-2 outline-none  ml-10    placeholder: text-lg md:text-xl '  />
   
   

    </div>
   
  
  )
}

export default TaskInput
