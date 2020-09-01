import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark gris sticky-top'>
        <NavLink className='navbar-brand' to='/'>
          Recopilación
        </NavLink>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto master'>
            <li className='nav-item active'>
              <NavLink className='Nav_item' to='/' exact>
                Home <span className='sr-only'>(current)</span>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='Nav_item' to='/admin'>
                Admin <span className='sr-only'>(current)</span>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='Nav_item' to='/login'>
                Login <span className='sr-only'>(current)</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
