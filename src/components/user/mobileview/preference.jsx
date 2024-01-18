import React from 'react'
import Topbox from './topbox'
import { MdOutlineVerified } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbShoppingBagSearch } from "react-icons/tb";
function Preferences() {
  return (
    <div>
        <Topbox
        showLogout={false}
        showHeaderText={false}
        showAdjustments={false}
        showPro={false}
        customHeaderText="Preferences"
        />
<div className='mt-40 flex border border-custom-blue text-custom-blue rounded-2xl ml-4 mr-4 px-4 py-6 hover:bg-custom-blue hover:text-white'>
<MdOutlineVerified size={40} className='tex-custom-blue'/><p className='text-xl font-medium ms-4 mt-1'>Location</p><p className='ml-auto'><IoIosArrowForward size={24} className='mt-2'/></p>
</div>
<div className='mt-6 flex border border-custom-blue text-custom-blue rounded-2xl ml-4 mr-4 px-4 py-6 hover:bg-custom-blue hover:text-white'>
<IoMdNotificationsOutline  size={40} className='tex-custom-blue'/><p className='text-xl font-medium ms-4 mt-1'>Notifications</p><p className='ml-auto'><IoIosArrowForward size={24} className='mt-2'/></p>
</div>
<div className='mt-6 flex border border-custom-blue text-custom-blue rounded-2xl ml-4 mr-4 px-4 py-6 hover:bg-custom-blue hover:text-white'>
<TbShoppingBagSearch size={40} className='tex-custom-blue'/><p className='text-xl font-medium ms-4 mt-1'>Categories</p><p className='ml-auto'><IoIosArrowForward size={24} className='mt-2'/></p>
</div>
    </div>
  )
}

export default Preferences