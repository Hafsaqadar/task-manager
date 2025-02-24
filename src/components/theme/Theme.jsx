import React, {useState} from 'react'
import './theme.css'


const Theme = () => {
  const switchTheme = (e) => {
    if(e.target.checked){
      document.querySelector('body').setAttribute('data-theme', 'dark')
    } else{
      document.querySelector('body').setAttribute('data-theme', 'light')
    }
  }
  return (
    <>
    <div > 
   <label className="switch">
  <input type="checkbox"  onChange={switchTheme}/>
  <span className="slider round"></span>
 
   </label>
  
</div>

</>  )
}

export default Theme