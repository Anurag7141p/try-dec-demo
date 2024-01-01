import { React, useState, useEffect } from 'react'
import Layout from '../../components/layout/authlayout'
import { Link } from 'react-router-dom'

const Otp = () => {
    const [seconds, setSeconds] = useState(60);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let intervalId;

        if (isActive && seconds > 0) {
            intervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        }

        if (seconds === 0) {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isActive, seconds]);

    const handleResend = () => {
        setSeconds(60);
        setIsActive(true);
    };

    return (
        <div>

            <h1 className='text-lg font-medium mb-2 '>Verify Phone Number </h1>
            <h4 className='text-gray-700 text-xlg mb-8'>Please enter the one-time pass code sent to +91-xxxxx-xxxxx</h4>
            <div className="flex items-center justify-between gap-2 mb-4">
                <input
                    type="text"
                    className="w-10 h-10 px-2 py-1 border border-black rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <input
                    type="text"
                    className="w-10 h-10 px-2 py-1 border border-black rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <input
                    type="text"
                    className="w-10 h-10 px-2 py-1 border border-black rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <input
                    type="text"
                    className="w-10 h-10 px-2 py-1 border border-black rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>


            <Link to="/create-store" className="block w-full mb-3">
                <button
                    type='submit'
                    className='bg-blue-500 text-white px-4 py-2 rounded-md w-full'
                >
                    Verify Now
                </button>
            </Link>
            <div className='flex justify-end text-blue-500'>
                Resend {seconds === 0 ? (
                    <span className='' onClick={handleResend}>Resend Now</span>
                ) : (
                    <span>
                        <span className='text-black px-1'> 00:{seconds < 10 ? `${seconds}` : seconds}s</span>
                    </span>
                )}
            </div>
        </div>
    )
}

const Varification = () => {
    const AuthLayout = Layout(Otp)
    return <AuthLayout />
}
export default Varification