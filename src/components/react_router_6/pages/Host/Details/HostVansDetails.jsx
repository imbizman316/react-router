import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVansDetails() {

  const targetVan = useOutletContext()

  return (
    <div>      
      <h3>{targetVan.tags}</h3>
      <h4>by "{targetVan.user}"</h4>      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, placeat? Magni dolor, unde vel inventore perferendis corporis odit accusantium eius neque autem atque quia iste dolores dolorum eveniet explicabo adipisci!</p>
    </div>
  )
}
