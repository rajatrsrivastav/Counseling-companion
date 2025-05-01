import React from 'react'
import{ Download ,UserRoundPen,GraduationCap,MessageSquare} from 'lucide-react';
import Link from 'next/link';
const Dashboard = () => {
  return (
    <div>
      <div className='flex flex-row items-center justify-between px-10 py-15'>
        <h1 className='text-2xl font-bold'>Student Dashboard</h1>
        <div className='flex flex-row items-center justify-center space-x-5'>
          <button className='outline-solid rounded p-2 px-3 text-sm hover:bg-gray-800 transition duration-300 flex items-center space-x-2'>
            <Download size={20}/> 
            <Link href='/quiz'>Export</Link>
          </button>
          <button className='bg-black text-white rounded p-2 px-3 text-sm hover:bg-gray-800 transition duration-300 flex items-center space-x-2'>
            <UserRoundPen size={20}/> 
            <Link href='/quiz'>Edit Profile</Link>
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-10 px-10 py-5">
        <div className='outline-solid w-100 outline-1px outline-gray-200 rounded p-5 shadow-md space-y-2'>
          <h2 className='text-3xl font-semibold'>Quiz Summary</h2>
          <p className='text-base text-gray-500'>Your career fit profile</p>
          <div className='flex flex-col items-center justify-center space-y-2 py-5s space-y-5 text-center mb-10 mt-10'>
            <p className='text-gray-500 text-base'>You haven't taken the Career Fit Quiz yet.</p>
          <button className='bg-black text-white rounded py-2 px-5 text-sm hover:bg-gray-800 transition duration-300 text-base'>
            <Link href='/quiz'>Take Quiz Now</Link>
          </button>
          </div>
        </div>
        <div className='outline-solid w-100 outline-1px outline-gray-200 rounded p-5 shadow-md space-y-2'>
          <h2 className='text-3xl font-semibold'>College Predictor</h2>
          <p className='text-base text-gray-500'>Find your best college match</p>
          <div className='flex flex-col items-center justify-center space-y-2 py-5s space-y-5 text-center mb-10 mt-10'>
            <GraduationCap className='text-gray-400' size={30}/>
          <button className='bg-black text-white rounded py-2 px-5 text-sm hover:bg-gray-800 transition duration-300 text-base'>
            <Link href='/predictor'>Launch College Predictor</Link>
          </button>
          </div>
        </div>
        <div className='outline-solid w-100 outline-1px outline-gray-200 rounded p-5 shadow-md space-y-2'>
          <h2 className='text-3xl font-semibold'>AI Counselor</h2>
          <p className='text-base text-gray-500'>Get personalized guidance</p>
          <div className='flex flex-col items-center justify-center space-y-2 py-5s space-y-5 text-center mb-10 mt-10'>
            <MessageSquare className='text-gray-400' size={30}/>
          <button className='bg-black text-white rounded py-2 px-5 text-sm hover:bg-gray-800 transition duration-300 text-base'>
            <Link href='/quiz'>Open AI Counselor</Link>
          </button>
          </div>
        </div>
      </div>
      <div>
      <div className='px-10 py-15'>
        <div>
        <h1 className='text-2xl font-bold mb-5'>Upcoming Events</h1>
        </div>
        <div className='flex flex-col items-center justify-center space-x-5 outline-solid outline-gray-100 rounded py-10 px-3 text-sm flex items-center space-x-2 space-y-5'>
          <p className='text-gray-500 text-base'>No upcoming events at the moment.</p>
          <p className='text-gray-500 text-base'>Check back later for JEE counseling sessions and webinars.</p>
          </div>
        
      </div>
      </div>
    </div>
  )
}

export default Dashboard