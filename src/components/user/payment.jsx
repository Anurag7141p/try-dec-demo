import React, { useState } from 'react';
import UserNav from '../../utils/navbar/userNav';
import Sidebar from '../../utils/navbar/sidebar';
import Profilebox from '../../utils/navbar/profilebox';
import { CiCalendar } from "react-icons/ci";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Payment = () => {
  const [activeButton, setActiveButton] = useState('wallet');
  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const handleCalendarClick = () => {
    setCalendarVisible(!isCalendarVisible);
  };

  return (
    <div className='lg:w-[1536px] md:w-[800px] w-full mx-auto '>
      <UserNav />
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className='bg-blue-50 w-full md:flex-grow '>
          <h1 className='font-medium mt-6 ml-6   '>Payment Details</h1>
          <div className='bg-white lg:mr-10 mt-4 mx-2 rounded-md lg:h-[700px]'>
            <h1 className='ms-2 mt-2 font-medium '>Setup payment and wallet</h1>
            <div className='flex flex-col md:flex-row mt-6'>
              <div className='w-full md:w-40 mr-4 mb-4 md:mb-0'>
                <button
                  className={`px-4 py-3 rounded text-${activeButton === 'wallet' ? 'blue-600' : 'gray-600'} ${activeButton === 'wallet'
                      ? 'bg-indigo-300'
                      : 'hover:bg-indigo-300 hover:text-blue-600'
                    } w-full md:w-40 h-12 text-left md:text-sm mb-2`}
                  onClick={() => handleButtonClick('wallet')}
                >
                  Wallet
                </button>
                <button
                  className={`px-4 py-2 rounded text-${activeButton === 'paymentSetup' ? 'blue-600' : 'gray-600'} ${activeButton === 'paymentSetup'
                      ? 'bg-indigo-300'
                      : 'hover:bg-indigo-300 hover:text-blue-600'
                    } w-full md:w-40 h-12 text-left md:text-sm`}
                  onClick={() => handleButtonClick('paymentSetup')}
                >
                  Payment Setup
                </button>
              </div>
              <div className='ms-2 md:ms-0 lg:w-full'>
                <Profilebox />
                <div className='flex border border-gray-300 mt-4 rounded md:w-[350px] lg:w-[1000px]  '>
                  <div>
                    <h1 className='text-sm font-semibold px-4 py-4 '>Total earnings received</h1>
                  </div>
                  <div className='flex ml-auto px-4 py-4'>
                    <div className='mr-4 mt-1' onClick={handleCalendarClick}>
                      <CiCalendar />
                    </div>
                    {isCalendarVisible && (
                      <DatePicker
                        selected={new Date()}
                        onChange={() => { }}
                        className='border border-gray-300 text-gray-500 px-1'
                      />
                    )}
                    <div className='border border-gray-300 w-20 text-gray-500 px-6'>
                      0.00
                    </div>
                  </div>
                </div>
                <div className='lg:flex flex-col-2 '>
                  <div className='border border-gray-300 mt-4 lg:w-[460px] md:w-[280px] lg:h-[200px] px-4 py-2 rounded mr-4'>
                    <h1 className='text-lg font-medium '>Payments</h1>
                    <h1 className='mt-2 text-center'>Balance available for use</h1>
                    <div className='felx flex-row  justify-center'>
                      <div className='border border-gary-300 w-36 mt-2 h-10 py-2 text-gray-500 px-4 lg:ms-28'>
                        0.00
                      </div>
                      <div>
                        <button className='bg-blue-600 text-white hover:bg-gray-500 px-5 py-1 rounded mt-2 justify-center lg:ms-28'>Withdraw</button>
                      </div>
                    </div>
                  </div>
                  <div className='border border-gray-300 mt-4 lg:w-[500px] md:w-[280px] lg:h-[400px] rounded px-4 py-4 justify-center items-center lg:ml-5'>
                    <h1 >Payments being cleared</h1>
                    <div className='border border-300 rounded w-36 px-2 py-1 mt-2  '>
                      0.00
                    </div>
                    <h1 className='mt-4 ms-20'>Payment for active orders</h1>
                    <div className='flex flex-col mt-2 border bg-gray-200 rounded-tl-xl rounded-tr-xl border-b lg:w-80 justify-center mx-auto '>
                      <div className='flex justify-between px-4 py-2  '>
                        <div className='text-center'>Date</div>
                        <div className='text-center'>Order</div>
                        <div className='text-center'>Price</div>
                      </div>
                    </div>
                    <div className='flex flex-col-3 text-xs lg:ms-20 mt-4 '>
                      <div >7/4/2023</div>
                      <div className='lg:ms-20 md:ml-10'>WHHDNKJK998</div>
                      <div className='lg:ms-14 md:ml-8'>₹500</div>

                    </div>
                    <div className='flex flex-col-3 text-xs lg:ms-20 mt-4 '>
                      <div>7/4/2023</div>
                      <div className='lg:ms-20 md:ml-10'>WHHDNKJK998</div>
                      <div className='lg:ms-14 md:ml-8'>₹500</div>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
