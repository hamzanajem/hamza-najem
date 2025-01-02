import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[1200px]  sm:h-[70vh] mx-auto py-8 bg-black'>
            <div className='my-auto mx-auto w-[250px]  md:w-[300px] h-auto lg:w-[400px]'>

                <img src='assets/hamza5.png' alt='hero-image' />


            </div>
            <div className='col-span-2 px-5 my-auto  '>
                <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='primary-color'>i'm</span>
                    <br />
                    <TypeAnimation sequence={["Frontend Dev", 1000, "Webdesigner", 1000, "Conultant", 1000]} wrapper='span' speed={50} repeat={Infinity} />
                </h1>
                <p className='text-white sm:text-lg my-6 lg:text-xl'>
                    my name is hamza najem and i'm a full stack developer specializing in building web applications using JavaScript, React and Node.js

                </p>
                <div className=' my-8 ' >
                    <a className='text-white  bg-primary-color px-4 py-2 sm:px-6 rounded-xl sm:py-3 border  border-gray-400 hover:bg-gradient-to-br from-red-700  to-[#db2777]  mr-4' href='mycv.pdf' target='_black'>Download my cv</a>

                    <Link to="/hamza-najem/contact" className='text-white px-4 py-2    sm:px-6 rounded-xl sm:py-3 border  border-gray-400 hover:bg-primary-color  hover:border-none '  >contact</Link>
                </div>
            </div>

        </div >
    )
}

export default Hero