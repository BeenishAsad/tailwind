import React from 'react'

const Navbar = () => {
    return(
            <div className='flex fixed w-full justify-between items-center mx-auto px-9'>
            <h1 className='w-full font-bold text-3xl text-[#9e15dd]'>Navbar</h1>
            <ul className='md:flex'>
                <li className='p-4 text-white hover:text-gray-300'>Home</li>
                <li className='p-4 text-white hover:text-gray-300'>About</li>
                <li className='p-4 text-white hover:text-gray-300'>Contact</li>
                <li className='p-4 text-white hover:text-gray-300'>Career</li>
            </ul>
            </div>
    )
};

export default Navbar 