import React from 'react'
import ThemeBtn from './ThemeBtn'


function Header() {
 
    return (
        <div className="py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 bg-white text-black">
          
        <h1 className="font-bold text-3xl uppercase text-center">TECH - Blogs</h1>
       <div className='text-center pt-2 '> <ThemeBtn/> </div> 
  
      </div>
        
    )
}

export default Header
