import React from 'react'
import bg from '../Assets/bg.jpg';


const Hero = () => {
    return(
        <div className='h-screen w-full bg-cover bg-center flex flex-col justify-center text-center' style={{backgroundImage: `url(${bg})`}}>
            
            <h1 className='font-bold text-5xl'>Practice Website </h1>
            <p className='font-bold text-white text-2xl'>Tailwindcss & React</p>
            <div className='flex justify-center items-center'>
                <button type='submit' className='bg-[#d3a6e8] w-[200px] rounded-md font-bold mt-7 p-2 '>About Us</button>
            </div>

        </div>
    )
};

export default Hero