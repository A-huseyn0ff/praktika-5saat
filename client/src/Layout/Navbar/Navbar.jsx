import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
const [isopen, setisopen] = useState(true)

function handleopen() {
  if (!isopen) {
    setisopen(true)
  }
  else{
    setisopen(false)
  }
}
  return (
   <nav> 
 <div className='con'>
 <div className='logo'>
        <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
        <h2>COURSE</h2>
    </div>
    <ul className='list'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/add'>Add</Link></li>
        <li><Link to='/wish'>Wishlist</Link></li>
    </ul>
    <div className='call'>
    <i class="fa-solid fa-phone"></i>
        <h2>+43 4566 7788 2457</h2>
    </div>
    <i class="fa-solid fa-bars" onClick={()=>handleopen()}></i>
   
 </div>
 <div className={!isopen ? 'dropdown' : 'active'}>
    <ul >
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/add'>Add</Link></li>
        <li><Link to='/wish'>Wishlist</Link></li>
    </ul>
    <div >
    <i class="fa-solid fa-phone"></i>
        <h2>+43 4566 7788 2457</h2>
    </div>
    </div>
   </nav>
  )
}

export default Navbar
