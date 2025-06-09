import React from 'react'

const page = () => {
  return (
    <div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-70 py-6 sm:py-10 md:py-15">
            <h1 className='text-2xl sm:text-3xl font-bold my-6 sm:my-10'>Our Mission</h1>
            <p className='text-base sm:text-lg text-gray-500'>We are dedicated to providing personalized college counseling services to help students navigate the complex college admissions process. Our goal is to empower students with the knowledge and resources they need to make informed decisions about their future.</p>
        </div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-70">
            <h1 className='text-2xl sm:text-3xl font-bold my-6 sm:my-10'>What Makes Us Unique</h1>
            <div className='space-y-4 sm:space-y-5'>
                <div className='p-4 sm:p-6 px-4 sm:px-7 rounded space-y-3 sm:space-y-4 transition-all duration-300 transform hover:scale-[1.02]' style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                    <h2 className='text-lg sm:text-xl font-bold'>Interactive Career Fit Quiz</h2>
                    <p className='text-sm sm:text-base text-gray-500'>Our AI-driven quiz learns your preferences, interests, and goals to provide personalized recommendations.</p>
                </div>
                <div className='p-4 sm:p-6 px-4 sm:px-7 rounded space-y-3 sm:space-y-4 transition-all duration-300 transform hover:scale-[1.02]' style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                    <h2 className='text-lg sm:text-xl font-bold'>Best-Fit Branch Recommendations</h2>
                    <p className='text-sm sm:text-base text-gray-500'>Our AI-driven quiz learns your preferences, interests, and goals to provide personalized recommendations</p>
                </div>
                <div className='p-4 sm:p-6 px-4 sm:px-7 rounded space-y-3 sm:space-y-4 transition-all duration-300 transform hover:scale-[1.02]' style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                    <h2 className='text-lg sm:text-xl font-bold'>Real-Time JoSAA Simulation</h2>
                    <p className='text-sm sm:text-base text-gray-500'>Our AI-driven quiz learns your preferences, interests, and goals to provide personalized recommendations.</p>
                </div>
                <div className='p-4 sm:p-6 px-4 sm:px-7 rounded space-y-3 sm:space-y-4 transition-all duration-300 transform hover:scale-[1.02]' style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                    <h2 className='text-lg sm:text-xl font-bold'>AI Counseling Companion
                    </h2>
                    <p className='text-sm sm:text-base text-gray-500'>Our AI-driven quiz learns your preferences, interests, and goals to provide personalized recommendations.</p>
                </div>
            </div>
        </div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-70 py-6 sm:py-10 md:py-15">
            <h1 className='text-2xl sm:text-3xl font-bold my-6 sm:my-10'>Our Team</h1>
            <p className='text-base sm:text-lg text-gray-500'>Our team consists of experienced college counselors, educators, and technology experts who are passionate about helping students succeed. We leverage the latest advancements in AI technology to provide personalized guidance and support.</p>
        </div>
    </div>
  )
}

export default page