import React from 'react'
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
    FaDribbbleSquare,
} from 'react-icons/fa'

const Footer = () => {
    return(
        <div className='bg-black max-w-full mx-auto py-16 px-4 flex justify-center lg:grid-cols-3 gap-8 text-gray-300 '>
            <div>
                <h1 className='w-full text-4xl font-bold text-[#9e15dd]'>Footer.</h1>
                <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
                <div className=' flex justify-between my-6'>
                    <FaFacebookSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaDribbbleSquare size={30}/>                    
                </div>
                
            </div>

        </div>
    )
};



export default Footer