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
                    <h2 className='text-lg sm:text-xl font-bold'>Academic Quiz</h2>
                    <p className='text-sm sm:text-base text-gray-500'>Answer a few questions to find your perfect academic focus.</p>
                </div>
                <div className='p-4 sm:p-6 px-4 sm:px-7 rounded space-y-3 sm:space-y-4 transition-all duration-300 transform hover:scale-[1.02]' style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                    <h2 className='text-lg sm:text-xl font-bold'>College Recommendations</h2>
                    <p className='text-sm sm:text-base text-gray-500'>Get a hyper-personalized list of the best MBBS/BDS colleges you can secure based on your rank.</p>
                </div>
                <div className='p-4 sm:p-6 px-4 sm:px-7 rounded space-y-3 sm:space-y-4 transition-all duration-300 transform hover:scale-[1.02]' style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                    <h2 className='text-lg sm:text-xl font-bold'>MCC Choice Filling Simulator</h2>
                    <p className='text-sm sm:text-base text-gray-500'>Practice arranging your college choices in our real-time simulator to lock in your dream seat without regrets.</p>
                </div>
                <div className='p-4 sm:p-6 px-4 sm:px-7 rounded space-y-3 sm:space-y-4 transition-all duration-300 transform hover:scale-[1.02]' style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                    <h2 className='text-lg sm:text-xl font-bold'>24/7 AI NEET Counselor</h2>
                    <p className='text-sm sm:text-base text-gray-500'>Get instant, data-backed answers to all your questions about colleges, fees, service bonds, and more.</p>
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