import React from 'react'

const Skills = () => {
    const Skillsimages = ['html', 'css', 'tailwind', 'javascript', 'react'];


    return (
        <div className='border border-gray-600 bg-black max-w-[1200px] md:h-[150px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center '>

            <h2 className='text-gray-700 text-xl md:text-4xl font-bold m-4 '>my<br />Tech<br /> Stack</h2>


            {Skillsimages.map((skill, key) => <div key={key} className='w-[70px] md:w-[80px] lg:w-[100px] m-4 sm:my-0 flex flex-col items-center '><img src={`assets/${skill}.png`} alt={`${skill}.png`} /><p className='mt-2 text-white '>{skill}</p></div>)}


        </div>
    )
}

export default Skills