import React from 'react'
import ImageCard from '../../utils/card/homecard2'
import cameraData from '../../data/landingpagedata/bestRentalData/cameraData'
import Navbar from '../../utils/navbar/navbar';

const CameraUnits = () => {
  return (
    
    <div className="p-4">
        <Navbar/>
      <h2 className="text-2xl font-bold px-4">Camera and light unit</h2>
      <div className="flex flex-wrap">
        {cameraData.map((image) => (
          <ImageCard key={image.id} {...image} />
        ))}
      </div>
    </div>
  )
}

export default CameraUnits 