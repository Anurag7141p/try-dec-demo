import React from 'react'
import CameraEqui from '../components/singlePage/cameraandequi';
import Navbar from '../components/reusable/navbar/homenav/navbar';
function Singlepage() {
  return (
    <div className='lg:w-[1530px] justify-center items-center mx-auto'>
        <Navbar/>
<CameraEqui/>
    </div>
  )
}

export default Singlepage;