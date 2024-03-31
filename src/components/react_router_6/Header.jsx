import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {

  const activeStyle = {
    color: 'red',
    textDecoration: "underline",
    fontWeight: 'bold'
  }

  return (
    <div>
      <header className='header'>
        <Link to="/">#VanLife</Link>
        <nav className='header_right'>
          <NavLink
            style={({isActive}) => isActive ? activeStyle : null}
            to="/host">Host</NavLink>
          <NavLink 
            style={({isActive}) => isActive ? activeStyle : null}
            to="/about">About</NavLink>
          <NavLink
            style={({isActive}) => isActive ? activeStyle : null}
            to="/vans">Vans</NavLink>
        </nav>
      </header>
    </div>
  )
}
