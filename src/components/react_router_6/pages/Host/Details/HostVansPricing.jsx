import React from 'react'
import {useOutletContext} from 'react-router-dom'

export default function HostVansPricing() {

  const targetVan = useOutletContext()

  return (
    <div>
      <h3>Likes: {targetVan.likes}</h3>
      <h3>Views: {targetVan.views}</h3>
    </div>
  )
}
