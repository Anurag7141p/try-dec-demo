import React from 'react'
import cam from '../../assets/singlepage/camera-icon-21.png'
import mic from '../../assets/singlepage/micro.svg'
export default function Headbox() {
    return (
        <div>
            <div className='bg-gray-100 p-2 mt-5'>
                <h5 className='mb-5 ml-20'>Camera And Equipment's.</h5>
                <div className="flex flex-wrap gap-3 justify-evenly ...">
                    <div className='w-36 h-20  bg-green-200 text-center hover:bg-green-400 mb-3 '>
                        <img src={cam} alt="" className="h-14 w-14 m-auto" />
                        <p>Camera</p>
                    </div>
                    <div className='w-36  bg-green-200  text-center hover:bg-green-400 mb-3'>
                        <img src={cam} alt="" className="h-14 w-14 m-auto" />
                        <p>Lens</p>
                    </div>
                    <div className='w-36  bg-green-200 text-center hover:bg-green-400 mb-3'>
                        <img src={cam} alt="" className="h-14 w-14 m-auto" />
                        <p>Light Unit</p>
                    </div>
                    <div className='w-36  bg-green-200 text-center hover:bg-green-400 mb-3'>
                        <img src={cam} alt="" className="h-14 w-14 m-auto" />
                        <p>Tripod</p>

                    </div>
                    <div className='w-36  bg-green-200  text-center hover:bg-green-400 mb-3'>
                        <img src={mic} alt="" className="h-14 w-14 m-auto" />
                        <p>Mic</p>

                    </div>
                    <div className='w-36  bg-green-200  text-center hover:bg-green-400 mb-3'>
                        <img src={cam} alt="" className="h-14 w-14 m-auto" />
                        <p>Gimbal</p>

                    </div>
                </div>
            </div>

        </div>
    )
}
