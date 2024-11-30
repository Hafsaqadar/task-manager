import React,  { useState } from 'react'
import { FaRegClock } from 'react-icons/fa';

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
   
   
   <div className="input-section">
    <div className="dot-group">
    <span className="dot" style={{ backgroundColor: '#FF6384' }}></span>
    <span className="dot" style={{ backgroundColor: '#FFD700' }}></span>
    <span className="dot" style={{ backgroundColor: '#36A2EB' }}></span>
    </div>
    <input type="text" placeholder='what is your next task?'
    value={input}
    onChange={handleInput} 
    onKeyDown={handleEnterKey}/>
    <FaRegClock size={40} color='#B197FC' />
   

    </div>
   
  
  )
}

export default TaskInput
