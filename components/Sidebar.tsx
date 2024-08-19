'use client'

import { Menu } from 'lucide-react'

const Sidebar = () => {
  return (
    <div>
      {/* Top Logo */}
      <div className='flex gap-3 justify-between md:justify-normal items-center pt-8'>
        <div>logo</div>
        <h1 className='font-extrabold text-2xl'>Stocks</h1>
        <button className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={() => {}}>
          <Menu className='w-4 h-4' size={24} />
        </button>
      </div>
      {/* Links */}
      <div className='flex-grow mt-8'>{/* Links here */}</div>
      {/* Footer */}
      <div>
        <p className='text-center text-xs text-gray-500'>&copy; 2024 EdStock</p>
      </div>
    </div>
  )
}

export default Sidebar
