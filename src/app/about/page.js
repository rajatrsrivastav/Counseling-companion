import React from 'react'

const page = () => {
  return (
    <main>
        <div className="px-70 py-15">
            <h1 className='text-3xl font-bold my-10'>Our Mission</h1>
            <p className='text-lg text-gray-500'>We are dedicated to providing personalized college counseling services to help students navigate the complex college admissions process. Our goal is to empower students with the knowledge and resources they need to make informed decisions about their future.</p>
        </div>
        <div className="px-70">
            <h1 className='text-3xl font-bold my-10'>What Makes Us Unique</h1>
            <div className='space-y-5'>
                <div className='bg-blue-50 p-6 px-7 rounded space-y-4'>
                    <h2 className='text-xl font-bold'>Interactive Career Fit Quiz</h2>
                    <p className='text-base text-gray-500'>Our AI-driven quiz learns your preferences, interests, and goals to provide personalized recommendations.</p>
                </div>
                <div className='bg-blue-50 p-6 px-7 rounded space-y-4'>
                    <h2 className='text-xl font-bold'>Best-Fit Branch Recommendations</h2>
                    <p className='text-base text-gray-500'>Our AI-driven quiz learns your preferences, interests, and goals to provide personalized recommendations</p>
                </div>
                <div className='bg-blue-50 p-6 px-7 rounded space-y-4'>
                    <h2 className='text-xl font-bold'>Real-Time JoSAA Simulation</h2>
                    <p className='text-base text-gray-500'>Our AI-driven quiz learns your preferences, interests, and goals to provide personalized recommendations.</p>
                </div>
                <div className='bg-blue-50 p-6 px-7 rounded space-y-4'>
                    <h2 className='text-xl font-bold'>AI Counseling Companion
                    </h2>
                    <p className='text-base text-gray-500'>Our AI-driven quiz learns your preferences, interests, and goals to provide personalized recommendations.</p>
                </div>
            </div>
        </div>
        <div className="px-70 py-15">
            <h1 className='text-3xl font-bold my-10'>Our Team</h1>
            <p className='text-lg text-gray-500'>Our team consists of experienced college counselors, educators, and technology experts who are passionate about helping students succeed. We leverage the latest advancements in AI technology to provide personalized guidance and support.</p>
        </div>
    </main>
  )
}

export default page