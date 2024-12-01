import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faListCheck, faCalendarCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  const [open, setOpen] = useState(true) 
  return (
    <div className={` ${open ? 'w-72' : 'w-20'} bg-white h-screen shadow-lg p-6 rounded relative`}>
  
     {open &&<h1 className="text-lg font-bold mb-8 w-28">Do-it</h1>}
      <span
       onClick={() => setOpen(!open)} className="bg-purple-800 absolute right-3 top-9 cursor-pointer w-7
      rounded-full px-2 text-xl text-white "
      ><FontAwesomeIcon icon={faChevronRight} /> </span>
    
      {open &&<hr class="border-solid border-2 my-4 border-purple-300 w-1/3 " />}

      <ul className="space-y-4">
        <li className=" text-3xl flex items-center mt-9  py-6">
        <FontAwesomeIcon icon={faListCheck} /> {open &&<span className="text-purple-500 ml-6 ">Today tasks</span>}
        </li>
        <li className="text-gray-600 flex items-center py-6 text-2xl">
        <FontAwesomeIcon icon={faCalendarCheck} /> {open &&<span className=" ml-6"> Scheduled tasks</span>}
        </li>
        <li className="text-gray-600 flex items-center py-6 text-3xl">
        <FontAwesomeIcon icon={faGear} /> {open &&<span className='ml-6'> Settings </span>}
        </li>
      </ul>
    </div>
  
  )
}

export default Sidebar