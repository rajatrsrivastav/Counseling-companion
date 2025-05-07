// compontet-footer
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const footer = () => {
  return (
    <div>
        <footer className="bg-gray-100 py-6 sm:py-8 md:py-10 mt-6 sm:mt-8 md:mt-10">
          <div className="text-center flex flex-col sm:flex-row items-center justify-between w-full px-4 sm:px-6">
            <p className="text-sm text-gray-500 ml-0 sm:ml-4 mb-4 sm:mb-0">© 2025 JEE College Predictor All rights reserved.</p>
            <div className="flex justify-center space-x-4 mr-0 sm:mr-4">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700">Terms of Service</Link>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default footer