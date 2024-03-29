import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <header className='header'>
        <Link to="/">#VanLife</Link>
        <nav className='header_right'>
          <Link to="/host">Host</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
    </div>
  )
}
