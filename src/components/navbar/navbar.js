import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

export const Navbar = () => {
  return (
    <div className='navbar'>
       
            <ul className='left'>
                <li className='left-li'><Link className='link' to="/products/4">Adults</Link></li>
                <li className='left-li'><Link className='link' to="/products/5">Children</Link></li>
            </ul>

      
            <ul className='center'>
                <li className='center-li'><Link className='link' to="/">Gaming 99</Link></li>
            </ul>
       
      
            <ul className='right'>
                <li className='right-li'><Link className='link' to="/">Cart</Link></li>
                <li className='right-li'><Link className='link' to="/">Home</Link></li>
            </ul>

    </div>
  )
}
