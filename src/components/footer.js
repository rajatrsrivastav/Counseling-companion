import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const footer = () => {
  return (
    <div>
        <footer className="bg-gray-100 py-10 mt-10">
          <div className="text-center flex flex-row items-center justify-between w-full">
            <p className="text-sm text-gray-500 ml-4">© 2025 JEE College Predictor All rights reserved.</p>
            <div className="flex justify-center space-x-4 mr-4">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700">Terms of Service</Link>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default footer