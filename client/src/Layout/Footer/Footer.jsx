import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
   <footer>
    <div className='col'>
    <div className='left'>
    <div className='logo'>
        <img src="https://preview.colorlib.com/theme/course/images/logo.png" alt="" />
        <h2>COURSE</h2>
    </div>
    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum, tempor lacus.</p>
    </div>
    <ul >
    <h2>Menu</h2>
    <li>Home
</li>
    <li>
    About Us

    </li>
    <li>
    Courses

    </li>
    <li>
    News

    </li>
    <li>
    Contact
    </li>
    </ul>
    <ul >
    <h2>Usefull Links</h2>
    <li>Testimonials
</li>
    <li>FAQ
</li>
    <li>Community
</li>
    <li>Campus Pictures
</li>
    <li>Tuitions</li>
    </ul>
    <ul>
      <h2>Contact</h2>
      <li>Blvd Libertad, 34 m05200 Arévalo</li>
      <li> 0034 37483 2445 322</li>
      <li>hello@company.com</li>
    </ul>
    </div>
    <div className='copyright'>
      <div className='container'>
        <h4>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</h4>
        <div className='icons'>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-facebook"></i>
        </div>
      </div>
    </div>
   </footer>
  )
}

export default Footer
