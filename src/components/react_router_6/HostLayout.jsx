import React from 'react'
import {Outlet, Link} from 'react-router-dom'

export default function HostLayout() {
  return (
    <div className='host-nav-container'>
      <nav className='host-nav'>
        <Link to="/host">Dashboard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/reviews">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  )
}

