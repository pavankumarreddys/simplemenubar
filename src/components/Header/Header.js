import React, { useEffect, useRef } from 'react';

export const Header = () => {

  return (
    <div className='header-container'>
        <img src="https://img.freepik.com/premium-vector/sp-logo-design_731343-969.jpg?w=826" className='logo'/>
        <nav>
            <ul className='navbar-items'>
                <li className='nav-item'>Home</li>
                <li>About</li>
                <li>Career</li>
                <li>Blogs</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
  )
}
