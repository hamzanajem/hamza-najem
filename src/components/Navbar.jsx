import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

    return (

        <div className='bg-black  text-gray-400 h-[100px]  max-w-[1200px] mx-auto flex justify-between items-center'>
            <h1 className='text-3xl font-bold primary-color ml-4'>H.NAJEM</h1>

            <ul className='hidden md:flex'>
                <li className='p-5 relative group  '>
                    <Link to="/hamza-najem/" >home</Link>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>

                </li>

                <li className='p-5 relative group'>
                    <Link to="/hamza-najem/about" >about</Link>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>

                </li>
                <li className='p-5 relative group'>
                    <Link to="/hamza-najem/work" >work</Link>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>

                </li>
                <li className='p-5 relative group'>
                    <Link to="/hamza-najem/contact" >contact</Link>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>

                </li>

            </ul>
            <div onClick={handleNav} className='block md:hidden mr-6'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed top-0 left-0 h-full w-[60%] bg-[#202121] ease-in-out duration-700' : 'fixed left-[-100%]    '}>
                <h1 className='text-3xl primary-color m-4 '>H.NAJEM</h1>
                <ul className='p-8 text-2xl'>
                    <li className='p-2'>  <Link to="/hamza-najem/" onClick={handleNav} >home</Link></li>
                    <li className='p-2'>  <Link to="/hamza-najem/about" onClick={handleNav} >about</Link></li>
                    <li className='p-2'><Link to="/hamza-najem/work" onClick={handleNav} >work</Link></li>
                    <li className='p-2'><Link to="/hamza-najem/contact" onClick={handleNav}>contact</Link></li>

                </ul>
            </div>
        </div >



    )
}

export default Navbar