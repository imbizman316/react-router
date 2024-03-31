import { useState, useEffect } from "react"
import { BrowserRouter, Link } from "react-router-dom"
import VanDetail from "./VanDetail"

export default function Vans() {

  const [vans, setVans] = useState([])

  async function getVans() {

    try {

      const response = await fetch("https://pixabay.com/api/?key=40812056-f3b293341e49fa6b97eab62e5&q=van+car&image_type=photo")
      const data = await response.json()

      // console.log(data.hits)
      
      setVans(data.hits)      

    }

    catch (err) {

      throw err

    }    

  }

  useEffect(() => {

    getVans()

  },[])

  const vanElements = vans?.map((item) => {
    return (
      <Link to={`/vans/${item.id}`} element={<VanDetail/>} key={item.id}>
        <div className="van_card" onClick={()=>{}}>
          <div style={{backgroundImage: `url(${item.webformatURL})`, height: '200px', width: '200px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', border: '1px black solid', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}/>            
          <div className="vans_bottom">
            <h5 style={{textAlign: 'center'}}>{item.tags}</h5>
            <h5 style={{color: "red"}}>{item.likes} likes</h5>
          </div>
        </div>
      </Link>          
    )
  })


  return (
    <>
      <h2>Explore our van options</h2>
      <div className="van_button_container">
        <button>Single</button>
        <button>Luxury</button>
        <button>Rugged</button>
        <h5>Clear filters</h5>
      </div>
      <div className="vans">      
        {vanElements}
      </div>            
    </>
  )
}

//webformatURL
      //tags


