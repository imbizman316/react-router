import React from 'react'
import { Link } from 'react-router-dom'
import HostVansDetail from './HostVansDetail'


export default function HostVans() {

  const [myVans, setMyVans] = React.useState([])

  const getMyVans = async () => {

    const response = await fetch("https://pixabay.com/api/?key=40812056-f3b293341e49fa6b97eab62e5&q=tokyo&image_type=photo")

    const responseData = await response.json()

    console.log(responseData)

    const myVanData = await responseData.hits.filter((item) => item.likes > 200)

    setMyVans(myVanData)

  }

  React.useEffect(()=> {

    getMyVans()

  },[])

  return (
    <div>
      <h3>Your listed vans</h3>
      { myVans.length > 0 ? myVans.map((item) => {
        return (
          <Link key={item.id} to={`/host/vans/${item.id}`} element={<HostVansDetail/>}>
            <div  className='host-vans'>
              <img src={item.webformatURL} alt={item.tags} />
              <div>
                <h4>{item.tags}</h4>
                <h5>{item.likes} likes</h5>
              </div>
            </div>
          </Link>
        )
      })
    :
      <h5>Loading ... </h5>
    }
    </div>
  )
}
