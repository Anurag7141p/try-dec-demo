import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';
import { MdCameraAlt } from 'react-icons/md';
import proimg from '../../../assets/landingPageImages/Art pop.png';

function Topbox({
  showArrow = true,
  showLogout = true,
  showHeaderText = true,
  showAdjustments = true,
  showPro = true,
  onUploadProfileImage,
  customHeaderText, 
}) {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsTop(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const topboxStyle = {
    position: isTop ? 'absolute' : 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: '#2D70B6',
    color: 'white',
    height: '120px',
    borderRadius: '0 0 20px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    zIndex: 1000,
  };

  const imgStyle = {
    backfaceVisibility: 'hidden',
  };

  return (
    <div style={topboxStyle}>
      {showArrow && <span className='ml-2'><FaArrowLeft size={20} /></span>}
      {showPro && (
        <div className='absolute mt-32 ms-2'>
          <img
            src={proimg}
            alt="Profile"
            className='h-24 w-22 rounded-full border-black'
            style={imgStyle}
          />
          <label htmlFor='upload-profile' className='cursor-pointer'>
            <MdCameraAlt size={28} className='text-white bg-custom-blue rounded-full p-1 absolute bottom-0 right-0' />
            <input
              type='file'
              id='upload-profile'
              accept='image/*'
              className='hidden'
              onChange={onUploadProfileImage}
            />
          </label>
        </div>
      )}
      {showHeaderText && !customHeaderText && (
        <h1 className='text-center font-medium text-xl'>Analytics</h1>
      )}
      {customHeaderText && (
        <h1 className='text-center font-medium text-2xl mr-6'>{customHeaderText}</h1>
      )}
      <div className='flex items-center'>
        {showLogout && <div className='font-medium'>Logout</div>}
        {showAdjustments && <span className='ml-2 mr-2'><HiAdjustmentsHorizontal size={26} /></span>}
      </div>
    </div>
  );
}

export default Topbox;
