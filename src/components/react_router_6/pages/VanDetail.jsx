import React from "react"
import {useParams} from 'react-router-dom'

export default function VanDetail() {  

  const params = useParams()  

  const [detailData, setDetailData] = React.useState(null)
  
  async function getDetail () {

    try {

      const response = await fetch("https://pixabay.com/api/?key=40812056-f3b293341e49fa6b97eab62e5&q=van+car&image_type=photo")
      const data = await response.json()      

      console.log(data)
      console.log(params.id)

      
      data.hits.forEach((item) => {
        // console.log(item)
        parseInt(item.id) === parseInt(params.id) && setDetailData(item)
      })

    }

    catch (err) {

      throw err

    }   


  }  

  React.useEffect(()=>{

    getDetail()

  },[params])

  console.log(detailData)

  return (
    <div>
      {detailData ?
        <div className="van_detail">
          <h5>id:{detailData.id}</h5>
          <img src={detailData.webformatURL} alt={detailData.user}/>
          <h2>[{detailData.tags}] by {detailData.user}</h2>
          <h3>{detailData.likes} likes</h3>
          <button>Rent this van</button>
        </div>        
      :
        <h2>Loading...</h2>
      }
    </div>
  )
}