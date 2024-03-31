import React from 'react'
import {useOutletContext} from 'react-router-dom'

export default function HostVansPhotos() {

  const targetVan = useOutletContext()

  return (
    <div>    
      <img src={targetVan.webformatURL} alt={targetVan.tags}/>
    </div>
  )
}
