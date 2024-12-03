import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faListCheck, faCalendarCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  const [open, setOpen] = useState(false) 
  return (

   
    <div className={` ${open ? 'md:w-72 ' : 'sm:w-20'} bg-white h-screen shadow-lg p-6 rounded relative sm:w-20  transition-all duration-300 ease-in-out`}>

  
     {open &&<h1 className="text-lg font-bold mb-8 w-28 sm:block hidden">Do-it</h1>}
      <span
       onClick={() => setOpen(!open)} className={`bg-purple-800 absolute right-3 top-9 cursor-pointer w-7
      rounded-full px-2 text-xl text-white ${ open ? '' : 'sm:block' } `}
      >
      <FontAwesomeIcon icon={faChevronRight} /> </span>
    
      {open &&<hr class="border-solid border-2 my-4 border-purple-300 w-1/3 sm:block hidden " />}

      <ul className="space-y-4">
        <li className=" text-3xl flex items-center mt-9  py-6">
        <FontAwesomeIcon icon={faListCheck} /> {open &&<span className="text-purple-500 ml-6 sm:block hidden">Today tasks</span>}
        </li>
        <li className="text-gray-600 flex items-center py-6 text-2xl">
        <FontAwesomeIcon icon={faCalendarCheck} /> {open &&<span className=" ml-6 sm:block hidden"> Scheduled tasks</span>}
        </li>
        <li className="text-gray-600 flex items-center py-6 text-3xl">
        <FontAwesomeIcon icon={faGear} />{open && (<span className='ml-6 sm:block hidden'> Settings </span>)}
        </li>
      </ul>
    </div>
  
  
  )
}

export default Sidebar