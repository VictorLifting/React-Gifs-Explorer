// import { useEffect, useState } from "react"
import { GiftItem } from "./GiftItem"
import { useFetchGifs } from "../hooks/useFecthGifs";

// import { getGif } from "../helpers/getGifs"

export const GiftGrid = ({category}) => {

  const { images, isLoading } = useFetchGifs ( category );

  console.log({images, isLoading})

  return (
      <>
      <h3>{category}</h3>

      {
        isLoading && (<h2> Cargando... </h2>)
      }

      <div className="card-grid"> 

          {images.map((images)=>
            <GiftItem key={images.id} 
            // title={images.title} url={images.url}
            {...images}

            
            />
          )}
        
      </div>
    
    </>
  )
}
