import React, { useEffect, useState } from 'react'




function Header({tasks}) {

  const [mainTask, setMainTask] =useState('')

  useEffect(() =>{
    if (tasks && tasks.length >0 ){
      setMainTask(tasks[0].name)
    } else{
      setMainTask('');
    }
   
   
  },[tasks])
 
  return (
    <>
    <header>

   
     <h2>today main focus
      <br />
      {mainTask || 'no task avaailable'}</h2>
     
    </header>



  </>
  )
}

export default Header
