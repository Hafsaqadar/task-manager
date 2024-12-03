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
      <div className='text-white text-3xl p-10  mb-9 '>

    

   
     <h2 className='text-lg font-bold md:text-4xl '>Today   Main Focus
      <br />
      <span>
      {mainTask || 'no task avaailable'}
      </span></h2>
      </div>
    </header>



  </>
  )
}

export default Header
