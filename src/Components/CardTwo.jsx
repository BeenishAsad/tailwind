import React from 'react'
import cardTwo from '../Assets/cardTwo.jpg'


const CardTwo = () =>{
    return(
    <div className='flex flex-col md:flex-row items-center p-8'>
        <div className='w-full md:w-1/2'>
            <img className='w-full h-full object-cover' src={cardTwo} alt='/'/>
        </div>
        <div className='w-full md:w-1/2 p-6 bg-black text-white'>
                <h2 className='text-2xl font-bold mb-4'>What we Do?</h2>
                <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            Doloribus quos velit?</p>
            </div>
    </div>
    ) 

};

export default CardTwo