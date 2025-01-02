import React from 'react'

const Contact = () => {
    return (
        <div className='max-w-[1200px] mx-auto bg-black sm:py-20 p-5'>
            <h2 className='text-4xl font-bold primary-color text-center '>Contact Me</h2>
            <div className='max-w-[800px] mx-auto bg-[#161616] rounded-xl mt-6'>
                <div className='p-10'>
                    <form action='https://getform.io/f/anllpzra' method='POST'>
                        <div className='grid sm:grid-cols-2 gap-x-5 gap-y-4'>
                            <div className='mt-2.5'>
                                <input type='text' name='name' placeholder='your name' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none  focus:border-pink-600' />
                            </div>
                            <div className='mt-2.5'>
                                <input type='email' name='email' placeholder='your email' className='bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none  focus:border-pink-600' />
                            </div>
                            <div className='mt-2.5 sm:col-span-2 '>
                                <textarea rows="4" placeholder='your message' name='message' className=' bg-[#161616] w-full  px-4 py-4 text-gray-400 placeholder-gray-400 border resize-none border-gray-700 rounded-md focus:outline-none  focus:border-pink-600' ></textarea>

                            </div>
                            <div className='mt-2.5 sm:col-span-2'>
                                <button type='submit' className='text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md'>Send</button>

                            </div>
                        </div>
                    </form>

                </div>

            </div>

        </div >
    )
}

export default Contact 