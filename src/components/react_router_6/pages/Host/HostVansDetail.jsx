import React, { useEffect, useState } from 'react'
import {useParams, Outlet, NavLink, Link} from 'react-router-dom'

export default function HostVansDetail() {
  
  const params = useParams()
  const [targetVan, setTargetVan] = useState({})

  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  }


  const getTheVan = async () => {

    const response = await fetch("https://pixabay.com/api/?key=40812056-f3b293341e49fa6b97eab62e5&q=tokyo&image_type=photo")
    const data = await response.json()

    console.log(data.hits)

    const target = data.hits.find((item)=> parseInt(item.id) === parseInt(params.id))

    setTargetVan(target)

  }

  useEffect(()=>{

    getTheVan()

  },[params])

  return (
    <div>
      <Link to=".." relative="path">--Back to all vans</Link>
      <div className='host-vans-detail'>
        <img src={targetVan.webformatURL} alt={targetVan.tags}></img>
        <div>
          <h5 className='sticker'>id: {targetVan.id}</h5>
          <h3>{targetVan.tags}</h3>
          <h5>{targetVan.likes} likes</h5>
        </div>
      </div>
      <div className='host-vans-detail-nav'>
        <NavLink 
          end
          style={({isActive}) => isActive ? activeStyle : null}
          to="." >Details</NavLink>
        <NavLink 
          style={({isActive}) => isActive ? activeStyle : null}
          to="pricing">Pricing</NavLink>
        <NavLink 
          style={({isActive}) => isActive ? activeStyle : null}
          to="photos">Photos</NavLink>
      </div>
      <Outlet/>
    </div>
  )
}

