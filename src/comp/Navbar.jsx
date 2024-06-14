import React from 'react'

const Navbar= () => {
  return (
   
   <nav className='flex gap-5 justify-between bg-violet-950 text-white'>
    <div>
      <span className='mx-2 text-xl font-bold'>HiTodo</span>
    </div>
    <ul className='flex gap-5 mx-2'>
      <li className='hover:font-bold'>Home</li>
      <li className='hover:font-bold'>About Us</li>
    </ul>
   </nav>
  )
}

export default Navbar
